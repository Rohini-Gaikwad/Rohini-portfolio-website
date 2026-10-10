import React from "react";
import { TypeAnimation } from "react-type-animation";
export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <div className="designation">
                  <TypeAnimation
                    sequence={[
                      "ISTQB® Certified Tester",
                      500,
                      "A MANUAL TESTER",
                      500,
                      "AN AUTOMATION TESTER",
                      500,
                      "AN API TESTER",
                      500,
                      "AN ACCESSIBILITY TESTER",
                      500,
                      "A QA ENGINEER",
                      500,
                    ]}
                    style={{ fontSize: "2em" }}
                    repeat={Infinity}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
