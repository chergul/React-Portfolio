import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { projects } from "../general";

function Portfolio() {
  return (
  
    <div className="container-portfolio">
      <div className="container">
      <div className="row">
      {projects.map((p,indexP) => (
    <div key={indexP} className="col-12 col-md-4">
     
        <>
          <div className="card-body-portfolio">
          <div className={`img ${p.id}`}></div>
          <br></br>
            <h5 className="card-title-p">{p.name}</h5>
            <h8 className="card-description-p">{p.description}</h8>
            <p className="card-text-p">{p.skills}</p>
          </div>
          <div className="card-body-p">
            <a href={p.url} className="card-link">Click for Repo</a>
            
          </div>
        </>
        <br></br>
    </div>
         ))}
    </div>
    </div>
    <br></br>
    </div>
  );
}

export default Portfolio;
