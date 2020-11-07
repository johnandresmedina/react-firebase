import React from 'react';
import { Link } from 'react-router-dom';
import { Box, makeStyles } from '@material-ui/core';
import { useQuery } from 'react-query';

import { getProjectsOrderedBy } from './projectService';
import ProjectSummary from './ProjectSummary';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
});

export default function Projects() {
  const classes = useStyles();
  const { isLoading, isError, isSuccess, data: projects } = useQuery(['projects', 'title'], getProjectsOrderedBy);

  const getContent = () => {
    let content = null;

    if (isLoading) {
      content = 'loading...';
    } else if (isSuccess) {
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
}
