// import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <Link to={`/projects/${project.id}`} >
        <h3>{project.title}</h3>
      </Link>
    </div>
  );
};
ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;