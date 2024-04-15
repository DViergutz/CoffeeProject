import React from "react";
import { useRef } from "react";
import Gaston from "../assets/img/Gaston.png";
import Santiago from "../assets/img/Santiago.png";
import David from "../assets/img/David.png";
import ScrollToTop from "./ScrollToTop";
import { GoDot } from "react-icons/go";

function AboutThisProject() {
  const technologies = useRef(null);
  const mapping = useRef(null);
  const admin = useRef(null);
  const team = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="align-navigation-menu">
      <div className="navigation-menu">
        <ScrollToTop />{" "}
        <ul>
          {" "}
          <li
            onClick={() => scrollToSection(technologies)}
            className="nav-link-home"
          >
            <GoDot />
          </li>
          <li
            onClick={() => scrollToSection(mapping)}
            className="nav-link-home"
          >
            <GoDot />
          </li>
          <li onClick={() => scrollToSection(admin)} className="nav-link-home">
            <GoDot />{" "}
          </li>
          <li onClick={() => scrollToSection(team)} className="nav-link-home">
            <GoDot />
          </li>
        </ul>
      </div>
      <div className=" bg-fondo3">
        <div className="hero-about">
          <div className="container">
            <div className="textAboutProject d-flex flex-column">
              <h2 className="about-heading-3">
                What Is <span className="text-orange">Utica </span>Coffee?
              </h2>
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
                The development process involved planning, design,
                implementation, testing, and deployment, emphasizing effective
                communication and collaboration.
              </p>
              <p className="about-subheading">
                Utica Coffee is a fully functional e-commerce platform
                reflecting the team's dedication and proficiency in Full Stack
                Development.
              </p>
            </div>
          </div>
        </div>
        <div className="container main" ref={technologies}>
          <div className=" d-flex flex-column align-items-start">
            <h2 className="about-heading-3">
              Technologies<span className="text-orange"> & </span> Tools
            </h2>
            <div className="about-info-1">
              <p>
                During our coding bootcamp journey, we immersed ourselves in a
                diverse array of technologies spanning both backend and frontend
                development. We actively engaged with databases, honing our
                skills, and employed practical tools to streamline our workflow
                effectively.
              </p>
              <p>
                Our project underwent meticulous segmentation into three
                sprints, with Github serving as our central collaboration hub.
                Discord emerged as an indispensable platform, enabling seamless
                communication throughout every phase of the development journey.
              </p>
              <p>
                In pursuit of heightened productivity for this project, we
                curated a select ensemble of tools designed to elevate our
                efficiency and innovation.
              </p>
            </div>
          </div>
          <div>
            <div>
              <div className="row row-cols-2 row-cols-md-5 g-4">
                <div className="col">
                  <div className="d-flex flex-column align-items-center p-4">
                    <img
                      className="about-icons mb-2"
                      src={`${
                        import.meta.env.VITE_BUCKETS_URL
                      }/about_icons/bootstrap.png`}
                      alt=""
                    />
                    <small className="text-orange ">Bootstrap</small>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column align-items-center p-4">
                    <img
                      className="about-icons mb-2"
                      src={`${
                        import.meta.env.VITE_BUCKETS_URL
                      }/about_icons/css3.png`}
                      alt=""
                    />
                    <small className="text-orange ">CSS3</small>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column align-items-center p-4">
                    <img
                      className="about-icons mb-2"
                      src={`${
                        import.meta.env.VITE_BUCKETS_URL
                      }/about_icons/discord.png`}
                      alt=""
                    />
                    <small className="text-orange ">Discord</small>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column align-items-center p-4">
                    <img
                      className="about-icons mb-2"
                      src={`${
                        import.meta.env.VITE_BUCKETS_URL
                      }/about_icons/figma.png`}
                      alt=""
                    />
                    <small className="text-orange ">Figma</small>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column align-items-center p-4">
                    <img
                      className="about-icons mb-2"
                      src={`${
                        import.meta.env.VITE_BUCKETS_URL
                      }/about_icons/github.png`}
                      alt=""
                    />
                    <small className="text-orange ">Github</small>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column align-items-center p-4">
                    <img
                      className="about-icons mb-2"
                      src={`${
                        import.meta.env.VITE_BUCKETS_URL
                      }/about_icons/js.png`}
                      alt=""
                    />
                    <small className="text-orange ">JavaScript</small>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column align-items-center p-4">
                    <img
                      className="about-icons mb-2"
                      src={`${
                        import.meta.env.VITE_BUCKETS_URL
                      }/about_icons/nodejs.png`}
                      alt=""
                    />
                    <small className="text-orange ">NodeJS</small>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column align-items-center p-4">
                    <img
                      className="about-icons mb-2"
                      src={`${
                        import.meta.env.VITE_BUCKETS_URL
                      }/about_icons/react.png`}
                      alt=""
                    />
                    <small className="text-orange ">React</small>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column align-items-center p-4">
                    <img
                      className="about-icons mb-2"
                      src={`${
                        import.meta.env.VITE_BUCKETS_URL
                      }/about_icons/redux.png`}
                      alt=""
                    />
                    <small className="text-orange ">Redux</small>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column align-items-center p-4">
                    <img
                      className="about-icons mb-2"
                      src={`${
                        import.meta.env.VITE_BUCKETS_URL
                      }/about_icons/sql.png`}
                      alt=""
                    />
                    <small className="text-orange ">SQL</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container main-about" ref={mapping}>
          <div className=" text-center d-flex flex-column align-items-start">
            <div>
              <h2 className="about-heading-3">
                Mapping <span className="text-orange">User Flow</span>
              </h2>
            </div>
            <div className="about-info-1">
              <p>
                Diving deep into the essence of our website, we meticulously
                chart out the various perspectives, understanding the natural
                flow each page should embody. From the moment you click, every
                button leads purposefully to its corresponding section, ensuring
                a fluid journey that keeps you engaged without any hitches. We
                prioritize user experience as much as we do the design of our
                interfaces, striving for a seamless, friendly flow that ensures
                you never feel 'stuck' at any point.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="flow-chart-img"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container main-about" ref={admin}>
          <div className="text-center d-flex flex-column align-items-start">
            <div>
              <h2 className="about-heading-3">
                <span className="text-orange">Admin </span> Dashboard
              </h2>
            </div>
            <div className="about-info-1">
              <p>
                In our e-commerce platform, the admin dashboard enables users to
                delete, update, or create products, categories, and customers,
                while also providing oversight of order statuses.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="admin-panel-img"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container main" ref={team}>
          <div className=" text-center d-flex flex-column align-items-start">
            <div className="text-center w-100">
              <h2 className="about-heading-3">
                <span className="text-orange">Meet </span> Our Team
              </h2>
            </div>
            <div className="about-info-1">
              <p>
                Discover the Faces Behind Our Success! Get to know the talented
                individuals who bring creativity, expertise, and passion to our
                team. Meet our dedicated team members below and learn more about
                their unique contributions.
              </p>
            </div>
          </div>
          <div className="text-center d-flex flex-column align-items-center ">
            <div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 g-4 justify-content-between p-0">
              <div className="col mb-4">
                <div className="cardAbout h-100 card ">
                  <img
                    src={David}
                    className="card-img-top cardPeople "
                    alt="Team Member 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Santiago</h5>
                    <h5 className="card-title">Ternande</h5>
                    <p>Full Stack Developer</p>
                    <hr className="text-orange hrAbout" />
                    <div className="imgCardAbout">
                      <a
                        href="https://www.linkedin.com/in/santiagoternande/"
                        className="btn"
                      >
                        <i className="bi bi-linkedin iconLinkedin  fs-2 hoverSocial"></i>
                      </a>
                      <a href="https://github.com/Machine-45" className="btn">
                        <i className="bi bi-github iconoGithub fs-2 hoverSocial"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card h-100 cardAbout">
                  <img
                    src={David}
                    className="card-img-top cardPeople"
                    alt="Team Member 2"
                  />
                  <div className="card-body">
                    <h5 className="card-title">David</h5>
                    <h5 className="card-title">Viergutz</h5>
                    <p>Full Stack Developer</p>
                    <hr className="text-orange hrAbout" />
                    <div className="imgCardAbout">
                      <a
                        href="https://www.linkedin.com/in/david-viergutz-b243b425a/"
                        className="btn"
                      >
                        <i className="bi bi-linkedin hoverSocial  fs-2 hoverSocial"></i>
                      </a>
                      <a href="https://github.com/DViergutz" className="btn">
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
                    className="card-img-top cardPeople"
                    alt="Team Member 3"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Gaston</h5>
                    <h5 className="card-title">Silva</h5>
                    <p>Full Stack Developer</p>
                    <hr className="text-orange hrAbout" />
                    <div className="imgCardAbout">
                      <a
                        href="https://www.linkedin.com/in/gaston-silva-1a788a1b9/"
                        className="btn"
                      >
                        <i className="bi bi-linkedin iconLinkedin  fs-2 hoverSocial"></i>
                      </a>
                      <a
                        href="https://github.com/GastonSilva11"
                        className="btn"
                      >
                        <i className="bi bi-github iconoGithub  fs-2 hoverSocial"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card h-100 cardAbout">
                  <img
                    src={David}
                    className="card-img-top cardPeople"
                    alt="Team Member 4"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Peter</h5>
                    <h5 className="card-title">Williams</h5>
                    <p>Full Stack Developer</p>
                    <hr className="text-orange hrAbout" />
                    <div className="imgCardAbout">
                      <a href="#" className="btn">
                        <i className="bi bi-linkedin iconLinkedin  fs-2 hoverSocial"></i>
                      </a>
                      <a href="https://github.com/PtrSlk" className="btn">
                        <i className="bi bi-github iconoGithub  fs-2 hoverSocial"></i>
                      </a>
                    </div>
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
