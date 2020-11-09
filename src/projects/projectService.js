import firebase from '../config/firebase';

const projectService = {
  getProjectsOrderedBy: async (key, property) => {
    const projects = await firebase.firestore().collection('projects').orderBy(property).get();
    return projects.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  getProjectById: async (key, id) => {
    const project = await firebase.firestore().collection('projects').doc(id).get();
    return { id: project.id, ...project.data() };
  },
  createProject: async ({ title, content, firstName, lastName, userId }) => {
    const project = await firebase.firestore().collection('projects').add({
      title,
      content,
      authorFirstName: firstName,
      authorLastName: lastName,
      authorId: userId,
      createdAt: new Date(),
    });

    const createdProject = await project.get();

    return {
      id: project.id,
      ...createdProject.data(),
    };
  },
};

export const { getProjectsOrderedBy, getProjectById, createProject } = projectService;
