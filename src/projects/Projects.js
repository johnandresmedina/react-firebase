import React, { useContext, useEffect } from 'react';
import Box from '@material-ui/core/Box';

import { ProjectContext } from '../context/projectContext';
import { fetchProjects } from './projectReducer';
import ProjectSummary from './ProjectSummary';

export default function Projects() {
  const {
    state: { projects, status },
    dispatch,
  } = useContext(ProjectContext);

  useEffect(() => {
    if (projects.length === 0) {
      dispatch(fetchProjects());
    }
  }, [dispatch, projects]);

  const getContent = () => {
    let content = null;

    if (status === 'idle' || status === 'pending') {
      content = 'loading...';
    } else if (status === 'resolved') {
      content = projects.map(project => <ProjectSummary key={project.id} project={project} />);
    } else if (status === 'rejected') {
      content = `There's been an error, please try again`;
    }

    return content;
  };

  return <Box className='project-list'>{getContent()}</Box>;
}
