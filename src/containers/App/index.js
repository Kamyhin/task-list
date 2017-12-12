import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addTask, editTask, toggleTask, removeTask, clearTaskList} from '../../actions'
import { Divider } from 'semantic-ui-react'

import ButtonControl from '../../components/ButtonControl'
import TaskCard from '../../components/TaskCard'
import TaskModal from '../../components/TaskModal'
import RemoveTaskModal from '../../components/RemoveTaskModal'

import 'semantic-ui-css/semantic.min.css'
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            openTaskModal: false ,
            openRemoveTaskModal: false
        };
    }

    add = (id, title, description) => {
        this.props.addTask(title, description)
    };

    showTaskModal = () => this.setState({ openTaskModal: true });
    closeTaskModal = () => this.setState({ openTaskModal: false });

    showRemoveTaskModal = () => this.setState({ openRemoveTaskModal: true });
    closeRemoveTaskModal = () => this.setState({ openRemoveTaskModal: false });

    removeAllTasks = () => {
        this.props.clearTaskList();
        this.closeRemoveTaskModal();
    };

    render() {
        return (
            <div className="app">
                <h1>TASK LIST EXAMPLE</h1>
                <h3>ReactJS, Redux, Semantic UI React</h3>
                <ButtonControl showTaskModal={ this.showTaskModal } showRemoveTaskModal={this.showRemoveTaskModal}/>
                <Divider />
                <TaskCard { ...this.props } />
                <TaskModal
                    dimmer='blurring'
                    size='tiny'
                    open={this.state.openTaskModal}
                    onClose={this.closeTaskModal}
                    onClick={this.add}/>
                <RemoveTaskModal
                    open={this.state.openRemoveTaskModal}
                    onClick={this.removeAllTasks}
                    onClose={this.closeRemoveTaskModal}
                    message="Delete all tasks?"/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = dispatch => {
    return {
        addTask : (id, title) => dispatch(addTask(id, title)),
        toggleTask: id => dispatch(toggleTask(id)),
        removeTask: id => dispatch(removeTask(id)),
        editTask: (id, title, description) => dispatch(editTask(id, title, description)),
        clearTaskList: () => dispatch(clearTaskList())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)

