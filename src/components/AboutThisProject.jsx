import React from "react";
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/github.svg";
import mer from "../assets/img/MER.png";
import Gaston from "../assets/img/Gaston.png";
import Santiago from "../assets/img/Santiago.png";
import David from "../assets/img/David.png";

function AboutThisProject() {
  return (
    <div className="mainAboutThisProject">
      <div className="hero-about">
        <div className="textAboutProject d-flex flex-column">
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
      <div className="main-section bg-fondo3">
        <div className="about-info text-center d-flex flex-column align-items-center">
          <h2 className="text-light">Technologies & Tools</h2>
          <p>
            During our coding bootcamp journey, we immersed ourselves in a
            diverse array of technologies spanning both backend and frontend
            development. We actively engaged with databases, honing our skills,
            and employed practical tools to streamline our workflow effectively.
          </p>
          <p>
            Our project underwent meticulous segmentation into three sprints,
            with Github serving as our central collaboration hub. Discord
            emerged as an indispensable platform, enabling seamless
            communication throughout every phase of the development journey.
          </p>
          <p>
            In pursuit of heightened productivity for this project, we curated a
            select ensemble of tools designed to elevate our efficiency and
            innovation.
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
                  <small className="text-orange ">Bootstrap</small>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column align-items-center p-4">
                  <img
                    className="about-icons mb-2"
                    src="/src/assets/img/about-icons/css3.png"
                    alt=""
                  />
                  <small className="text-orange ">CSS3</small>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column align-items-center p-4">
                  <img
                    className="about-icons mb-2"
                    src="/src/assets/img/about-icons/discord.png"
                    alt=""
                  />
                  <small className="text-orange ">Discord</small>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column align-items-center p-4">
                  <img
                    className="about-icons mb-2"
                    src="/src/assets/img/about-icons/figma.png"
                    alt=""
                  />
                  <small className="text-orange ">Figma</small>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column align-items-center p-4">
                  <img
                    className="about-icons mb-2"
                    src="/src/assets/img/about-icons/github.png"
                    alt=""
                  />
                  <small className="text-orange ">Github</small>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column align-items-center p-4">
                  <img
                    className="about-icons mb-2"
                    src="/src/assets/img/about-icons/js.png"
                    alt=""
                  />
                  <small className="text-orange ">JavaScript</small>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column align-items-center p-4">
                  <img
                    className="about-icons mb-2"
                    src="/src/assets/img/about-icons/nodejs.png"
                    alt=""
                  />
                  <small className="text-orange ">NodeJS</small>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column align-items-center p-4">
                  <img
                    className="about-icons mb-2"
                    src="/src/assets/img/about-icons/react.png"
                    alt=""
                  />
                  <small className="text-orange ">React</small>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column align-items-center p-4">
                  <img
                    className="about-icons mb-2"
                    src="/src/assets/img/about-icons/redux.png"
                    alt=""
                  />
                  <small className="text-orange ">Redux</small>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column align-items-center p-4">
                  <img
                    className="about-icons mb-2"
                    src="/src/assets/img/about-icons/sql.png"
                    alt=""
                  />
                  <small className="text-orange ">SQL</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-section bg-fondo3">
        <div className="about-info text-center d-flex flex-column align-items-center">
          <h2 className="text-light">Mapping User Flow</h2>
          <p>
            Diving deep into the essence of our website, we meticulously chart
            out the various perspectives, understanding the natural flow each
            page should embody. From the moment you click, every button leads
            purposefully to its corresponding section, ensuring a fluid journey
            that keeps you engaged without any hitches. We prioritize user
            experience as much as we do the design of our interfaces, striving
            for a seamless, friendly flow that ensures you never feel 'stuck' at
            any point.
          </p>
        </div>
      </div>
      <div className="main-section bg-fondo3">
        <div className="about-info text-center d-flex flex-column align-items-center">
          <h2 className="text-light">Admin Dashboard</h2>
          <p>
            In our e-commerce platform, the admin dashboard enables users to
            delete, update, or create products, categories, and customers, while
            also providing oversight of order statuses.
          </p>
        </div>
      </div>
      <div className="main-section bg-fondo3">
        <div className="text-center d-flex flex-column align-items-center ">
          <h2 className="text-light mb-4">Meet Our Team</h2>
          <p className="about-info">
            Discover the Faces Behind Our Success! Get to know the talented
            individuals who bring creativity, expertise, and passion to our
            team. Meet our dedicated team members below and learn more about
            their unique contributions.
          </p>
          <div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 g-4">
            <div className="col mb-4">
              <div className="cardAbout card h-100 ">
                <img src={David} className="card-img-top" alt="Team Member 1" />
                <div className="card-body">
                  <h5 className="card-title">Santiago Ternande</h5>
                  <p>Full Stack Developer</p>
                  <hr className="text-orange" />
                  <div className="imgCardAbout">
                    <a href="#" className="btn">
                      <i className="bi bi-linkedin iconLinkedin  fs-2 hoverSocial"></i>
                    </a>
                    <a href="#" className="btn">
                      <i className="bi bi-github iconoGithub fs-2 hoverSocial"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card h-100 cardAbout">
                <img src={David} className="card-img-top" alt="Team Member 2" />
                <div className="card-body">
                  <h5 className="card-title">Jane Smith</h5>
                  <p>Full Stack Developer</p>
                  <hr className="text-orange" />
                  <div className="imgCardAbout">
                    <a href="#" className="btn">
                      <i class="bi bi-linkedin hoverSocial  fs-2 hoverSocial"></i>
                    </a>
                    <a href="#" className="btn">
                      <i className="bi bi-github iconoGithub  fs-2 hoverSocial"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card h-100 cardAbout">
                <img
                  src={Gaston}
                  className="card-img-top"
                  alt="Team Member 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Gaston Silva</h5>
                  <p>Full Stack Developer</p>
                  <hr className="text-orange" />
                  <div className="imgCardAbout">
                    <a href="#" className="btn">
                      <i class="bi bi-linkedin iconLinkedin  fs-2 hoverSocial"></i>
                    </a>
                    <a href="#" className="btn">
                      <i className="bi bi-github iconoGithub  fs-2 hoverSocial"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card h-100 cardAbout">
                <img
                  src="https://media.istockphoto.com/id/542703430/es/foto/sonriente-hombre.jpg?s=2048x2048&w=is&k=20&c=3ZmbfwZk4PyOkEX_a2Rl4yH6zuwOEl0DHeZEytXszKA="
                  className="card-img-top"
                  alt="Team Member 4"
                />
                <div className="card-body">
                  <h5 className="card-title">Bob Williams</h5>
                  <p>Full Stack Developer</p>
                  <hr className="text-orange" />
                  <div className="imgCardAbout">
                    <a href="#" className="btn">
                      <i class="bi bi-linkedin iconLinkedin  fs-2 hoverSocial"></i>
                    </a>
                    <a href="#" className="btn">
                      <i className="bi bi-github iconoGithub  fs-2 hoverSocial"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card h-100 cardAbout">
                <img
                  src="https://media.istockphoto.com/id/1311406968/es/foto/retrato-del-guapo-joven-cauc%C3%A1sico-con-ropa-casual-sonriendo-y-mirando-a-la-c%C3%A1mara-sobre-el.jpg?s=2048x2048&w=is&k=20&c=fjJC9fq7QLEmw4z_-MVOwoJRT1YhMi327X72kuZA3w8="
                  className="card-img-top"
                  alt="Team Member 5"
                />
                <div className="card-body">
                  <h5 className="card-title">Emily Brown</h5>
                  <p>Full Stack Developer</p>
                  <hr className="text-orange" />
                  <div className="imgCardAbout">
                    <a href="#" className="btn">
                      <i class="bi bi-linkedin iconLinkedin  fs-2 hoverSocial"></i>
                    </a>
                    <a href="#" className="btn">
                      <i className="bi bi-github iconoGithub fs-2 hoverSocial"></i>
                    </a>
                  </div>
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
