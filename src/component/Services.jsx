import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FaPaintBrush } from "react-icons/fa";
import { SiXdadevelopers } from "react-icons/si";
import Skills from "./Skills";
import { motion, spring } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMailBulk } from "react-icons/fa";
import Media from "react-media";
// import Wave2 from "./waves/Wave2";
const Services = () => {
  const [move, setMove] = useState(false);

  const isSmallScreen = "(min-width: 1px) and (max-width: 601px)";
  const isMediumScreen = "(min-width: 601px) and (max-width: 821px)";

  return (
    <>
      <Media query={isSmallScreen}>
        {(matches) =>
          matches ? (
            <div id="services" style={{ marginLeft: 0, textAlign: "center" }}>
              <div className="">
                <h4 className="">Our services</h4>
                <div
                  className="grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "100%",
                    paddingTop: 0,
                    marginTop: "3rem",
                  }}
                >
                  <motion.div
                    animate={{ y: [0, 20, 10, 0] }}
                    transition={{
                      type: spring,
                      bounce: 1,
                      repeat: Infinity,
                      duration: 5,
                    }}
                    className="ui-ux"
                    style={{
                      display: "grid",
                      justifySelf: "center",
                      alignSelf: "center",
                      padding: "2.5rem 1rem 0",
                      width: "100%",
                      height: "18rem",
                    }}
                  >
                    <h5>UI-UX</h5>
                    <HiOutlinePencilSquare />
                    <p>
                      Creating user interfaces that are simple, effective, and
                      engaging.
                    </p>
                  </motion.div>
                  <motion.div
                    animate={{ x: [0, 10, 10, 0] }}
                    transition={{
                      type: spring,
                      bounce: 1,
                      repeat: Infinity,
                      duration: 5,
                    }}
                    className="design"
                    style={{
                      padding: "2.5rem 1rem 0",
                      width: "100%",
                      height: "18rem",
                      display: "grid",
                      justifySelf: "center",
                      alignSelf: "center",
                      margin: "1rem 0",
                    }}
                  >
                    <h5>Creative Designs</h5>
                    <FaPaintBrush />
                    <p>
                      Creating designs that are aesthetically attractive and
                      resonate with your audience.
                    </p>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 20, 20, 0] }}
                    transition={{
                      type: spring,
                      bounce: 1,
                      repeat: Infinity,
                      duration: 5,
                    }}
                    className="dev"
                    style={{
                      paddingTop: "2rem",
                      gridColumn: 1 / 2,
                      display: "grid",
                      justifySelf: "center",
                      alignSelf: "center",
                      padding: "2.5rem 1rem 0",
                      width: "100%",
                      height: "18rem",
                    }}
                  >
                    <h5>Web Development</h5>
                    <SiXdadevelopers />
                    <p>
                      With the newest design trends and technologies, bring your
                      ideas to life.
                    </p>
                  </motion.div>
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
              <Skills />
            </div>
          ) : (
            <Media query={isMediumScreen}>
              {(matches) =>
                matches ? (
                  <div
                    id="services"
                    style={{ marginLeft: 0, textAlign: "center" }}
                  >
                    <div className="">
                      <h4 className="">Our services</h4>
                      <div
                        className="grid"
                        style={{
                          display: "grid",
                          gridTemplateColumns: "50% 50%",
                        }}
                      >
                        <motion.div
                          animate={{ y: [0, 20, 20, 0] }}
                          transition={{
                            type: spring,
                            bounce: 1,
                            repeat: Infinity,
                            duration: 5,
                          }}
                          className="ui-ux"
                          style={{
                            display: "grid",
                            justifySelf: "center",
                            alignSelf: "center",
                            padding: "2.5rem 1rem 0",
                            width: "100%",
                            height: "18rem",
                          }}
                        >
                          <h5>UI-UX</h5>
                          <HiOutlinePencilSquare />
                          <p>
                            Creating user interfaces that are simple, effective,
                            and engaging.
                          </p>
                        </motion.div>
                        <motion.div
                          animate={{ y: [0, 0, 150, 0] }}
                          transition={{
                            type: spring,
                            bounce: 1,
                            repeat: Infinity,
                            duration: 5,
                          }}
                          className="design"
                          style={{
                            padding: "2.5rem 1rem 0",
                            width: "100%",
                            height: "18rem",
                            display: "grid",
                            justifySelf: "center",
                            alignSelf: "center",
                          }}
                        >
                          <h5>Creative Designs</h5>
                          <FaPaintBrush />
                          <p>
                            Creating designs that are aesthetically attractive
                            and resonate with your audience.
                          </p>
                        </motion.div>
                        <motion.div
                          animate={{ y: [0, 20, 20, 0] }}
                          transition={{
                            type: spring,
                            bounce: 1,
                            repeat: Infinity,
                            duration: 5,
                          }}
                          className="dev"
                          style={{
                            paddingTop: "2rem",
                            gridColumn: 1 / 2,
                            display: "grid",
                            justifySelf: "center",
                            alignSelf: "center",
                            padding: "2.5rem 1rem 0",
                            width: "100%",
                            height: "18rem",
                          }}
                        >
                          <h5>Web Development</h5>
                          <SiXdadevelopers />
                          <p>
                            With the newest design trends and technologies,
                            bring your ideas to life.
                          </p>
                        </motion.div>
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
                    <Skills />
                  </div>
                ) : (
                  <div id="services">
                    <div className="">
                      <h4 className="">Our services</h4>
                      <div className="grid">
                        <motion.div
                          animate={{ y: [0, 20, 20, 0] }}
                          transition={{
                            type: spring,
                            bounce: 1,
                            repeat: Infinity,
                            duration: 5,
                          }}
                          className="ui-ux"
                        >
                          <h5>UI-UX</h5>
                          <HiOutlinePencilSquare />
                          <p>
                            Creating user interfaces that are simple, effective,
                            and engaging.
                          </p>
                        </motion.div>
                        <motion.div
                          animate={{ y: move ? -40 : 0 }}
                          transition={{ type: "tween", duration: 1 }}
                          onClick={() => {
                            setMove(!move);
                          }}
                          className="design"
                        >
                          <h5>Creative Designs</h5>
                          <FaPaintBrush />
                          <p>
                            Creating designs that are aesthetically attractive
                            and resonate with your audience.
                          </p>
                        </motion.div>
                        <motion.div
                          animate={{ y: [0, 20, 20, 0] }}
                          transition={{
                            type: spring,
                            bounce: 1,
                            repeat: Infinity,
                            duration: 5,
                          }}
                          className="dev"
                        >
                          <h5>Web Development</h5>
                          <SiXdadevelopers />
                          <p>
                            With the newest design trends and technologies,
                            bring your ideas to life.
                          </p>
                        </motion.div>
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
                    <Skills />
                  </div>
                )
              }
            </Media>
          )
        }
      </Media>

      {/* <Wave2 /> */}
    </>
  );
};

export default Services;
