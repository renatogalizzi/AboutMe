import React from "react";

const SocialNetworks = () => {
  return (
    <div className="position-fixed end-0 bottom-0 mb-5 d-flex flex-column">
      <a href="https://github.com/renatogalizzi" target="_blank">
        <img
          src="https://res.cloudinary.com/drrswxx5y/image/upload/v1706742429/github.png"
          alt="GitHub"
          className="mb-3 bg-white rounded-3 opacity-75"
          width="40px"
        />
      </a>
      <a href="https://www.linkedin.com/in/renato-galizzi-07b92b33/" target="_blank">
        <img
          src="https://res.cloudinary.com/drrswxx5y/image/upload/v1706742395/linkedin.png"
          alt="Linkedin"
          loading="lazy"
          className="mb-3"
          width="40px"
        />
      </a>        
      <a href="https://wa.me/+543413457800" target="_blank">
        <img
          src="https://res.cloudinary.com/drrswxx5y/image/upload/v1706742402/whatsapp.png"
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
