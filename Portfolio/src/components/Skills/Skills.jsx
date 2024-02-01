import React from "react";
import styles from "./Skills.module.css"

const Skills = () => {
  return (
    <div className="d-flex w-100 justify-content-center mt-5 min-vh-100">
      <section className="d-flex bg-transparent flex-column align-content-center h-100">
        <h1 className="text-white text-center pt-4 pb-3 p-3 bg-dark rounded-5 opacity-75 font-monospace">My Skills</h1>
        <div className="pt-4 w-100">
          <div id={styles.icons} className="d-flex flex-sm-column flex-md-row w-100 justify-content-around mb-4">
            <img 
            id={styles.imgBackground} 
            src="https://res.cloudinary.com/drrswxx5y/image/upload/v1706749451/yse4pvbcuh5uembzq29b.svg" 
            alt="" 
            loading="eager"
            className="p-3 shadow rounded-4 m-2 border-bottom border-3 bg-tertiary" 
            width="130px"
            height="130px"
            />
            <img
              id={styles.imgBackground}
              src="https://res.cloudinary.com/drrswxx5y/image/upload/v1706749419/h0rdpavon2bi2uspuklb.svg"
              alt=""
              loading="eager"
              className="p-3 shadow rounded-4 m-2 border-bottom border-3"
              width="130px"
              height="130px"
            />
            <img
              id={styles.imgBackground}
              src="https://res.cloudinary.com/drrswxx5y/image/upload/v1706749380/rxi19eaktdh8n6jxxa6t.svg"
              alt=""
              loading="lazy"
              className="p-3 shadow rounded-4 m-2 border-bottom border-3"
              width="130px"
              height="130px"
            />
            <img
            id={styles.imgBackground}
              src="https://res.cloudinary.com/drrswxx5y/image/upload/v1706749407/bred5ggf6u9tiwthhehq.svg"
              alt=""
              loading="lazy"
              className="p-3 shadow rounded-4 m-2 border-bottom border-3"
              width="130px"
              height="130px"
            />
          </div>

          <div id={styles.icons} className="d-flex flex-sm-column flex-md-row justify-content-around">
            <img
            id={styles.imgBackground}
              src="https://res.cloudinary.com/drrswxx5y/image/upload/v1706749689/htg7qv3hdndivkzjtujo.svg"
              alt=""
              loading="lazy"
              className="p-3 shadow rounded-4 m-2 border-bottom border-3"
              width="130px"
              height="130px"
            />
            <img
            id={styles.imgBackground}
              src="https://res.cloudinary.com/drrswxx5y/image/upload/v1706749399/pdvhj1ho7vc6tok26pim.png"
              alt=""
              loading="lazy"
              className="p-3 shadow rounded-4 m-2 border-bottom border-3"
              width="130px"
              height="130px"
            />
            <img
            id={styles.imgBackground}
              src="https://res.cloudinary.com/drrswxx5y/image/upload/v1706749389/jdgsm7objgr4c9cy30ou.svg"
              alt=""
              loading="lazy"
              className="p-3 shadow rounded-4 m-2 border-bottom border-3"
              width="130px"
              height="130px"
            />
            <img
            id={styles.imgBackground}
              src="https://res.cloudinary.com/drrswxx5y/image/upload/v1706749458/gpzryfw5mfwmrwtoyeom.svg"
              alt=""
              loading="lazy"
              className="p-3 shadow rounded-4 m-2 border-bottom border-3"
              width="130px"
              height="130px"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
