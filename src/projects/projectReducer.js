const CREATE_PROJECT = 'CREATE_PROJECT';

const initialState = {
  projects: [
    { id: 1, title: 'Title 1', content: 'Content 1' },
    { id: 2, title: 'Title 2', content: 'Content 2' },
    { id: 3, title: 'Title 3', content: 'Content 3' },
  ],
};

const projectReducer = (state, { type, payload }) => {
  switch (type) {
    case CREATE_PROJECT:
      return { projects: [...state.projects, payload] };
    default:
      return state;
  }
};

const createProject = ({ title, content }) => ({ type: CREATE_PROJECT, payload: { title, content } });

export default projectReducer;

export { initialState, createProject };
