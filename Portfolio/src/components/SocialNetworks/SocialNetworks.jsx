import React from "react";

const SocialNetworks = () => {
  return (
    <div className="position-fixed end-0 bottom-50 d-flex flex-column">
      <a href="https://github.com/renatogalizzi" target="_blank">
        <img
          src="../../../src/assets/github.png"
          alt="GitHub"
          className="mb-3"
          width="40px"
        />
      </a>
      <a href="https://www.linkedin.com/in/renato-galizzi-07b92b33/" target="_blank">
        <img
          src="../../../src/assets/linkedin.png"
          alt="Linkedin"
          loading="lazy"
          className="mb-3"
          width="40px"
        />
      </a>        
      <a href="#" target="_blank">
        <img
          src="../../../src/assets/whatsapp.png"
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
