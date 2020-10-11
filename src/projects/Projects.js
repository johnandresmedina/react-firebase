import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, makeStyles } from '@material-ui/core';

import { ProjectContext } from '../context/projectContext';
import { fetchProjects } from './projectReducer';
import ProjectSummary from './ProjectSummary';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
});

export default function Projects() {
  const classes = useStyles();
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
      content = projects.map(project => (
        <Link className={classes.link} key={project.id} to={`/project/${project.id}`}>
          <ProjectSummary project={project} />
        </Link>
      ));
    } else if (status === 'rejected') {
      content = `There's been an error, please try again`;
    }

    return content;
  };

  return <Box className='project-list'>{getContent()}</Box>;
}
