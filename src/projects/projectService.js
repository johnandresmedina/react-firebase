import firebase from '../config/firebase';

const projectService = {
  getProjectsOrderedBy: async property => {
    const projects = await firebase.firestore().collection('projects').orderBy(property).get();
    return projects.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  getProjectById: async id => {
    const project = await firebase.firestore().collection('projects').doc(id).get();
    return { id: project.id, ...project.data() };
  },
  createProject: async ({ title, content }) => {
    const project = await firebase.firestore().collection('projects').add({
      title,
      content,
      authorFirstName: 'John',
      authorLastName: 'Medina',
      authorId: 12345,
      createdAt: new Date(),
    });
    return { id: project.id, title, content };
  },
};

export const { getProjectsOrderedBy, getProjectById, createProject } = projectService;
