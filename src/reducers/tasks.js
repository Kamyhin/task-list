import { ADD_TASK, TOGGLE_TASK, EDIT_TASK, REMOVE_TASK, CLEAR_TASK_LIST } from '../constants/ActionsType'
import * as Storage from '../utils'


const init = Storage.get('tasks') || {};

const tasks = (state = init, action = []) => {
        switch (action.type) {
            case ADD_TASK:
                state[action.payload.id] = {
                    title: action.payload.title,
                    description: action.payload.description,
                    completed: action.payload.completed
                };
                return state;
            case TOGGLE_TASK:
                state[action.payload.id].completed = !state[action.payload.id].completed;
                return state;
            case EDIT_TASK:
                state[action.payload.id] = {
                    title: action.payload.title,
                    description: action.payload.description
                };
                return state;
            case REMOVE_TASK:
                delete state[action.payload.id];
                return state;
            case CLEAR_TASK_LIST:
                return {};
            default:
                return state;
        }
    };

export default tasks;