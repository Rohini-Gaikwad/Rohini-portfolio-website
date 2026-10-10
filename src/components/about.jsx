import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img
              src="https://rohini-gaikwad.github.io/Rohini-portfolio-website/img/Rohinia-bout.png"
              className="img-responsive"
              alt=""
            />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Me</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <p>{props.data ? props.data.paragraph1 : "loading..."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
