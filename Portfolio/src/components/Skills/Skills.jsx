import React from "react";
import styles from "./Skills.module.css"

const Skills = () => {
  return (
    <div className="d-flex w-100 justify-content-center mt-5 min-vh-100">
      <section className="d-flex bg-body-tertiary flex-column align-content-center h-100">
        <h2 className="text-secondary text-center pt-4 pb-3 font-monospace">My Skills</h2>
        <div className="">
          <div className="d-flex flex-sm-column flex-md-row">
            <img src="../../../src/assets/react.svg" 
            alt="" 
            className="p-3 shadow rounded-4 m-2 border-bottom border-3" 
            />
            <img
              src="../../../src/assets/javascript.svg"
              alt=""
              loading="eager"
              className="p-3 shadow rounded-4 m-2 border-bottom border-3"
            />
            <img
              src="../../../src/assets/bootstrap.svg"
              alt=""
              loading="lazy"
              className="p-3 shadow rounded-4 m-2 border-bottom border-3"
            />
            <img
              src="../../../src/assets/firebase.svg"
              alt=""
              loading="lazy"
              className="p-3 shadow rounded-4 m-2 border-bottom border-3"
            />
          </div>

          <div class="d-flex flex-sm-column flex-md-row">
            <img
              src="../../../src/assets/sequelize.svg"
              alt=""
              loading="lazy"
              className="p-3 shadow rounded-4 m-2 border-bottom border-3"
            />
            <img
              src="../../../src/assets/express.png"
              alt=""
              loading="lazy"
              className="p-3 shadow rounded-4 m-2 border-bottom border-3"
            />
            <img
              src="../../../src/assets/cloudinary.svg"
              alt=""
              loading="lazy"
              className="p-3 shadow rounded-4 m-2 border-bottom border-3"
            />
            <img
              src="../../../src/assets/redux.svg"
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
