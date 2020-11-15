import { useQuery } from 'react-query';
import { getProjectsOrderedBy } from './projectService';
import { ProjectType } from './types';

const useProjects = () => {
  return useQuery<ProjectType[] | null>(['projects', 'title'], getProjectsOrderedBy);
};

export default useProjects;
