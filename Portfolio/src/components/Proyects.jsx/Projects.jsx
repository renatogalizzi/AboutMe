import React from "react";
import styles from "./Projects.module.css"

const Projects = () => {
  return (
    <div className="d-flex justify-content-center h-75 gap-2 flex-wrap min-vh-100">
      <div id={styles.cardProject} className="d-flex justify-content-center my-auto flex-wrap gap-4 mt-5">
        <div className="card mx-3 bg-body-tertiary" style={{ width: "20rem", height:"32rem" }}>
        <div className={styles.img}>
          <img
            src="https://res.cloudinary.com/drrswxx5y/image/upload/v1706749468/up1jec3rfcff43f9juvb.png"
            className="card-img-top"
            alt="..."
          />
        </div>
          <div className="card-body bg-body-tertiary d-flex flex-column">
            <h5 className="card-title">Rick And Morty</h5>
            <p className="card-text text-secondary">
              Rick and Morty was my first project within Henry. It helped me a
              lot to learn React and Javascript concepts.
              <hr></hr>
              Technologies : Javascript, React, CSS ,HTML.
            </p>
            <a
              href="https://github.com/renatogalizzi/rickAndMorty.git"
              target="_blank"
              className="btn btn-primary w-100 mt-auto"
            >
              Go to GitHub
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "20rem", height:"32rem" }}>
        <div className={styles.img}>
          <img
            src="https://res.cloudinary.com/drrswxx5y/image/upload/v1706749430/ngddwde9amhdyyee19g4.png"
            class="card-img-top"
            alt="..."
          />
          </div>
          <div className="card-body bg-body-tertiary d-flex flex-column">
            <h5 className="card-title">Pokemons</h5>
            <p className="card-text text-secondary">
              Pokemons its my individual project to bootcamp in Henry. I had to
              apply all cancepts learned in the bootcamp.
              <hr></hr>
              Consumption of external API, formatting of information,
              implementation of React fundamentals, management of promises,
              Axios.
            </p>
            <a href="https://github.com/renatogalizzi/PIPokemon.git" className="btn btn-primary w-100 mt-auto" target="_blank">
              Go to GitHub
            </a>
          </div>
        </div>
        <div className="card mx-3" style={{ width: "20rem", height:"32rem" }}>
        <div className={styles.img}>
          <img
            src="../../../src/assets/sport.png"
            className="card-img-top"
            alt="..."
          />
          </div>
          <div className="card-body bg-body-tertiary overflow-hidden">
            <h5 className="card-title">SportVibe</h5>
            <p className="card-text text-secondary">
              SportVibe is an ecommerce. This is the final proyect to graduate
              as a Full Stack Developer in Henry 2024.
              <hr></hr>
              Technologies : Login with Google, PayPal, Protected Routes, React,
              Redux, Sequelize, PostgreSQL, Cloudinary, SweetAlert, Nodemailer,
              Bootstrap, CSS
            </p>
            <a
              href="https://sportvibe.up.railway.app/"
              target="_blank"
              className="btn btn-primary w-100 mt-auto"
            >
              Go to Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
