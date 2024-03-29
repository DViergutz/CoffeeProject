import React from "react";

function AboutThisProject() {
  return (
    <div>
      <div className="hero-about">
        <div className="d-flex flex-column">
          <h2 className="about-heading">What is Utica Coffee?</h2>
          <p className="about-subheading">
            Utica Coffee is an e-commerce platform inspired by Utica Coffee
            Roasting Co. Developed during a Coding Bootcamp at Hack Academy,
            it's a collaborative project showcasing Full Stack Development
            skills.
          </p>
          <p className="about-subheading">
            Utilizing SQL, Express.js, React.js, and Node.js, the team
            collectively invested approximately 150 hours of work per member
            over the course of three weeks. The goal was to demonstrate
            practical application of Bootcamp learnings.
          </p>
          <p className="about-subheading">
            The development process involved planning, design, implementation,
            testing, and deployment, emphasizing effective communication and
            collaboration.
          </p>
          <p className="about-subheading">
            Utica Coffee is a fully functional e-commerce platform reflecting
            the team's dedication and proficiency in Full Stack Development.
          </p>
        </div>
      </div>
      <div className="main-section">
        <div className="about-info text-center d-flex flex-column align-items-center">
          <h2 className="text-light">Technologies & Tools</h2>
          <p>
            Throughout the coding bootcamp, we delved into a wide range of
            technologies encompassing both backend and front end development. We
            also gained hands-on experience with databases and leveraged
            practical tools to optimize our workflow. To ensure efficient task
            allocation within our team, we utilized Trello as our project
            management tool.
          </p>
          <p>
            The project was divided into three sprints, with Github serving as
            our primary collaboration platform. Discord played a crucial role in
            facilitating seamless communication throughout the development
            process.
          </p>
          <p>
            For this project, we handpicked the following set of tools to boost
            our productivity.
          </p>
        </div>
        <div>
          <div className="about-info">
            <div className="row row-cols-2 row-cols-md-5 g-4">
              <div className="col">
                <div className="d-flex flex-column align-items-center p-4">
                  <img
                    className="about-icons mb-2"
                    src="/src/assets/img/about-icons/bootstrap.png"
                    alt=""
                  />
                  <small>Bootstrap</small>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column align-items-center p-4">
                  <img
                    className="about-icons mb-2"
                    src="/src/assets/img/about-icons/css3.png"
                    alt=""
                  />
                  <small>CSS3</small>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column align-items-center p-4">
                  <img
                    className="about-icons mb-2"
                    src="/src/assets/img/about-icons/discord.png"
                    alt=""
                  />
                  <small>Discord</small>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column align-items-center p-4">
                  <img
                    className="about-icons mb-2"
                    src="/src/assets/img/about-icons/figma.png"
                    alt=""
                  />
                  <small>Figma</small>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column align-items-center p-4">
                  <img
                    className="about-icons mb-2"
                    src="/src/assets/img/about-icons/github.png"
                    alt=""
                  />
                  <small>Github</small>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column align-items-center p-4">
                  <img
                    className="about-icons mb-2"
                    src="/src/assets/img/about-icons/js.png"
                    alt=""
                  />
                  <small>JavaScript</small>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column align-items-center p-4">
                  <img
                    className="about-icons mb-2"
                    src="/src/assets/img/about-icons/nodejs.png"
                    alt=""
                  />
                  <small>NodeJS</small>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column align-items-center p-4">
                  <img
                    className="about-icons mb-2"
                    src="/src/assets/img/about-icons/react.png"
                    alt=""
                  />
                  <small>React</small>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column align-items-center p-4">
                  <img
                    className="about-icons mb-2"
                    src="/src/assets/img/about-icons/redux.png"
                    alt=""
                  />
                  <small>Redux</small>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column align-items-center p-4">
                  <img
                    className="about-icons mb-2"
                    src="/src/assets/img/about-icons/sql.png"
                    alt=""
                  />
                  <small>SQL</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutThisProject;

{
  /* <img
  className="about-icons"
  src="/src/assets/img/about-icons/bootstrap.png"
  alt=""
/>; */
}
