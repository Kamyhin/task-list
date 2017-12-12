import { ADD_TASK, TOGGLE_TASK, EDIT_TASK, REMOVE_TASK, CLEAR_TASK_LIST } from '../constants/ActionsType'


const uid = () => Math.random().toString( 34 ).slice( 2 );

export const addTask = ( title, description ) => {
    return {
        type   : ADD_TASK,
        payload: {
            id: uid(),
            title: title,
            description: description,
            completed: false
        }
    };
};

export const editTask = ( id, title, description ) => {
    return {
        type   : EDIT_TASK,
        payload: {
            id: id,
            title: title,
            description: description
        }
    };
};

export const toggleTask = id => {
    return {
        type: TOGGLE_TASK,
        payload: {
            id: id
        }
    }
};

export const removeTask = id => {
    return {
        type: REMOVE_TASK,
        payload: {
            id: id
        }
    }
};

export const clearTaskList = () => {
    return {
        type: CLEAR_TASK_LIST
    };
};