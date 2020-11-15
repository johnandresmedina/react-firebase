import firebase from '../config/firebase';
import { ProjectType, ProjectBaseType } from './types';

const projectService = {
  getProjectsOrderedBy: async (key: string, property: string): Promise<ProjectType[] | null> => {
    const projects = (await firebase
      .firestore()
      .collection('projects')
      .orderBy(property)
      .get()) as firebase.firestore.QuerySnapshot<ProjectBaseType>;

    return projects.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  getProjectById: async (key: string, id: string): Promise<ProjectType | null> => {
    const project = (await firebase
      .firestore()
      .collection('projects')
      .doc(id)
      .get()) as firebase.firestore.DocumentSnapshot<ProjectBaseType>;

    const projectData = project.data();
    let projectFound = null;

    if (projectData) {
      projectFound = { id: project.id, ...projectData };
    }

    return projectFound;
  },
  createProject: async ({
    title,
    content,
    authorFirstName,
    authorLastName,
    createdAt,
    authorId,
  }: ProjectBaseType): Promise<ProjectType | null> => {
    const project = (await firebase.firestore().collection('projects').add({
      title,
      content,
      authorFirstName,
      authorLastName,
      authorId,
      createdAt,
    })) as firebase.firestore.DocumentReference<ProjectBaseType>;

    const createdProject = await project.get();
    const projectData = createdProject.data();
    let newProject = null;

    if (projectData) {
      newProject = { id: project.id, ...projectData };
    }

    return newProject;
  },
};

export const { getProjectsOrderedBy, getProjectById, createProject } = projectService;
