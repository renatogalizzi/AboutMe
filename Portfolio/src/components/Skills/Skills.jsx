import React from "react";
import styles from "./Skills.module.css"

const Skills = () => {
  return (
    <div className="d-flex w-100 justify-content-center mt-5 min-vh-100">
      <section className="d-flex bg-body-tertiary flex-column align-content-center h-100">
        <h2 className="text-secondary text-center pt-4 pb-3 font-monospace">My Skills</h2>
        <div className="">
          <div className="d-flex flex-sm-column flex-md-row">
            <img src="https://res.cloudinary.com/drrswxx5y/image/upload/v1706749451/yse4pvbcuh5uembzq29b.svg" 
            alt="" 
            className="p-3 shadow rounded-4 m-2 border-bottom border-3" 
            />
            <img
              src="https://res.cloudinary.com/drrswxx5y/image/upload/v1706749419/h0rdpavon2bi2uspuklb.svg"
              alt=""
              loading="eager"
              className="p-3 shadow rounded-4 m-2 border-bottom border-3"
            />
            <img
              src="https://res.cloudinary.com/drrswxx5y/image/upload/v1706749380/rxi19eaktdh8n6jxxa6t.svg"
              alt=""
              loading="lazy"
              className="p-3 shadow rounded-4 m-2 border-bottom border-3"
            />
            <img
              src="https://res.cloudinary.com/drrswxx5y/image/upload/v1706749407/bred5ggf6u9tiwthhehq.svg"
              alt=""
              loading="lazy"
              className="p-3 shadow rounded-4 m-2 border-bottom border-3"
            />
          </div>

          <div class="d-flex flex-sm-column flex-md-row">
            <img
              src="https://res.cloudinary.com/drrswxx5y/image/upload/v1706749689/htg7qv3hdndivkzjtujo.svg"
              alt=""
              loading="lazy"
              className="p-3 shadow rounded-4 m-2 border-bottom border-3"
            />
            <img
              src="https://res.cloudinary.com/drrswxx5y/image/upload/v1706749399/pdvhj1ho7vc6tok26pim.png"
              alt=""
              loading="lazy"
              className="p-3 shadow rounded-4 m-2 border-bottom border-3"
            />
            <img
              src="https://res.cloudinary.com/drrswxx5y/image/upload/v1706749389/jdgsm7objgr4c9cy30ou.svg"
              alt=""
              loading="lazy"
              className="p-3 shadow rounded-4 m-2 border-bottom border-3"
            />
            <img
              src="https://res.cloudinary.com/drrswxx5y/image/upload/v1706749458/gpzryfw5mfwmrwtoyeom.svg"
              alt=""
              loading="lazy"
              className="p-3 shadow rounded-4 m-2 border-bottom border-3"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
