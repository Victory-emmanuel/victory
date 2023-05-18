import { BsTelephoneInbound } from "react-icons/bs";
import {
  FaWhatsapp,
  FaFacebookF,
  FaSuitcase,
  FaMailBulk,
} from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import profileImg from "../assets/profileImg.png";
import { Link, scroller } from "react-scroll";
import { ImHome } from "react-icons/im";
import { GiToolbox } from "react-icons/gi";
import { useState, useRef, useEffect } from "react";
import Media from "react-media";

const SideBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const sections = useRef([]);

  const handleClicked = (id) => {
    setActiveLink(id);
  };

  const handleScroll = () => {
    sections.current.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        setActiveLink(section.getAttribute("id"));
      }
    });
  };

  useEffect(() => {
    sections.current = document.querySelectorAll("section");
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isSmallScreen = "(min-width: 1px) and (max-width: 601px)";
  const isMediumScreen = "(min-width: 601px) and (max-width: 821px)";

  const [menuVisible, setMenuVisible] = useState(false);

  function handleClick(link) {
    // close the menu when a link is clicked
    setMenuVisible(false);

    // scroll to the section corresponding to the clicked link
    switch (link) {
      case "hero":
        scroller.scrollTo("hero", {
          smooth: true,
          duration: 500,
        });
        break;
      case "services":
        scroller.scrollTo("services", {
          smooth: true,
          duration: 500,
        });
        break;
      case "project":
        scroller.scrollTo("project", {
          smooth: true,
          duration: 500,
        });
        break;
      case "about":
        scroller.scrollTo("about", {
          smooth: true,
          duration: 500,
        });
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Media query={isSmallScreen}>
        {(matches) =>
          matches ? (
            <div
              id="side-bar"
              style={{
                display: "grid",
                backgroundColor: "transparent",
                boxShadow: "none",
                width: "100px",
                gridTemplateRows: "30% 70%",
                gridGap: "1rem",
                padding: "1rem",
              }}
            >
              <Link to="contact" smooth={true} duration={500}>
                <button
                  className="btn"
                  style={{
                    display: "inline-block",
                    margin: 0,
                    width: "2.5rem",
                    borderRadius: "10px",
                    fontWeight: 500,
                    fontSize: "1.2rem",
                    paddingBottom: " 0.2rem",
                  }}
                >
                  <BsTelephoneInbound />
                </button>
              </Link>
              <div
                className="text"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(1, 1fr)",
                  justifyItems: "left",
                  padding: 0,
                  maxHeight: "15rem",
                }}
              >
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  className={activeLink === "hero" ? "active-link" : ""}
                  onClick={() => handleClick("hero")}
                  style={{ width: "1rem", height: "0" }}
                >
                  <ImHome
                    style={{
                      backgroundColor: "#5d5859",
                      padding: "5px",
                      borderRadius: "100%",
                      fontSize: "2rem",
                      transition: "300ms",
                      cursor: "pointer",
                      color: "#fff",
                    }}
                  />
                </Link>
                <Link
                  style={{ width: "1rem", height: "0" }}
                  to="services"
                  smooth={true}
                  duration={500}
                  className={activeLink === "services" ? "active-link" : ""}
                  onClick={() => handleClick("services")}
                >
                  <GiToolbox
                    style={{
                      backgroundColor: "#5d5859",
                      padding: "5px",
                      borderRadius: "100%",
                      fontSize: "2rem",
                      transition: "300ms",
                      cursor: "pointer",
                      color: "#fff",
                    }}
                  />
                </Link>

                <Link
                  to="project"
                  smooth={true}
                  duration={500}
                  className={activeLink === "project" ? "active-link" : ""}
                  onClick={() => handleClick("project")}
                  style={{ width: "1rem", height: "0" }}
                >
                  <FaSuitcase
                    style={{
                      backgroundColor: "#5d5859",
                      padding: "5px",
                      borderRadius: "100%",
                      fontSize: "2rem",
                      transition: "300ms",
                      cursor: "pointer",
                      color: "#fff",
                    }}
                  />
                </Link>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className={activeLink === "about" ? "active-link" : ""}
                  onClick={() => handleClick("about")}
                  style={{ width: "1rem", height: "0" }}
                >
                  <BsFillPersonFill
                    style={{
                      backgroundColor: "#5d5859",
                      padding: "5px",
                      borderRadius: "100%",
                      fontSize: "2rem",
                      transition: "300ms",
                      cursor: "pointer",
                      color: "#fff",
                    }}
                  />
                </Link>
              </div>
            </div>
          ) : (
            <Media query={isMediumScreen}>
              {(matches) =>
                matches ? (
                  <div
                    id="side-bar"
                    style={{
                      display: "grid",
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      width: "100px",
                      gridTemplateRows: "30% 70%",
                      gridGap: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <Link to="contact" smooth={true} duration={500}>
                      <button
                        className="btn"
                        style={{
                          display: "inline-block",
                          margin: 0,
                          width: "2.5rem",
                          borderRadius: "10px",
                          fontWeight: 500,
                          fontSize: "1.2rem",
                          paddingBottom: " 0.2rem",
                        }}
                      >
                        <BsTelephoneInbound />
                      </button>
                    </Link>
                    <div
                      className="text"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(1, 1fr)",
                        justifyItems: "left",
                        padding: 0,
                        maxHeight: "15rem",
                      }}
                    >
                      <Link
                        to="hero"
                        smooth={true}
                        duration={500}
                        className={activeLink === "hero" ? "active-link" : ""}
                        onClick={() => handleClick("hero")}
                        style={{ width: "1rem", height: "0" }}
                      >
                        <ImHome
                          style={{
                            backgroundColor: "#5d5859",
                            padding: "5px",
                            borderRadius: "100%",
                            fontSize: "2rem",
                            transition: "300ms",
                            cursor: "pointer",
                            color: "#fff",
                          }}
                        />
                      </Link>
                      <Link
                        style={{ width: "1rem", height: "0" }}
                        to="services"
                        smooth={true}
                        duration={500}
                        className={
                          activeLink === "services" ? "active-link" : ""
                        }
                        onClick={() => handleClick("services")}
                      >
                        <GiToolbox
                          style={{
                            backgroundColor: "#5d5859",
                            padding: "5px",
                            borderRadius: "100%",
                            fontSize: "2rem",
                            transition: "300ms",
                            cursor: "pointer",
                            color: "#fff",
                          }}
                        />
                      </Link>

                      <Link
                        to="project"
                        smooth={true}
                        duration={500}
                        className={
                          activeLink === "project" ? "active-link" : ""
                        }
                        onClick={() => handleClick("project")}
                        style={{ width: "1rem", height: "0" }}
                      >
                        <FaSuitcase
                          style={{
                            backgroundColor: "#5d5859",
                            padding: "5px",
                            borderRadius: "100%",
                            fontSize: "2rem",
                            transition: "300ms",
                            cursor: "pointer",
                            color: "#fff",
                          }}
                        />
                      </Link>
                      <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        className={activeLink === "about" ? "active-link" : ""}
                        onClick={() => handleClick("about")}
                        style={{ width: "1rem", height: "0" }}
                      >
                        <BsFillPersonFill
                          style={{
                            backgroundColor: "#5d5859",
                            padding: "5px",
                            borderRadius: "100%",
                            fontSize: "2rem",
                            transition: "300ms",
                            cursor: "pointer",
                            color: "#fff",
                          }}
                        />
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div id="side-bar">
                    <div className="img-and-text">
                      <img src={profileImg} alt="" />
                      <div className="icon">
                        <AiFillLinkedin />
                        <Link
                          to="https://www.facebook.com/your-facebook-page-url"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFacebookF />
                        </Link>

                        <FaWhatsapp />
                        <Link to="mailto:victorye228@gmail.com" className="">
                          <div>
                            <FaMailBulk />
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="text">
                      <Link
                        to="hero"
                        smooth={true}
                        duration={500}
                        className={activeLink === "hero" ? "active-link" : ""}
                        onClick={() => handleClick("hero")}
                      >
                        <p>
                          <ImHome /> <span>Home</span>
                        </p>
                      </Link>
                      <Link
                        to="services"
                        smooth={true}
                        duration={500}
                        className={
                          activeLink === "services" ? "active-link" : ""
                        }
                        onClick={() => handleClick("services")}
                      >
                        <p>
                          <GiToolbox /> <span>Services</span>
                        </p>
                      </Link>

                      <Link
                        to="project"
                        smooth={true}
                        duration={500}
                        className={
                          activeLink === "project" ? "active-link" : ""
                        }
                        onClick={() => handleClick("project")}
                      >
                        <p>
                          <FaSuitcase /> <span>PortFolio</span>
                        </p>
                      </Link>
                      <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        className={activeLink === "about" ? "active-link" : ""}
                        onClick={() => handleClick("about")}
                      >
                        <p>
                          <BsFillPersonFill /> <span>About</span>
                        </p>
                      </Link>

                      <Link to="contact" smooth={true} duration={500}>
                        <button className="btn">
                          Contact Me <BsTelephoneInbound />
                        </button>
                      </Link>
                    </div>
                  </div>
                )
              }
            </Media>
          )
        }
      </Media>
    </>
  );
};

export default SideBar;
