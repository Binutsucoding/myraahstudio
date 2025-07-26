// import React, { useState, useEffect } from "react";
// import "../App.css";

// const Nav = () => {
//   const [activeLink, setActiveLink] = useState("about");

//   const handleScroll = () => {
//     const sectionIds = ["about", "services", "process"];
//     for (let id of sectionIds) {
//       const section = document.getElementById(id);
//       if (section) {
//         const rect = section.getBoundingClientRect();
//         if (rect.top <= 100 && rect.bottom >= 100) {
//           setActiveLink(id);
//           break;
//         }
//       }
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setActiveLink(id);
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">Myraah Studio</div>
//       <ul className="nav-links">
//         <li>
//           <a
//             href="#about"
//             onClick={(e) => {
//               e.preventDefault();
//               scrollToSection("about");
//             }}
//             className={activeLink === "about" ? "active" : ""}
//           >
//             About
//           </a>
//         </li>
//         <li>
//           <a
//             href="#services"
//             onClick={(e) => {
//               e.preventDefault();
//               scrollToSection("services");
//             }}
//             className={activeLink === "services" ? "active" : ""}
//           >
//             Services
//           </a>
//         </li>
//         <li>
//           <a
//             href="#process"
//             onClick={(e) => {
//               e.preventDefault();
//               scrollToSection("process");
//             }}
//             className={activeLink === "process" ? "active" : ""}
//           >
//             Process
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Nav;

import React, { useState, useEffect } from "react";
import "../App.css";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const sectionIds = ["about", "services", "process"];
    for (let id of sectionIds) {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveLink(id);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveLink(id);
      setIsMenuOpen(false); // close menu on click
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">Myraah Studio</div>

      <button
        className="nav-toggle"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        ☰
      </button>

      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            className={activeLink === "about" ? "active" : ""}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("services");
            }}
            className={activeLink === "services" ? "active" : ""}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#process"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("process");
            }}
            className={activeLink === "process" ? "active" : ""}
          >
            Process
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
