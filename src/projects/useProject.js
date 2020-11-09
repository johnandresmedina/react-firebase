import { useQuery, useQueryCache } from 'react-query';
import { getProjectById } from './projectService';

export default function useProject(projectId) {
  const queryCache = useQueryCache();

  return useQuery(['project', projectId], getProjectById, {
    initialData: () => {
      return queryCache.getQueryData(['projects', 'title'])?.find(project => project.id === projectId);
    },
  });
}
