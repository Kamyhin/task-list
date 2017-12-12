import { ADD_TASK, TOGGLE_TASK, REMOVE_TASK, EDIT_TASK, CLEAR_TASK_LIST } from '../constants/ActionsType.js'
import * as Storage from '../utils'

const StorageMiddleware = store => next => action => {
    if(action.type === ADD_TASK){
        Storage.set('tasks', action.payload);
        next(action);
    }
    else if(action.type === TOGGLE_TASK){
        Storage.toggle(action.payload.id);
        next(action);
    }
    else if(action.type === EDIT_TASK){
        Storage.editTask('tasks', action.payload);
        next(action);
    }
    else if(action.type === REMOVE_TASK){
        Storage.removeTask(action.payload.id);
        next(action);
    }
    else if(action.type === CLEAR_TASK_LIST){
        Storage.removeAll('tasks');
        next(action);
    }
    else {
        next(action);
    }
};

export default StorageMiddleware;