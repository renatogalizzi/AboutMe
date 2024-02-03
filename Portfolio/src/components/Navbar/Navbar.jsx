import React, { useState } from "react";
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";
import useInterval from "../../Helpers/useInterval";

const Navbar = () => {
  const [aux , setAux ] = useState(false);
  const name = "Renato Galizzi"
  const nameResponsive = "RG"

  const [index,setIndex] = useState(0);

  useInterval(()=>{
    if(index < name.length){
      setIndex( prev => prev + 1)
    }else {
      //setIndex( prev => prev - 1);
    }
  },300)
  
  return (
    <div className="w-100 sticky-top position-relative">
      <div id={styles.navClass} className="d-flex justify-content-between p-2 shadow  border border-secondary">
        <div className="text-white fs-3 my-auto ms-4 font-monospace">{name.slice(0,index)}</div>
        <div className="d-block d-sm-none">
        <i className="bi bi-list fs-3 text-white me-2" onClick={()=>setAux(!aux)}></i>
          </div>

        {/* MENU CELULAR */}
        {aux && 
        <div id={styles.menuResponsive} className="d-flex justify-content-center mt-3">
        <ul className="d-flex flex-column gap-2 list-unstyled font-monospace mt-3">
            <Link to="/">
            <li><a href="#AboutMe" className="text-white link-warning fs-5 link-warning link-opacity-75" onClick={()=>setAux(!aux)}>AboutMe</a></li>
            </Link>
            <Link to="/skills">
            <li><a href="#Skills" className="text-white fs-5 link-warning link-opacity-75" onClick={()=>setAux(!aux)}>Skills</a></li>
            </Link>
            <Link to="/projects">
            <li><a href="#Proyects" className="text-white fs-5 link-warning link-opacity-75" onClick={()=>setAux(!aux)}>Projects</a></li>
            </Link>
            <Link to="/contact">
            <li><a href="#Contact" className="text-white fs-5 link-warning link-opacity-75" onClick={()=>setAux(!aux)}>Contact</a></li>
            </Link>
        </ul>
    </div>
    }
          

        {/* MENU PC */}
        <div className="d-flex justify-content-center mt-3 d-none d-sm-block">
            <ul className="d-flex gap-3 list-unstyled me-4 font-monospace">
                <Link to="/">
                <li><a href="#AboutMe" className="text-white link-ligth fs-5 link-warning link-opacity-75">AboutMe</a></li>
                </Link>
                <Link to="/skills">
                <li><a href="#Skills" className="text-white fs-5 link-warning link-opacity-75">Skills</a></li>
                </Link>
                <Link to="/projects">
                <li><a href="#Proyects" className="text-white fs-5 link-warning link-opacity-75">Projects</a></li>
                </Link>
                <Link to="/contact">
                <li><a href="#Contact" className="text-white fs-5 link-warning link-opacity-75">Contact</a></li>
                </Link>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
