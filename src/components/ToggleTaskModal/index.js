import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const ToggleTaskModal = props => {
    return (
        <Modal basic size='mini' open={props.open} onClose={props.onClose}>
            <Header icon='archive' content='Toggle task'/>
            <Modal.Content>
                <p>{ !props.completed ? 'Close the task?' : 'Open the task?' }</p>
            </Modal.Content>
            <Modal.Actions>
                <Button basic color='red' inverted onClick={props.onClose}>
                    <Icon name='remove'/> No
                </Button>
                <Button color='green' inverted onClick={props.onClick}>
                    <Icon name='checkmark'/> Yes
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ToggleTaskModal