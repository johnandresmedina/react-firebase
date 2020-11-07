const ADD_PROJECT = 'ADD_PROJECT';

const initialState = {
  projects: [],
  status: 'idle',
  error: null,
};

const projectReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_PROJECT:
      return { ...state, projects: [...state.projects, payload] };
    default:
      return state;
  }
};

const addProject = project => ({ type: ADD_PROJECT, payload: project });

export default projectReducer;

export { initialState, addProject };
