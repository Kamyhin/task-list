import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const RemoveTaskModal = (props) => {
    return (
        <Modal basic size='mini' open={props.open}>
            <Header icon='trash outline' content='Remove task'/>
            <Modal.Content>
                <p>{ props.message ? props.message : 'Remove this task?' }</p>
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
};

export default RemoveTaskModal