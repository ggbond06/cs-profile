import { useState, useEffect } from "react";
import dogProfile from "../images/dog_profile.jpg";
import { Mail, Phone, MapPin, Globe, Server, Search, BrainCog } from "lucide-react";

const NAMES = [           
    "你好，我是Michael",     
    "Hi, I am Michael",         
    "Olá, sou Michael",  
    "Grüezi, ich bin Michael",         
  ];

export default function Profile() {

  const [displayedText, setDisplayedText] = useState("");
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const skillLinks = [
    {
      href: "https://www.java.com/",
      label: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      href: "https://www.python.org/",
      label: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      href: "https://developer.mozilla.org/docs/Web/JavaScript",
      label: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      href: "https://developer.mozilla.org/docs/Web/HTML",
      label: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      href: "https://developer.mozilla.org/docs/Web/CSS",
      label: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
  ];

  useEffect(() => {
    const currentName = NAMES[currentNameIndex];
    
    let typingSpeed;
    if (!isDeleting && charIndex < currentName.length) {
      // Typing
      typingSpeed = 100;
    } else if (!isDeleting && charIndex === currentName.length) {
      // Finished typing, wait then start deleting
      typingSpeed = 2000; // Pause before deleting
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      typingSpeed = 50;
    } else {
      // Finished deleting, small pause before next name
      typingSpeed = 500;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentName.length) {
        // Typing
        setDisplayedText(currentName.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === currentName.length) {
        // Finished typing, start deleting
        setIsDeleting(true);
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        setDisplayedText(currentName.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to next name
        setIsDeleting(false);
        setCurrentNameIndex((prevIndex) => (prevIndex + 1) % NAMES.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentNameIndex]);

  return (
    <div className="page home-page">
      <h2>
        <span className="typewriter-name">{displayedText}</span>
        <span className="cursor">|</span>
      </h2>
      <br/>
      <div className="home-content-wrapper">
        <div className="home-contact">
          <div className="home-photo">
            <img id="dog_profile" src={dogProfile} alt="Michael"></img>
          </div>
          <p className="home-contact-name">Michael</p>
          <div className="home-contact-position-background">
            <p className="home-contact-position">Undergraduate at University of Michigan</p>
          </div>
          <div className="line"></div>
          <div className="contacts">
            <div className="contact-item email">
            <Mail className="contact-icon" />
              <p>Email</p>
              <p className="myemail">rhu6122@gmail.com</p>
            </div>
            <div className="contact-item phone-number">
            <Phone className="contact-icon" />
              <p>Phone</p>
              <p className="myphone">123456789</p>
            </div>
            <div className="contact-item location">
            <MapPin className="contact-icon" />
              <p>Location</p>
              <p className="mylocation">Ann Arbor, MI</p>
            </div>
          </div>
        </div>
        <div className="about-me">
          <div className="home-about">
            <h1>About Me</h1>
            <div className="thick-line"></div>
            <p>I'm a second year undergraduate student at the University of Michigan.
               I am particularlyninterested in Machine Learning and other AI related fields.
            </p>
          </div>
          <div className="doing">
            <h1>What I'm Doing</h1>
            <div className="services" >
              <div className="card">
                <Globe size={40} color="#FFD86B" />
                <h3>Web development</h3>
              </div>
              <div className="card">
                <Server size={40} color="#FFD86B" />
                <h3>Backend Development</h3>
              </div>
              <div className="card">
                <Search size={40} color="#FFD86B" />
                <h3>Web-Scraping</h3>
              </div>
              <div className="card">
                <BrainCog size={40} color="#FFD86B" />
                <h3>AI training and modeling</h3>
              </div>
            </div>
          </div>
          <div className="home-skills">
            <h1>Skills</h1>
            <div className="skill-icons">
              {skillLinks.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <img src={icon} alt={label} className="skill-icon" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
