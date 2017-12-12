import React from 'react';
import { Button, Icon } from 'semantic-ui-react'


const ButtonControl = (props) => {
    return (
        <Button.Group>
            <Button animated='vertical' onClick={props.showTaskModal} positive>
                <Button.Content hidden>ADD</Button.Content>
                <Button.Content visible>
                    <Icon name='plus'/>
                </Button.Content>
            </Button>
            <Button.Or/>
            <Button animated='vertical' onClick={props.showRemoveTaskModal} negative>
                <Button.Content hidden>CLEAR</Button.Content>
                <Button.Content visible>
                    <Icon name='remove'/>
                </Button.Content>
            </Button>
        </Button.Group>
    )
};

export default ButtonControl;