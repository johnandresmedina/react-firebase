import { useMutation, useQueryCache } from 'react-query';
import { createProject } from './projectService';
import { ProjectType, ProjectBaseType } from './types';

export default function useCreateProject() {
  const queryCache = useQueryCache();

  return useMutation<ProjectType | null, Error, ProjectBaseType>(createProject, {
    onMutate: newProject => {
      if (queryCache.getQueryData(['projects', 'title'])) {
        queryCache.setQueryData<ProjectType[], Error>(['projects', 'title'], (old): ProjectType[] => {
          if (old) {
            return [{ id: 'tmp-id', ...newProject }, ...old];
          }

          return [{ id: 'tmp-id', ...newProject }];
        });
      }
    },
    onSuccess: () => {
      queryCache.invalidateQueries(['projects', 'title']);
    },
    throwOnError: true,
  });
}
