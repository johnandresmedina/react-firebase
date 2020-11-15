import React from 'react';
import { Link } from 'react-router-dom';
import { Box, makeStyles } from '@material-ui/core';

import useProjects from './useProjects';
import ProjectSummary from './ProjectSummary';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
});

const Projects = () => {
  const classes = useStyles();
  const { isLoading, isError, isSuccess, data: projects } = useProjects();

  const getContent = () => {
    let content = null;

    if (isLoading) {
      content = 'loading...';
    } else if (isSuccess && projects) {
      content = projects.map(project => (
        <Link className={classes.link} key={project.id} to={`/project/${project.id}`}>
          <ProjectSummary project={project} />
        </Link>
      ));
    } else if (isError) {
      content = `There's been an error, please try again`;
    }

    return content;
  };

  return <Box className='project-list'>{getContent()}</Box>;
};

export default Projects;
