import { useState, useEffect } from "react";
import Media from "react-media";
import { motion } from "framer-motion";
import profileImg from "../assets/profileImg.png";
import { AiFillLinkedin } from "react-icons/ai";
import { FaWhatsapp, FaFacebookF, FaMailBulk } from "react-icons/fa";
import { Link } from "react-router-dom";

const texts = [
  "Building websites that are as unique as your brand.",
  "From concept to launch, we've got you covered.",
  "This is DevDesign",
];
const animationVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const currentText = texts[textIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((textIndex) => (textIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const isSmallScreen = "(min-width: 1px) and (max-width: 601px)";
  const isMediumScreen = "(min-width: 601px) and (max-width: 821px)";
  // const isLargeScreen = "(min-width: 1000px)";
  return (
    <>
      <Media query={isSmallScreen}>
        {(matches) =>
          matches ? (
            <motion.div
              variants={animationVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              id="hero"
              style={{
                marginLeft: 0,
                display: "grid",
                alignItems: "center",
                justifyItems: "center",
                textAlign: "center",
                gridTemplateColumns: "95% 5%",
                gridGap: "1rem",
                padding: "0 2rem",
              }}
            >
              <div
                className="img-and-text"
                style={{
                  display: "grid",
                  alignItems: "center",
                  width: "100%",
                  justifyItems: "center",
                }}
              >
                <img
                  src={profileImg}
                  alt=""
                  style={{
                    width: "15rem",
                    height: "15rem",
                    borderRadius: "100%",
                    border: "8px solid #5d5859",
                  }}
                />

                <div
                  className="text"
                  style={{
                    textAlign: "center",
                    display: "grid",
                    alignItems: "top",
                    width: "100%",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "2rem",
                      fontFamily: ' "Montserrat", sans-serif',
                      fontWeight: 300,
                    }}
                  >
                    Victory Emmanuel
                  </h1>
                  <h4>
                    <motion.h5
                      style={{
                        display: "inline-block",
                        position: "relative",
                      }}
                      animate={{ left: [0, 0, 0], top: [0, 0, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {currentText}
                    </motion.h5>
                  </h4>
                </div>
              </div>
              <div
                className="icon"
                style={{
                  display: "grid",
                  marginTop: "1rem",
                  gridTemplateColumns: "repeat(1, 1fr)",
                  justifyItems: "center",
                  gridGap: "1rem",
                  marginBottom: "5rem",
                }}
              >
                <AiFillLinkedin
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
                <Link
                  to="https://www.facebook.com/your-facebook-page-url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF
                    style={{
                      backgroundColor: "#5d5859",
                      padding: "5px",
                      borderRadius: "100px",
                      fontSize: "2rem",
                      transition: "300ms",
                      cursor: "pointer",
                      color: "#fff",
                    }}
                  />
                </Link>

                <FaWhatsapp
                  style={{
                    backgroundColor: "#5d5859",
                    padding: "5px",
                    borderRadius: "100px",
                    fontSize: "2rem",
                    transition: "300ms",
                    cursor: "pointer",
                    color: "#fff",
                  }}
                />
                <Link to="mailto:victorye228@gmail.com" className="">
                  <div>
                    <FaMailBulk
                      style={{
                        backgroundColor: "#5d5859",
                        padding: "5px",
                        borderRadius: "100px",
                        fontSize: "2rem",
                        transition: "300ms",
                        cursor: "pointer",
                        color: "#fff",
                      }}
                    />
                  </div>
                </Link>
              </div>
            </motion.div>
          ) : (
            <Media query={isMediumScreen}>
              {(matches) =>
                matches ? (
                  <motion.div
                    variants={animationVariant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    id="hero"
                    style={{
                      marginLeft: 0,
                      display: "grid",
                      alignItems: "center",
                      justifyItems: "center",
                      textAlign: "center",
                      gridTemplateColumns: "95% 5%",
                      gridGap: "1rem",
                      padding: "0 2rem",
                    }}
                  >
                    <div
                      className="img-and-text"
                      style={{
                        display: "grid",
                        alignItems: "center",
                        width: "100%",
                        justifyItems: "center",
                      }}
                    >
                      <img
                        src={profileImg}
                        alt=""
                        style={{
                          width: "15rem",
                          height: "15rem",
                          borderRadius: "100%",
                          border: "8px solid #5d5859",
                        }}
                      />

                      <div
                        className="text"
                        style={{
                          textAlign: "center",
                          display: "grid",
                          alignItems: "top",
                          width: "100%",
                        }}
                      >
                        <h1
                          style={{
                            fontSize: "3rem",
                            fontFamily: ' "Montserrat", sans-serif',
                            fontWeight: 400,
                          }}
                        >
                          Victory Emmanuel
                        </h1>
                        <h4>
                          <motion.h5
                            style={{
                              display: "inline-block",
                              position: "relative",
                            }}
                            animate={{ left: [0, 0, 0], top: [0, 0, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {currentText}
                          </motion.h5>
                        </h4>
                      </div>
                    </div>
                    <div
                      className="icon"
                      style={{
                        display: "grid",
                        marginTop: "1rem",
                        gridTemplateColumns: "repeat(1, 1fr)",
                        justifyItems: "center",
                        gridGap: "1rem",
                        marginBottom: "5rem",
                      }}
                    >
                      <AiFillLinkedin
                        style={{
                          backgroundColor: "#5d5859",
                          padding: "5px",
                          borderRadius: "100px",
                          fontSize: "2rem",
                          transition: "300ms",
                          cursor: "pointer",
                          color: "#fff",
                        }}
                      />
                      <Link
                        to="https://www.facebook.com/your-facebook-page-url"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebookF
                          style={{
                            backgroundColor: "#5d5859",
                            padding: "5px",
                            borderRadius: "100px",
                            fontSize: "2rem",
                            transition: "300ms",
                            cursor: "pointer",
                            color: "#fff",
                          }}
                        />
                      </Link>

                      <FaWhatsapp
                        style={{
                          backgroundColor: "#5d5859",
                          padding: "5px",
                          borderRadius: "100px",
                          fontSize: "2rem",
                          transition: "300ms",
                          cursor: "pointer",
                          color: "#fff",
                        }}
                      />
                      <Link to="mailto:victorye228@gmail.com" className="">
                        <div>
                          <FaMailBulk
                            style={{
                              backgroundColor: "#5d5859",
                              padding: "5px",
                              borderRadius: "100px",
                              fontSize: "2rem",
                              transition: "300ms",
                              cursor: "pointer",
                              color: "#fff",
                            }}
                          />
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    variants={animationVariant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    id="hero"
                  >
                    <div className="text">
                      <h1>
                        Hi, I'm <p>Victory Emmanuel</p>
                      </h1>

                      <h4>
                        <motion.h4
                          style={{
                            display: "inline-block",
                            position: "relative",
                          }}
                          animate={{ left: [0, 0, 0], top: [0, 0, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {currentText}
                        </motion.h4>
                      </h4>
                    </div>
                  </motion.div>
                )
              }
            </Media>
          )
        }
      </Media>
    </>
  );
};

export default Hero;
