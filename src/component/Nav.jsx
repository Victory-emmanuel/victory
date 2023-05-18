import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        style={{
          display: "none",
          gridTemplateColumns: "40% 60%",
          alignItems: "center",
          padding: "1rem",
          marginLeft: "250px",
        }}
      >
        <h1 style={{ fontSize: "2rem" }}>Logo</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            alignItems: "center",
            justifyItems: "right",
            textAlign: "right",
          }}
        >
          <button
            onClick={toggleMenu}
            style={{
              display: "none",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "2rem",
            }}
          >
            &#9776;
          </button>
          <ul
            style={{
              display: isOpen ? "grid" : "none",
              gridTemplateColumns: "1fr",
              margin: 0,
              padding: 0,
              listStyle: "none",
            }}
          >
            <li style={{ margin: "0.5rem 0" }}>
              <a
                href="#home"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "1.5rem",
                }}
              >
                Home
              </a>
            </li>
            <li style={{ margin: "0.5rem 0" }}>
              <a
                href="#about"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "1.5rem",
                }}
              >
                About
              </a>
            </li>
            <li style={{ margin: "0.5rem 0" }}>
              <a
                href="#services"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "1.5rem",
                }}
              >
                Services
              </a>
            </li>
            <li style={{ margin: "0.5rem 0" }}>
              <a
                href="#contact"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "1.5rem",
                }}
              >
                Contact
              </a>
            </li>
          </ul>
          <button
            onClick={toggleMenu}
            style={{
              display: "block",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "2rem",
            }}
          >
            &#343434;
          </button>
        </div>
      </nav>
    </>
  );
}

export default Nav;
