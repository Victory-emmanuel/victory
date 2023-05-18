import profileImg2 from "../assets/profileImg2.png";
import { motion, spring } from "framer-motion";
import { Link } from "react-router-dom";
import { FaMailBulk } from "react-icons/fa";
import Media from "react-media";

const About = () => {
  const isSmallScreen = "(min-width: 1px) and (max-width: 601px)";
  const isMediumScreen = "(min-width: 601px) and (max-width: 821px)";
  return (
    <>
      <Media query={isSmallScreen}>
        {(matches) =>
          matches ? (
            <div
              id="about"
              style={{ marginLeft: 0, display: "grid", justifyItems: "center" }}
            >
              <div className="grid" style={{ textAlign: "center" }}>
                <h5 style={{ marginBottom: "1rem", fontWeight: 500 }}>
                  About me
                </h5>
                <motion.div
                  animate={{ x: [0, 20, 20, 0], y: [0, 20, 20, 0] }}
                  transition={{
                    type: spring,
                    bounce: 1,
                    repeat: Infinity,
                    duration: 10,
                  }}
                >
                  <img src={profileImg2} alt="" />
                </motion.div>
                <div className="text">
                  <p style={{ padding: "2rem 0" }}>
                    Hi, I'm Victory Emmanuel I am a web developer and designer
                    with a passion for creating beautiful and functional
                    websites. With years of experience in the industry, I have
                    honed my skills in Web design, Web development and UI
                    Designs. My goal is to help businesses and individuals
                    establish a strong online presence through visually
                    appealing and user-friendly websites.
                  </p>
                </div>

                <Link to="mailto:victorye228@gmail.com" className="">
                  <button className="btn">
                    Let's Chat
                    <span>
                      <FaMailBulk />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <Media query={isMediumScreen}>
              {(matches) =>
                matches ? (
                  <div id="about" style={{ marginLeft: 0 }}>
                    <div className="grid">
                      <h4>About me</h4>
                      <motion.div
                        animate={{ x: [0, 20, 20, 0], y: [0, 20, 20, 0] }}
                        transition={{
                          type: spring,
                          bounce: 1,
                          repeat: Infinity,
                          duration: 10,
                        }}
                      >
                        <img src={profileImg2} alt="" />
                      </motion.div>
                      <div className="text">
                        <h6 style={{ padding: "2rem 0" }}>
                          Hi, I'm Victory Emmanuel I am a web developer and
                          designer with a passion for creating beautiful and
                          functional websites. With years of experience in the
                          industry, I have honed my skills in Web design, Web
                          development and UI Designs. My goal is to help
                          businesses and individuals establish a strong online
                          presence through visually appealing and user-friendly
                          websites.
                        </h6>
                      </div>

                      <Link to="mailto:victorye228@gmail.com" className="">
                        <button className="btn">
                          Let's Chat
                          <span>
                            <FaMailBulk />
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div id="about">
                    <div className="grid">
                      <h4>About me</h4>
                      <motion.div
                        animate={{ x: [0, 20, 20, 0], y: [0, 20, 20, 0] }}
                        transition={{
                          type: spring,
                          bounce: 1,
                          repeat: Infinity,
                          duration: 10,
                        }}
                      >
                        <img src={profileImg2} alt="" />
                      </motion.div>
                      <div className="text">
                        <h6>
                          Hi, I'm Victory Emmanuel I am a web developer and
                          designer with a passion for creating beautiful and
                          functional websites. With years of experience in the
                          industry, I have honed my skills in Web design, Web
                          development and UI Designs. My goal is to help
                          businesses and individuals establish a strong online
                          presence through visually appealing and user-friendly
                          websites.
                        </h6>
                      </div>

                      <Link to="mailto:victorye228@gmail.com" className="">
                        <button className="btn">
                          Let's Chat
                          <span>
                            <FaMailBulk />
                          </span>
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

export default About;
