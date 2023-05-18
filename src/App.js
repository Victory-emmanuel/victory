import SideBar from "./component/SideBar";
import Nav from "./component/Nav";
import Hero from "./component/Hero";
import Project from "./component/Project";
import About from "./component/About";
import Services from "./component/Services";
// import Test from "./component/Test";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Router>
      <SideBar />
      <div className="App">
        <div className={theme}>
          <motion.button
            className="theme-changer"
            onClick={toggleTheme}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </motion.button>
          <Nav />
          <Hero />
          <Services />
          <Project />
          <About />
          {/* <Test /> */}
        </div>
      </div>
    </Router>
  );
}
export default App;
