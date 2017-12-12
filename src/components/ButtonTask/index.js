import React from 'react';
import { Button, Icon, Popup } from 'semantic-ui-react'


const ButtonTask = (props) => {

    const showToggleModal = () =>{
        props.showToggleModal(props.id, props.completed)
    };

    const showRemoveModal = () =>{
        props.showRemoveModal(props.id)
    };

    const showTaskModal = () =>{
        props.showTaskModal(props.id)
    };

    return (
        <div>
            <Popup
                trigger={<Button icon onClick={showToggleModal}><Icon name='checkmark' /></Button>}
                content={props.completed ? 'Open task': 'Close task'}/>
            <Popup
                trigger={<Button icon onClick={showTaskModal}><Icon name='edit' /></Button>}
                content='Edit task'/>
            <Popup
                trigger={<Button icon onClick={showRemoveModal}><Icon name='remove' /></Button>}
                content='Remove task'/>
        </div>
    )
};

export default ButtonTask;