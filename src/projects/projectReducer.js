import { getProjectsOrderedBy } from './projectService';

const ADD_PROJECT = 'ADD_PROJECT';

const FETCH_STARTED = 'FETCH_STARTED';
const FETCH_SUCCEEDED = 'FETCH_SUCCEEDED';
const FETCH_FAILED = 'FETCH_FAILED';

const initialState = {
  projects: [],
  status: 'idle',
  error: null,
};

const projectReducer = (state, { type, payload }) => {
  switch (type) {
    case FETCH_STARTED:
      return { ...state, status: 'pending' };
    case FETCH_SUCCEEDED:
      return { ...state, status: 'resolved', projects: payload };
    case FETCH_FAILED:
      return { ...state, status: 'rejected', error: payload };

    case ADD_PROJECT:
      return { ...state, projects: [...state.projects, payload] };
    default:
      return state;
  }
};

const addProject = project => ({ type: ADD_PROJECT, payload: project });

const getProjectsStarted = () => ({ type: FETCH_STARTED });
const getProjectsSucceeded = projects => ({ type: FETCH_SUCCEEDED, payload: projects });
const getProjectsFailed = error => ({ type: FETCH_FAILED, payload: error });

const fetchProjects = () => async dispatch => {
  dispatch(getProjectsStarted());

  try {
    const projects = await getProjectsOrderedBy('title');
    dispatch(getProjectsSucceeded(projects));
  } catch (error) {
    dispatch(getProjectsFailed(error));
  }
};

export default projectReducer;

export { initialState, fetchProjects, addProject };
