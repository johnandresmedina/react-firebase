import firebase from '../config/firebase';

const CREATE_PROJECT = 'CREATE_PROJECT';
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

    case CREATE_PROJECT:
      return { projects: [...state.projects, payload] };
    default:
      return state;
  }
};

const createProject = ({ title, content }) => ({ type: CREATE_PROJECT, payload: { title, content } });

const getProjectsStarted = () => ({ type: FETCH_STARTED });
const getProjectsSucceeded = projects => ({ type: FETCH_SUCCEEDED, payload: projects });
const getProjectsFailed = error => ({ type: FETCH_FAILED, payload: error });

const fetchProjects = () => async dispatch => {
  dispatch(getProjectsStarted());

  try {
    let projects = await firebase.firestore().collection('projects').get();
    projects = projects.docs.map(doc => doc.data());
    dispatch(getProjectsSucceeded(projects));
  } catch (error) {
    dispatch(getProjectsFailed(error));
  }
};

export default projectReducer;

export { initialState, fetchProjects, createProject };
