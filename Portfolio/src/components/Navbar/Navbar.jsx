import React, { useState } from "react";
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";
import useInterval from "../../Helpers/useInterval";

const Navbar = () => {

  const nombre = "Renato Galizzi |"

  const [index,setIndex] = useState(0);

  useInterval(()=>{
    if(index < nombre.length){
      setIndex( prev => prev + 1)
    }else {
      setIndex( prev => prev - 1);
    }
  },300)
  
  return (
    <div className="w-100 sticky-top">
      <div id={styles.navClass} className=" z-2 d-flex justify-content-center p-2 shadow border border-secondary">
        <div className="me-auto text-white fs-3 my-auto ms-4 font-monospace">{nombre.slice(0,index)}</div>
        <div className="d-flex justify-content-center mt-3">
            <ul className="d-flex gap-3 list-unstyled me-5">
                <Link to="/">
                <li><a href="#AboutMe" className="text-white link-ligth fs-5 link-warning link-opacity-50">AboutMe</a></li>
                </Link>
                <Link to="/skills">
                <li><a href="#Skills" className="text-white fs-5 link-warning link-opacity-50">Skills</a></li>
                </Link>
                <Link to="/projects">
                <li><a href="#Proyects" className="text-white fs-5 link-warning link-opacity-50">Projects</a></li>
                </Link>
                <Link to="/contact">
                <li><a href="#Contact" className="text-white fs-5 link-warning link-opacity-50">Contact</a></li>
                </Link>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
