const INITIAL_STATE = {
  tasks: [
    {
      name: 'Complete online JavaScript course',
      completed: true,
    },
    {
      name: 'Jog around the park 3x',
      completed: false,
    },
    {
      name: '10 minutes meditation',
      completed: false,
    },
    {
      name: 'Read for 1 hour',
      completed: false,
    },
    {
      name: 'Pick up groceries',
      completed: false,
    },
    {
      name: 'Complete Todo App on Frontend Mentor',
      completed: false,
    },
  ],
  filter: 'all',
};

const todo = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };
    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.name !== action.task),
      };
    case 'SORT_TASK':
      return {
        ...state,
        tasks: action.tasks,
      };
    case 'TASK_COMPLETED':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.name === action.task
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case 'FILTER':
      return {
        ...state,
        filter: action.filter,
      };
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.completed !== true),
      };
    default:
      return state;
  }
};

export default todo;
