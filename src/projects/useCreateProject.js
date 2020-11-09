import { useMutation, useQueryCache } from 'react-query';
import { createProject } from './projectService';

export default function useCreateProject() {
  const queryCache = useQueryCache();

  return useMutation(createProject, {
    onMutate: newProject => {
      if (queryCache.getQueryData(['projects', 'title'])) {
        queryCache.setQueryData(['projects', 'title'], old => [
          { ...newProject, authorFirstName: newProject.firstName, authorLastName: newProject.lastName },
          ...old,
        ]);
      }
    },
    onSuccess: () => {
      queryCache.invalidateQueries(['projects', 'title']);
    },
    throwOnError: true,
  });
}
