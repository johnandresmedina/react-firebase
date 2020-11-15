import { useQuery, useQueryCache } from 'react-query';
import { getProjectById } from './projectService';
import { ProjectType } from './types';

const useProject = (projectId: string) => {
  const queryCache = useQueryCache();

  return useQuery<ProjectType | null, Error>(['project', projectId], getProjectById, {
    initialData: () => {
      const projects = queryCache.getQueryData(['projects', 'title']) as ProjectType[];
      return projects?.find(project => project.id === projectId);
    },
  });
};

export default useProject;
