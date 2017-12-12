import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import _ from 'underscore'
import ButtonTask from '../ButtonTask'
import TaskModal from '../TaskModal'
import ToggleTaskModal from '../ToggleTaskModal'
import RemoveTaskModal from '../RemoveTaskModal'

import './TaskCard.css'

class TaskCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            toggleOpen: false,
            removeOpen: false,
            taskOpen: false,
            completed: false,
            id: "",
            title: "",
            description: ""
        };
    }

    componentDidMount(){

    };

    toggleTask = () => {
        this.props.toggleTask(this.state.id);
        this.closeToggleModal();
    };

    showToggleModal = (id, completed) => {
        this.setState({
            id: id,
            completed: completed,
            toggleOpen: true
        })
    };

    closeToggleModal = () => this.setState({ toggleOpen: false });

    removeTask = () => {
        this.props.removeTask(this.state.id);
        this.closeRemoveModal();
    };

    showRemoveModal = id => {
        this.setState({
            id: id,
            removeOpen: true
        })
    };

    closeRemoveModal = () => this.setState({ removeOpen: false });

    editTask = (id, title, description) => {
        this.props.editTask(id, title, description);
        this.closeTaskModal();
    };

    showTaskModal = id => {
        this.setState({
            id: id,
            title: this.props.tasks[id].title,
            description: this.props.tasks[id].description,
            taskOpen: true
        })
    };

    closeTaskModal = () => this.setState({ taskOpen: false });

    renderCard = props => {
        const {tasks} = props;
        return _.map(tasks, (num, key) => {
            return (
                <Card color={num.completed ? 'green' : 'red'} key={key}>
                    <Card.Content>
                        <Card.Header content={num.title} />
                        <Card.Description content={num.description} />
                        <br/>
                        <ButtonTask showToggleModal={this.showToggleModal } showRemoveModal={this.showRemoveModal} showTaskModal={this.showTaskModal} id={key} completed={num.completed} />
                    </Card.Content>
                </Card>
            )
        })
    };

    render() {
        return (
            <Card.Group>
                {this.renderCard(this.props)}
                <ToggleTaskModal
                    open={this.state.toggleOpen}
                    completed={this.state.completed}
                    onClick={this.toggleTask}
                    onClose={this.closeToggleModal}/>
                <RemoveTaskModal
                    open={this.state.removeOpen}
                    onClick={this.removeTask}
                    onClose={this.closeRemoveModal}/>
                <TaskModal
                    dimmer='blurring'
                    size='tiny'
                    task={{id: this.state.id, title: this.state.title, description: this.state.description}}
                    open={this.state.taskOpen}
                    onClose={this.closeTaskModal}
                    onClick={this.editTask}/>
            </Card.Group>
        )
    }
}

export default TaskCard;