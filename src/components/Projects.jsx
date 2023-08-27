import React from "react";
import projectimg1 from "../assets/img/RbLogo.png";
import projectimg2 from "../assets/img/edusite-logo.jpg";
import projectimg3 from "../assets/img/mi-logo.jpg";
import projectimg4 from "../assets/img/vete-logo.png";
import projectimg5 from "../assets/img/tesla-logo.png";

const Projects = () => {
  const githubIconButton1 = () => {
    const gitHubProfileUrl = "https://github.com/rushibutani";
    window.open(gitHubProfileUrl, "_blank");
  };

  const githubIconButton2 = () => {
    const gitHubProfileUrl =
      "https://github.com/rushibutani/Website-Clone-Projects/tree/main/iEducate%20Website";
    window.open(gitHubProfileUrl, "_blank");
  };

  const githubIconButton3 = () => {
    const gitHubProfileUrl =
      "https://github.com/rushibutani/Website-Clone-Projects/tree/main/Xiaomi%20Website%20Clone";
    window.open(gitHubProfileUrl, "_blank");
  };

  const githubIconButton4 = () => {
    const gitHubProfileUrl =
      "https://github.com/rushibutani/Website-Clone-Projects/tree/main/Veterinarian%20Psd%20Clone";
    window.open(gitHubProfileUrl, "_blank");
  };

  const githubIconButton5 = () => {
    const gitHubProfileUrl =
      "https://github.com/rushibutani/Website-Clone-Projects/tree/main/Tesla%20Website%20Clone";
    window.open(gitHubProfileUrl, "_blank");
  };

  return (
    <section id="projects">
      <p className="section-text-p1">Browse My Recent</p>
      <h1 className="title mb-40">My Projects</h1>

      <div className="w-full project-card-container flex">
        <div className="project-card">
          <div className="project-img">
            <img src={projectimg1} alt="src" />
          </div>
          <div className="project-title-a">
            <h4 className="project-title">My Portfolio</h4>

            <p>
              My Portfolio for introducing myself digitally. It is built using
              HTML, CSS, SASS, JavaScript and React.
            </p>
            <div className="project-btn-container">
              <button className="project-btn" onClick={githubIconButton1}>
                GitHub
              </button>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img src={projectimg2} alt="src" />
          </div>
          <div className="project-title-a">
            <h4 className="project-title">iEducate</h4>

            <p>
              Static website to showcase the future of education. It is built
              using HTML, CSS and JavaScript.
            </p>
            <div className="project-btn-container">
              <button className="project-btn" onClick={githubIconButton2}>
                GitHub
              </button>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img src={projectimg3} alt="src" />
          </div>
          <div className="project-title-a">
            <h4 className="project-title">Xiaomi Website Clone</h4>

            <p>Xiaomi official website clone using HTML, CSS and JavaScript.</p>
            <div className="project-btn-container">
              <button className="project-btn" onClick={githubIconButton3}>
                GitHub
              </button>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img src={projectimg4} alt="src" />
          </div>
          <div className="project-title-a">
            <h4 className="project-title">Veterinary PSD Clone</h4>

            <p>Veterinary PSD website design built using HTML and CSS.</p>
            <div className="project-btn-container">
              <button className="project-btn" onClick={githubIconButton4}>
                GitHub
              </button>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img src={projectimg5} alt="src" />
          </div>
          <div className="project-title-a">
            <h4 className="project-title">Tesla Website Clone</h4>

            <p>Tesla official website clone using HTML, CSS and JavaScript.</p>
            <div className="project-btn-container">
              <button className="project-btn" onClick={githubIconButton5}>
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;