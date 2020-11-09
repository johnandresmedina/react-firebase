import { useQuery } from 'react-query';
import { getProjectsOrderedBy } from './projectService';

export default function useProjects() {
  return useQuery(['projects', 'title'], getProjectsOrderedBy);
}
