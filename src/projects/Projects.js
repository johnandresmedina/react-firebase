import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';

import { ProjectContext } from '../context/projectContext';
import ProjectSummary from './ProjectSummary';

export default function Projects() {
  const projects = useContext(ProjectContext);

  return (
    <Box className='project-list'>
      {projects &&
        projects.map(project => {
          return <ProjectSummary key={project.id} project={project} />;
        })}
    </Box>
  );
}
