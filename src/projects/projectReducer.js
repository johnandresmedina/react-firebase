import firebase from '../config/firebase';

const CREATE_PROJECT = 'CREATE_PROJECT';
const CREATE_PROJECT_FAILED = 'CREATE_PROJECT_FAILED';

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
      return { ...state, projects: [...state.projects, payload] };
    case CREATE_PROJECT_FAILED:
      return { ...state, error: payload };
    default:
      return state;
  }
};

const createProject = ({ title, content }) => async dispatch => {
  try {
    let project = await firebase.firestore().collection('projects').add({
      title,
      content,
      authorFirstName: 'John',
      authorLastName: 'Medina',
      authorId: 12345,
      createdAt: new Date(),
    });

    dispatch({ type: CREATE_PROJECT, payload: { id: project.id, title, content } });
  } catch (error) {
    dispatch({ type: CREATE_PROJECT_FAILED, payload: error });
  }
};

const getProjectsStarted = () => ({ type: FETCH_STARTED });
const getProjectsSucceeded = projects => ({ type: FETCH_SUCCEEDED, payload: projects });
const getProjectsFailed = error => ({ type: FETCH_FAILED, payload: error });

const fetchProjects = () => async dispatch => {
  dispatch(getProjectsStarted());

  try {
    let projects = await firebase.firestore().collection('projects').orderBy('title').get();
    projects = projects.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    dispatch(getProjectsSucceeded(projects));
  } catch (error) {
    dispatch(getProjectsFailed(error));
  }
};

export default projectReducer;

export { initialState, fetchProjects, createProject };
