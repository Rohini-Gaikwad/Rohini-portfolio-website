import React, { useState } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const recipient = "rohinidoke77@gmail.com";
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}
Email: ${email}
Message:
${message}`;

    const mailtoLink =
      `mailto:${recipient}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Contact</h2>

                <p>
                  Please feel free to contact me by submitting the form below. I
                  will get back to you as soon as possible.
                </p>
              </div>

              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        value={name}
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    value={message}
                    required
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a
                      title="Facebook"
                      href={props.data ? props.data.facebook : "/"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      title="Twitter"
                      href={props.data ? props.data.twitter : "/"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      title="YouTube"
                      href={props.data ? props.data.youtube : "/"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; Copyright 2026. Made by{" "}
            <a
              href="https://www.linkedin.com/in/rohini-gaikwad-415b79340/"
              target="_blank"
              rel="noreferrer"
            >
              Rohini Gaikwad
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
