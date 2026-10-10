import React from "react";
export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <p>
            Explore the testing strategies, automation frameworks, tools, and
            quality practices behind my projects from manual validation and API
            testing to automated testing and CI/CD integration.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <video
                    className="project-video-player"
                    muted
                    playsInline
                    controls
                    preload="metadata"
                    poster={d.thumbnail}
                  >
                    <source src={d.icon} type="video/mp4" />
                    Your browser does not support video playback.
                  </video>
                  {}
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <a href={d.text} target="_blank" rel="noopener noreferrer">
                      Visit Codebase
                    </a>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
