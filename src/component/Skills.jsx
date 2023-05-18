// import Blob from "./Blob";
import { motion } from "framer-motion";
import Media from "react-media";

const Skills = () => {
  const isSmallScreen = "(min-width: 1px) and (max-width: 601px)";
  const isMediumScreen = "(min-width: 601px) and (max-width: 821px)";

  return (
    <>
      <Media query={isSmallScreen}>
        {(matches) =>
          matches ? (
            <div id="skills">
              <motion.div
                whileHover={{
                  scale: 1.04,
                  transition: { type: "tween", duration: 0.7 },
                }}
                className="skills-box"
                style={{
                  width: "100%",
                  padding: "1rem 0 2rem",

                  boxShadow: "0 0 0 0 transparent",
                }}
              >
                <h4>Skills</h4>
                {/* <Blob> */}
                <div
                  className="skills-grid"
                  style={{
                    display: "inline-block",
                    gridTemplateColumns: "100%",
                    textAlign: "left",
                    width: "100%",
                    marginTop: "2.5rem",
                  }}
                >
                  <div
                    className="ui rating-grid"
                    style={{
                      width: "100%",
                      padding: "1rem 2rem 0.5rem",
                      borderRadius: "15px",
                      boxShadow: "2.5px 2.5px 7.5px 1px #807d7d",
                      marginBottom: "2rem",
                    }}
                  >
                    <div className="rating-bar">
                      <div className="rating"></div>
                    </div>
                    <p>80%</p>
                    <h6>UI Designs</h6>
                  </div>

                  <div
                    className="c-design rating-grid"
                    style={{
                      width: "100%",
                      padding: "1rem 2rem 0.5rem",

                      borderRadius: "15px",
                      boxShadow: "2.5px 2.5px 7.5px 1px #807d7d",
                      marginBottom: "2rem",
                    }}
                  >
                    <div className="rating-bar">
                      <div className="rating"></div>
                    </div>
                    <p>60%</p>
                    <h6>Creative Designs</h6>
                  </div>

                  <div
                    className="front-end rating-grid"
                    style={{
                      width: "100%",
                      padding: "1rem 2rem 0.5rem",

                      borderRadius: "15px",
                      boxShadow: "2.5px 2.5px 7.5px 1px #807d7d",
                      marginBottom: "2rem",
                    }}
                  >
                    <div className="rating-bar">
                      <div className="rating"></div>
                    </div>
                    <p>100%</p>
                    <h6>Front-End Design</h6>
                  </div>

                  <div
                    className="react rating-grid"
                    style={{
                      width: "100%",
                      padding: "1rem 2rem 0.5rem",

                      borderRadius: "15px",
                      boxShadow: "2.5px 2.5px 7.5px 1px #807d7d",
                      marginBottom: "2rem",
                    }}
                  >
                    <div className="rating-bar">
                      <div className="rating"></div>
                    </div>
                    <p>65%</p>
                    <h6>React Js</h6>
                  </div>

                  <div
                    className="bootstrap rating-grid"
                    style={{
                      width: "100%",
                      padding: "1rem 2rem 0.5rem",
                      borderRadius: "15px",
                      boxShadow: "2.5px 2.5px 7.5px 1px #807d7d",
                      marginBottom: "2rem",
                    }}
                  >
                    <div className="rating-bar">
                      <div className="rating"></div>
                    </div>
                    <p>45%</p>
                    <h6>Bootstrap Css and React</h6>
                  </div>

                  <div
                    className="coding rating-grid"
                    style={{
                      width: "100%",
                      padding: "1rem 2rem 0.5rem",

                      borderRadius: "15px",
                      boxShadow: "2.5px 2.5px 7.5px 1px #807d7d",
                      marginBottom: "2rem",
                    }}
                  >
                    <div className="rating-bar">
                      <div className="rating"></div>
                    </div>
                    <p>60%</p>
                    <h6>Coding</h6>
                  </div>
                </div>
              </motion.div>
              {/* </Blob> */}
            </div>
          ) : (
            <Media query={isMediumScreen}>
              {(matches) =>
                matches ? (
                  <div id="skills">
                    <motion.div
                      whileHover={{
                        scale: 1.04,
                        transition: { type: "tween", duration: 0.7 },
                      }}
                      className="skills-box"
                      style={{
                        width: "100%",
                        padding: "1rem 0 2rem",
                        maxHeight: "110vh",
                      }}
                    >
                      <h4>Skills</h4>
                      {/* <Blob> */}
                      <div
                        className="skills-grid"
                        style={{
                          display: "inline-block",
                          gridTemplateColumns: "100%",
                          padding: "0 3rem",
                          textAlign: "left",
                          width: "100%",
                          maxHeight: "110vh",
                          marginTop: "2.5rem",
                        }}
                      >
                        <div
                          className="ui rating-grid"
                          style={{
                            width: "100%",
                            padding: "1rem 2rem 0.5rem",
                            borderRadius: "15px",
                            boxShadow: "2.5px 2.5px 7.5px 1px #807d7d",
                            marginBottom: "1rem",
                          }}
                        >
                          <div className="rating-bar">
                            <div className="rating"></div>
                          </div>
                          <p>80%</p>
                          <h6>UI Designs</h6>
                        </div>

                        <div
                          className="c-design rating-grid"
                          style={{
                            width: "100%",
                            padding: "1rem 2rem 0.5rem",

                            borderRadius: "15px",
                            boxShadow: "2.5px 2.5px 7.5px 1px #807d7d",
                            marginBottom: "1rem",
                          }}
                        >
                          <div className="rating-bar">
                            <div className="rating"></div>
                          </div>
                          <p>60%</p>
                          <h6>Creative Designs</h6>
                        </div>

                        <div
                          className="front-end rating-grid"
                          style={{
                            width: "100%",
                            padding: "1rem 2rem 0.5rem",

                            borderRadius: "15px",
                            boxShadow: "2.5px 2.5px 7.5px 1px #807d7d",
                            marginBottom: "1rem",
                          }}
                        >
                          <div className="rating-bar">
                            <div className="rating"></div>
                          </div>
                          <p>100%</p>
                          <h6>Front-End Design</h6>
                        </div>

                        <div
                          className="react rating-grid"
                          style={{
                            width: "100%",
                            padding: "1rem 2rem 0.5rem",

                            borderRadius: "15px",
                            boxShadow: "2.5px 2.5px 7.5px 1px #807d7d",
                            marginBottom: "1rem",
                          }}
                        >
                          <div className="rating-bar">
                            <div className="rating"></div>
                          </div>
                          <p>65%</p>
                          <h6>React Js</h6>
                        </div>

                        <div
                          className="bootstrap rating-grid"
                          style={{
                            width: "100%",
                            padding: "1rem 2rem 0.5rem",
                            borderRadius: "15px",
                            boxShadow: "2.5px 2.5px 7.5px 1px #807d7d",
                            marginBottom: "1rem",
                          }}
                        >
                          <div className="rating-bar">
                            <div className="rating"></div>
                          </div>
                          <p>45%</p>
                          <h6>Bootstrap Css and React</h6>
                        </div>

                        <div
                          className="coding rating-grid"
                          style={{
                            width: "100%",
                            padding: "1rem 2rem 0.5rem",

                            borderRadius: "15px",
                            boxShadow: "2.5px 2.5px 7.5px 1px #807d7d",
                            marginBottom: "1rem",
                          }}
                        >
                          <div className="rating-bar">
                            <div className="rating"></div>
                          </div>
                          <p>60%</p>
                          <h6>Coding</h6>
                        </div>
                      </div>
                    </motion.div>
                    {/* </Blob> */}
                  </div>
                ) : (
                  <div id="skills">
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        transition: { type: "tween", duration: 0.7 },
                      }}
                      className="skills-box"
                    >
                      <h4>Skills</h4>
                      {/* <Blob> */}
                      <div className="skills-grid">
                        <div className="ui rating-grid">
                          <div className="rating-bar">
                            <div className="rating"></div>
                          </div>
                          <p>80%</p>
                          <h6>UI Designs</h6>
                        </div>

                        <div className="c-design rating-grid">
                          <div className="rating-bar">
                            <div className="rating"></div>
                          </div>
                          <p>60%</p>
                          <h6>Creative Designs</h6>
                        </div>

                        <div className="front-end rating-grid">
                          <div className="rating-bar">
                            <div className="rating"></div>
                          </div>
                          <p>100%</p>
                          <h6>Front-End Design</h6>
                        </div>

                        <div className="react rating-grid">
                          <div className="rating-bar">
                            <div className="rating"></div>
                          </div>
                          <p>65%</p>
                          <h6>React Js</h6>
                        </div>

                        <div className="bootstrap rating-grid">
                          <div className="rating-bar">
                            <div className="rating"></div>
                          </div>
                          <p>45%</p>
                          <h6>Bootstrap Css and React</h6>
                        </div>

                        <div className="coding rating-grid">
                          <div className="rating-bar">
                            <div className="rating"></div>
                          </div>
                          <p>60%</p>
                          <h6>Coding</h6>
                        </div>
                      </div>
                    </motion.div>
                    {/* </Blob> */}
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

export default Skills;
