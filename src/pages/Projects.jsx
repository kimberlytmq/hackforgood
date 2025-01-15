import "./Projects.css";
import { Link } from 'react-router-dom';

const projects = [
  {name: "project A"},
  {name: "project B"},
];

function Projects() {
  return (
    <div className="container">
      <div className="projectPage">
        <h1>Projects</h1>
        <div className="row">
          <input type="text" id="input-box" placeholder="Which project are you looking for" />
          <button>Search</button>
        </div>
        <ul>
          {projects.map((project) => (
            <li key ={project.id}>
              <Link to={`/project/${project.name}`}>{project.name}</Link>
            </li>
          ))} 
        </ul>

      </div>
    </div>
    
  );
}

function projectButton({ title }) {
  return;
}

export default Projects;