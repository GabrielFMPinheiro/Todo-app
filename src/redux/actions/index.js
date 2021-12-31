export const changeTheme = () => ({
  type: 'CHANGE_THEME',
});

export const addTask = (taskInfo) => ({
  type: 'ADD_TASK',
  task: taskInfo,
});

export const removeTask = (taskName) => ({
  type: 'REMOVE_TASK',
  task: taskName,
});

export const completeTask = (taskName) => ({
  type: 'TASK_COMPLETED',
  task: taskName,
});

export const sortTasks = (newArr) => ({
  type: 'SORT_TASK',
  tasks: newArr,
});

export const filterTasks = (name) => ({
  type: 'FILTER',
  filter: name,
});

export const clearCompleted = () => ({
  type: 'CLEAR_COMPLETED',
});
