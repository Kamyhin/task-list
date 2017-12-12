import React, { Component } from 'react'
import { Button, Header, Modal, Form } from 'semantic-ui-react'

class TaskModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            title: "",
            description: ""
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps.task)
    }

    add = () => {
        this.props.onClick(this.state.id, this.state.title, this.state.description);
        this.props.onClose()
    };

    changeTitle = e => {
        this.setState({
            title: e.target.value
        })
    };

    changeDescription = e => {
        this.setState({
            description: e.target.value
        })
    };

    render() {
        const { dimmer, size, open, onClose } = this.props;

        return (
            <Modal dimmer={dimmer} size={size} open={open} onClose={onClose}>
                <Modal.Content>
                    <Modal.Description>
                        <Header>{this.state.id ? `Edit task ${this.state.id}` : "New task"}</Header>
                        <Form>
                            <Form.Input
                                label='Title'
                                placeholder='Task title'
                                id='title'
                                value={this.state.title}
                                onChange={this.changeTitle}/>
                            <Form.TextArea
                                label='Description'
                                placeholder='Task description'
                                id='description'
                                value={this.state.description}
                                onChange={this.changeDescription}/>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={onClose}>
                        Cancel
                    </Button>
                    <Button positive icon='checkmark' labelPosition='right' content="Save"
                            onClick={this.add}/>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default TaskModal