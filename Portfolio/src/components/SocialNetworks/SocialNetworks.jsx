import React from "react";
import whatsapp from "../../images/whatsapp.png"
import github from "../../images/github.png"
import linkedin from "../../images/linkedin.png"

const SocialNetworks = () => {
  return (
    <div className="position-fixed end-0 bottom-50 d-flex flex-column">
      <a href="https://github.com/renatogalizzi" target="_blank">
        <img
          src={github}
          alt="GitHub"
          className="mb-3"
          width="40px"
        />
      </a>
      <a href="https://www.linkedin.com/in/renato-galizzi-07b92b33/" target="_blank">
        <img
          src={linkedin}
          alt="Linkedin"
          loading="lazy"
          className="mb-3"
          width="40px"
        />
      </a>        
      <a href="https://wa.me/+543413457800" target="_blank">
        <img
          src={whatsapp}
          alt="Whatsapp"
          loading="lazy"
          className="me-2 mb-2"
          width="40px"
        />
      </a>        
    </div>
  );
};

export default SocialNetworks;
