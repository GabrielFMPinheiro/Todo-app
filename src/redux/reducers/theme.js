const INITIAL_STATE = {
  theme: 'dark',
};

const controlTheme = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};

export default controlTheme;
