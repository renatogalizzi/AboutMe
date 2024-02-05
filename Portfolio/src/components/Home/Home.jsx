import React from "react";
import styles from "./Home.module.css";


const Home = () => {
  return (
    <div className="d-flex">
      <div
        className="accordion accordion-flush w-75 mx-auto my-5 bg-body-secondary border rounded-1"
        id="accordionFlushExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed bg-body-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <i className="bi bi-file-earmark-person me-2"></i>About Me
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse d-flex flex-column flex-sm-row align-items-center"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body d-flex align-items-center">
              <button
                type="button"
                className="btn btn-primary bg-transparent border-0 align-content-sm-center mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img
                  src="https://res.cloudinary.com/drrswxx5y/image/upload/v1706749372/hycgxqivkep8ye21vghr.png"
                  width="100px"
                  className="rounded-pill"
                ></img>
              </button>
              {/* Modal Imagen */}
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered w-100">
                  <div class="modal-content">
                    <div class="modal-body text-center bg-body-secondary">
                    <img
                  src="https://res.cloudinary.com/drrswxx5y/image/upload/v1706749372/hycgxqivkep8ye21vghr.png"
                  width="300px"
                  height="300px"
                  className="rounded"
                ></img>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
                {/* Modal Imagen */}
              </div>
            </div>
            <div className="w-100 d-flex">
              <p className="ms-3 font-monospace fs-5 w-100">
                I am Renato Galizzi, I am 35 years old. I recently graduated as
                a{" "}
                <code className="text-success fw-bold">
                  Full Stack Developer
                </code>
                <i className="ms-1 bi bi-person-arms-up"></i> from{" "}
                <a
                  href="https://www.soyhenry.com/"
                  target="_blank"
                  className="link-danger"
                >
                  Henry
                </a>{" "}
                University. During the bootcamp I have received solid knowledge
                in web development, both front-end and back-end and SQL
                databases. I carried out three projects to apply the knowledge
                acquired, which you can see in the projects section. I want to
                dedicate myself to full stack development, train myself in what
                the client needs and develop my potential.
              </p>
              </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed bg-body-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <i className="bi bi-book me-2"></i> Education
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <p className="m-0 fs-5">
                    <label id={styles.date} className="fst-italic">
                      2001-2001
                    </label>{" "}
                    |{" "}
                    <strong>
                      Malleret Institute - English language institute
                    </strong>
                    <i className="bi bi-arrow-bar-right ms-2"></i>
                    <label className="ms-2 text-secondary">
                      Second course Children "A"
                    </label>
                  </p>
                </li>
                <li className="list-group-item">
                  <p className="m-0 fs-5">
                    <label id={styles.date} className="fst-italic">
                      2002-2002
                    </label>{" "}
                    |{" "}
                    <strong>
                      Malleret Institute - English language institute
                    </strong>
                    <i className="bi bi-arrow-bar-right ms-2"></i>
                    <label className="ms-2 text-secondary">
                      English Course 1st Level adults in english
                    </label>
                  </p>
                </li>
                <li className="list-group-item">
                  <p className="m-0 fs-5">
                    <label id={styles.date} className="fst-italic">
                      2004-2004
                    </label>{" "}
                    | <strong>Malleret Institute</strong>
                    <i className="bi bi-arrow-bar-right ms-2"></i>
                    <label className="ms-2 text-secondary">
                      Computer and notebook repair technician.
                    </label>
                  </p>
                </li>
                <li className="list-group-item">
                  <p className="m-0 fs-5">
                    <label id={styles.date} className="fst-italic">
                      2007-2012
                    </label>{" "}
                    | <strong>National Technological University</strong>
                    <i className="bi bi-arrow-bar-right ms-2"></i>
                    <label className="ms-2 text-secondary">
                      Information Systems Engineering, completed up to the
                      fourth year.
                    </label>
                  </p>
                </li>
                <li className="list-group-item">
                  <p className="m-0 fs-5">
                    <label id={styles.date} className="fst-italic">
                      2016-2016
                    </label>{" "}
                    | <strong>CapaOcho.net</strong>
                    <i className="bi bi-arrow-bar-right ms-2"></i>
                    <label className="ms-2 text-secondary">
                      Cisco Certified Network Associate.
                    </label>
                  </p>
                </li>
                <li className="list-group-item">
                  <p className="m-0 fs-5">
                    <label id={styles.date} className="fst-italic">
                      2023-2024
                    </label>{" "}
                    | <strong>Henry</strong>
                    <i className="bi bi-arrow-bar-right ms-2"></i>
                    <label className="ms-2 text-secondary">
                      Full Stack Developer
                    </label>
                  </p>
                </li>
                <li className="list-group-item">
                  <p className="m-0 fs-5">
                    <label id={styles.date} className="fst-italic">
                      <i className="bi bi-infinity fs-6 me-1 px-1"></i>-
                      <i className="bi bi-infinity fs-6 ms-1 px-1"></i>
                    </label>{" "}
                    | <strong>Autodidact</strong>
                    <label className="ms-2 text-secondary"></label>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed bg-body-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <i className="bi bi-person-workspace me-2"></i>Experience
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <p className="m-0 fs-5">
                    <label id={styles.date} className="fst-italic">
                      2005-2007
                    </label>{" "}
                    | <strong>Cyber CONCORACCES</strong>
                    <i className="bi bi-arrow-bar-right ms-2"></i>
                    <label className="ms-2 text-secondary">
                      Customer service, computer maintenance and local LAN
                      network.
                    </label>
                  </p>
                </li>
                <li className="list-group-item">
                  <p className="m-0 fs-5">
                    <label id={styles.date} className="fst-italic">
                      2010-2010
                    </label>{" "}
                    | <strong>Apex Sykes</strong>
                    <i className="bi bi-arrow-bar-right ms-2"></i>
                    <label className="ms-2 text-secondary">
                      Telephone technical support for clients. Router
                      configuration and internet connection problem solving.
                    </label>
                  </p>
                </li>
                <li className="list-group-item">
                  <p className="m-0 fs-5">
                    <label id={styles.date} className="fst-italic">
                      2010-2012
                    </label>{" "}
                    | <strong>Municipality of Rosario, Santa Fe.</strong>
                    <i className="bi bi-arrow-bar-right ms-2"></i>
                    <label className="ms-2 text-secondary">
                      Technical support for users. Windows and Linux support.
                      UTP cabling, assembly and repair of computers and
                      notebooks.
                    </label>
                  </p>
                </li>
                <li className="list-group-item">
                  <p className="m-0 fs-5">
                    <label id={styles.date} className="fst-italic">
                      2014-2016
                    </label>{" "}
                    | <strong>IPLAN Telecommunications</strong>
                    <i className="bi bi-arrow-bar-right ms-2"></i>
                    <label className="ms-2 text-secondary text-wrap">
                      Management of customer complaints. Configuration of
                      equipment, routers, switches, IP phones, Node Operations,
                      FTTH. FTTH measurement.
                    </label>
                  </p>
                </li>
                <li className="list-group-item">
                  <p className="m-0 fs-5">
                    <label id={styles.date} className="fst-italic">
                      2020-Today
                    </label>{" "}
                    | <strong>IG INFORMATICA</strong>
                    <i className="bi bi-arrow-bar-right ms-2"></i>
                    <label className="ms-2 text-secondary">
                      I currently have a computer business. I provide technical
                      service to individuals and companies.
                    </label>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
