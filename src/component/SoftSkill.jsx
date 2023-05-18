import { motion } from "framer-motion";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { SiXdadevelopers } from "react-icons/si";

const SoftSkill = () => {
  const slideOptions = {
    type: "slide",
    autoplay: true,
    perPage: 3,
    interval: 3000,
    arrows: true,
    drag: "free",
    gap: "2rem",
    pagination: false,
  };
  return (
    <>
      <div id="about">
        <h4>What you'll get</h4>
        <div className="grid">
          <Splide options={slideOptions}>
            <SplideSlide>
              <motion.div className="dev">
                <h5>Web Development</h5>
                <SiXdadevelopers />
                <p>
                  With the newest design trends and technologies, bring your
                  ideas to life.
                </p>
              </motion.div>
            </SplideSlide>
            <SplideSlide>
              <motion.div className="design">
                <h5>Web Development</h5>
                <SiXdadevelopers />
                <p>
                  With the newest design trends and technologies, bring your
                  ideas to life.
                </p>
              </motion.div>
            </SplideSlide>
            <SplideSlide>
              <motion.div className="lang">
                <h5>Language</h5>
                <SiXdadevelopers />
                <p>
                  With the newest design trends and technologies, bring your
                  ideas to life.
                </p>
              </motion.div>
            </SplideSlide>
            <SplideSlide>
              <motion.div className="c-design">
                <h5>Creative Designs</h5>
                <SiXdadevelopers />
                <p>
                  With the newest design trends and technologies, bring your
                  ideas to life.
                </p>
              </motion.div>
            </SplideSlide>
            <SplideSlide>
              <motion.div className="ui-ux">
                <h5>Ui-Ux Design</h5>
                <SiXdadevelopers />
                <p>
                  With the newest design trends and technologies, bring your
                  ideas to life.
                </p>
              </motion.div>
            </SplideSlide>
          </Splide>
        </div>
        <button className="btn">Hire me</button>
      </div>
    </>
  );
};

export default SoftSkill;
