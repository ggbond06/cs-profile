import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css"; 

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="header" className={isScrolled ? "scrolled" : ""}>
      <Link to="/"><button id="name">Ruijia.portfolio</button></Link>
      <div id="menu_buttons">
        <Link to="/bio"><button>Bio</button></Link>
        <Link to="/experiences"><button>Experience</button></Link>
        <Link to="/projects"><button>Projects</button></Link>
        <Link to="/courses"><button>Courses</button></Link>
      </div>
    </div>
  );
}
