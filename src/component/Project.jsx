import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import Pwave1 from "./waves/Pwave1";
import Pwave2 from "./waves/Pwave2";
import Pwave3 from "./waves/Pwave3";
import Pwave4 from "./waves/Pwave4";
import Media from "react-media";

const Project = () => {
  const renderProject = (image, title, description) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <img src={image} alt={title} />
      <h6>{title}</h6>
      <p>{description}</p>
      <button className="btn">See more</button>
    </motion.div>
  );
  const isSmallScreen = "(min-width: 1px) and (max-width: 601px)";
  const isMediumScreen = "(min-width: 601px) and (max-width: 821px)";

  return (
    <>
      <Media query={isSmallScreen}>
        {(matches) =>
          matches ? (
            <div id="project" style={{ marginLeft: 0 }}>
              <div className="carousel-container">
                <Carousel
                  className="carousel"
                  showThumbs={true}
                  infiniteLoop={true}
                  autoPlay={false}
                  interval={30000}
                  showIndicators={false}
                >
                  <div className="e-food-container">
                    <h4>Project</h4>
                    <Pwave1 />
                    <div
                      className="e-food"
                      style={{ padding: "2.5rem", textAlign: "center" }}
                    >
                      {renderProject(p1, "E-FOOD", "Food Delivery Site")}
                    </div>
                  </div>
                  <div className="made-container">
                    <h4>Project</h4>
                    <Pwave2 />
                    <div className="made">
                      {renderProject(p2, "MADE", "Bathroom renovations site")}
                    </div>
                  </div>
                  <div className="long-shot-container">
                    <h4>Project</h4>
                    <Pwave3 />
                    <div className="long-shot">
                      {renderProject(p3, "Long Shot", "Ai copywriter")}
                    </div>
                  </div>
                  <div className="x-gen-container">
                    <h4>Project</h4>
                    <Pwave4 />
                    <div className="x-gen">
                      {renderProject(p4, "X-gen", "Clothing Store")}
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          ) : (
            <Media query={isMediumScreen}>
              {(matches) =>
                matches ? (
                  <div id="project" style={{ marginLeft: 0 }}>
                    <div className="carousel-container">
                      <Carousel
                        className="carousel"
                        showThumbs={true}
                        infiniteLoop={true}
                        autoPlay={false}
                        interval={30000}
                        showIndicators={false}
                      >
                        <div className="e-food-container">
                          <h4>Project</h4>
                          <Pwave1 />
                          <div
                            className="e-food"
                            style={{ padding: "2.5rem", textAlign: "center" }}
                          >
                            {renderProject(p1, "E-FOOD", "Food Delivery Site")}
                          </div>
                        </div>
                        <div className="made-container">
                          <h4>Project</h4>
                          <Pwave2 />
                          <div className="made">
                            {renderProject(
                              p2,
                              "MADE",
                              "Bathroom renovations site"
                            )}
                          </div>
                        </div>
                        <div className="long-shot-container">
                          <h4>Project</h4>
                          <Pwave3 />
                          <div className="long-shot">
                            {renderProject(p3, "Long Shot", "Ai copywriter")}
                          </div>
                        </div>
                        <div className="x-gen-container">
                          <h4>Project</h4>
                          <Pwave4 />
                          <div className="x-gen">
                            {renderProject(p4, "X-gen", "Clothing Store")}
                          </div>
                        </div>
                      </Carousel>
                    </div>
                  </div>
                ) : (
                  <div id="project">
                    <div className="carousel-container">
                      <Carousel
                        className="carousel"
                        showThumbs={true}
                        infiniteLoop={true}
                        autoPlay={false}
                        interval={30000}
                        showIndicators={false}
                      >
                        <div className="e-food-container">
                          <h4>Project</h4>
                          <Pwave1 />
                          <div className="e-food">
                            {renderProject(p1, "E-FOOD", "Food Delivery Site")}
                          </div>
                        </div>
                        <div className="made-container">
                          <h4>Project</h4>
                          <Pwave2 />
                          <div className="made">
                            {renderProject(
                              p2,
                              "MADE",
                              "Bathroom renovations site"
                            )}
                          </div>
                        </div>
                        <div className="long-shot-container">
                          <h4>Project</h4>
                          <Pwave3 />
                          <div className="long-shot">
                            {renderProject(p3, "Long Shot", "Ai copywriter")}
                          </div>
                        </div>
                        <div className="x-gen-container">
                          <h4>Project</h4>
                          <Pwave4 />
                          <div className="x-gen">
                            {renderProject(p4, "X-gen", "Clothing Store")}
                          </div>
                        </div>
                      </Carousel>
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

export default Project;
