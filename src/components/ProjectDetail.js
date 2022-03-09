/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import '../stylesheets/modal.css';
import close from '../assets/close.png';

function ProjectDetail({ modal, selectedProject, handleModal }) {
  let randomID = 1;
  return (
    <div id="modal-id" className={`fixed-modal-container ${modal}`}>
      <button type="button" onClick={() => handleModal('close')}>
        <img src={close} alt="close-modal-icon" />
      </button>
      {selectedProject ? (
        <div className="modal-info-container">
          <h3>{selectedProject.title}</h3>
          <img src={selectedProject.image} alt="img" />
          <section className="tech-container d-flex">
            {selectedProject.tech.map((tech) => (
              <p key={randomID += 1}>{tech}</p>
            ))}
          </section>
          <p className="project-modal-description">{selectedProject.description}</p>
          <section className="project-links d-flex">
            <a rel="noopener noreferrer" target="_blank" href={selectedProject.link}>Live</a>
            <a rel="noopener noreferrer" target="_blank" href={selectedProject.source}>{'</>'}</a>
          </section>
        </div>
      ) : null}

    </div>
  );
}

export default ProjectDetail;
