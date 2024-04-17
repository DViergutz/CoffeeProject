import React, { useEffect, useRef, useState } from "react";
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
  const [activeSection, setActiveSection] = useState(null);

  const scrollToSection = (elementRef, section) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
    setActiveSection(section);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < technologies.current.offsetTop) {
        setActiveSection("");
      } else if (
        scrollPosition >= technologies.current.offsetTop &&
        scrollPosition < mapping.current.offsetTop
      ) {
        setActiveSection("technologies");
      } else if (
        scrollPosition >= mapping.current.offsetTop &&
        scrollPosition < admin.current.offsetTop
      ) {
        setActiveSection("mapping");
      } else if (
        scrollPosition >= admin.current.offsetTop &&
        scrollPosition < team.current.offsetTop
      ) {
        setActiveSection("admin");
      } else if (scrollPosition >= team.current.offsetTop) {
        setActiveSection("team");
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="align-navigation-menu">
      <div className="navigation-menu">
        <ScrollToTop />{" "}
        <ul>
          {" "}
          <li
            onClick={() => scrollToSection(technologies, "technologies")}
            className={`nav-link-home ${
              activeSection === "technologies" ? "active" : ""
            }`}
          >
            <GoDot
              className={activeSection === "technologies" ? "active-dot" : ""}
            />
          </li>
          <li
            onClick={() => scrollToSection(mapping, "mapping")}
            className={`nav-link-home ${
              activeSection === "mapping" ? "active" : ""
            }`}
          >
            <GoDot
              className={activeSection === "mapping" ? "active-dot" : ""}
            />
          </li>
          <li
            onClick={() => scrollToSection(admin, "admin")}
            className={`nav-link-home ${
              activeSection === "admin" ? "active" : ""
            }`}
          >
            <GoDot className={activeSection === "admin" ? "active-dot" : ""} />{" "}
          </li>
          <li
            onClick={() => scrollToSection(team, "team")}
            className={`nav-link-home ${
              activeSection === "team" ? "active" : ""
            }`}
          >
            <GoDot className={activeSection === "team" ? "active-dot" : ""} />
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
          <div className="about-content">
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
          <div className="about-content">
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

            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="flow-chart-img"></div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="container main-about" ref={admin}>
          <div className="about-content">
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
        <div></div>
        <div className="container main" ref={team}>
          <div className="about-content">
            <div>
              <h2 className="about-heading-3">
                <span className="text-orange">Meet </span> Our Team
              </h2>
            </div>
            <div className="about-info-2">
              <p>
                Discover the Faces Behind Our Success! Get to know the talented
                individuals who bring creativity, expertise, and passion to our
                team. Meet our dedicated team members below and learn more about
                their unique contributions.
              </p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-6 col-xl-3 d-flex align-items-center justify-content-evenly">
              <div className="d-flex flex-column h-100">
                <div className="special-product-card-1 h-100 d-flex flex-column align-items-center">
                  <div className="card-top-wrapper">
                    <div className=""></div>
                    <img
                      src={`${
                        import.meta.env.VITE_BUCKETS_URL
                      }/team/santi-img.png`}
                      className="card-img-1"
                      alt="Team Member 1"
                    />
                  </div>
                  <div className="mt-auto card-info-wrapper">
                    <p className="fs-4 text-center team-name mt-3">
                      SANTIAGO TERNANDE
                    </p>
                    <p className=" text-center mt-2">
                      <span className="text-orange">Full Stack Developer</span>
                    </p>

                    <div className="mt-auto">
                      <hr className="text-orange" />
                      <div className="d-flex justify-content-center">
                        <a
                          href="https://www.linkedin.com/in/santiagoternande/"
                          className="btn"
                          target="_blank"
                        >
                          <i className="bi bi-linkedin iconLinkedin  fs-3 hoverSocial"></i>
                        </a>
                        <a href="https://github.com/Machine-45" className="btn">
                          <i className="bi bi-github iconoGithub fs-3 hoverSocial"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 d-flex align-items-center justify-content-evenly">
              <div className="d-flex flex-column h-100">
                <div className="special-product-card-1 h-100 d-flex flex-column align-items-center">
                  <img
                    src={David}
                    className="card-img-1 "
                    alt="Team Member 1"
                  />
                  <div className="mt-3">
                    <p className="fs-2 text-center team-name">
                      David <span className="fw-semibold"> Viergutz</span>{" "}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <p className="text-center mt-2">
                      <span className="text-orange">Full Stack Developer</span>{" "}
                    </p>
                    <hr className="text-orange mt-4" />
                    <div className="mt-auto">
                      <div className="d-flex justify-content-center">
                        <a
                          href="https://www.linkedin.com/in/david-viergutz-b243b425a/"
                          className="btn"
                          target="_blank"
                        >
                          <i className="bi bi-linkedin iconLinkedin  fs-3 hoverSocial"></i>
                        </a>
                        <a href="https://github.com/DViergutz" className="btn">
                          <i className="bi bi-github iconoGithub fs-3 hoverSocial"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 d-flex align-items-center justify-content-evenly">
              <div className="d-flex flex-column h-100">
                <div className="special-product-card-1 h-100 d-flex flex-column align-items-center">
                  <img
                    src={Gaston}
                    className="card-img-1 "
                    alt="Team Member 1"
                  />
                  <div className="mt-3">
                    <p className="fs-2 text-center team-name">
                      Gastón <span className="fw-semibold"> Silva</span>
                    </p>
                  </div>
                  <div className="mt-auto">
                    <p className=" text-center mt-2">
                      <span className="text-orange">Full Stack Developer</span>{" "}
                    </p>
                    <hr className="text-orange mt-4" />
                    <div className="mt-auto">
                      <div className="d-flex justify-content-center">
                        <a
                          href="https://www.linkedin.com/in/gaston-silva-1a788a1b9/"
                          className="btn"
                          target="_blank"
                        >
                          <i className="bi bi-linkedin iconLinkedin  fs-3 hoverSocial"></i>
                        </a>
                        <a
                          href="https://github.com/GastonSilva11"
                          className="btn"
                        >
                          <i className="bi bi-github iconoGithub fs-3 hoverSocial"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 d-flex align-items-center justify-content-evenly">
              <div className="d-flex flex-column h-100">
                <div className="special-product-card-1 h-100 d-flex flex-column align-items-center">
                  <img
                    src={David}
                    className="card-img-1 "
                    alt="Team Member 1"
                  />
                  <div className="mt-3">
                    <p className="fs-2 text-center team-name">
                      Peter <span className="fw-semibold"> Slowak</span>
                    </p>
                  </div>
                  <div className="mt-auto">
                    <p className=" text-center mt-2">
                      <span className="text-orange">Full Stack Developer</span>{" "}
                    </p>
                    <hr className="text-orange mt-4" />
                    <div className="mt-auto">
                      <div className="d-flex justify-content-center">
                        <a
                          href="https://www.linkedin.com/in/peter-slowak-20a59a1b6/"
                          className="btn"
                          target="_blank"
                        >
                          <i className="bi bi-linkedin iconLinkedin  fs-3 hoverSocial"></i>
                        </a>
                        <a href="https://github.com/PtrSlk" className="btn">
                          <i className="bi bi-github iconoGithub fs-3 hoverSocial"></i>
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
    </div>
  );
}

export default AboutThisProject;
