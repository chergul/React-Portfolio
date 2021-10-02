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
    <div key={indexP} className="myColumn col-lg-4 col-md-6">
     
        <>
          <div className="card-body-portfolio">
          <div id="portfolioImg" className={`img ${p.id}`}></div>
          <br></br>
            <h5 className="card-title-p">{p.name}</h5>
            <h6 className="card-description-p">{p.description}</h6>
            <p className="card-text-p">{p.skills}</p>
          </div>
          <div className="card-body-p">
            <a href={p.url} className="card-link">Click for Repo</a>
            <a href={p.deployment} className="card-link">Heroku Link</a>
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
