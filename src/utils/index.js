
export const get = key => {
    let value = localStorage.getItem(key) || {};

    try {
        return JSON.parse(value);
    } catch(e) {
        return value;
    }
};

export const set = (key, value) => {
    let tasks = get('tasks') || {};

    tasks[value.id] = {
        title: value.title,
        description: value.description,
        completed: value.completed
    };

    tasks = JSON.stringify(tasks);
    localStorage.setItem(key, tasks);
};

export const editTask = (key, value) => {

    let tasks = get(key) || {};

    tasks[value.id] = {
        title: value.title,
        description: value.description
    };

    tasks = JSON.stringify(tasks);
    localStorage.setItem(key, tasks);
};

export const toggle = id => {
    let tasks = get('tasks') || {};

    tasks[id].completed = !tasks[id].completed;

    tasks = JSON.stringify(tasks);
    localStorage.setItem('tasks', tasks);
};

export const removeTask = id => {
    let tasks = get('tasks') || {};

    delete tasks[id];

    tasks = JSON.stringify(tasks);
    localStorage.setItem('tasks', tasks);
};

export const removeAll = key => {
    localStorage.removeItem(key);
};