import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { projects } from "../general";

function Portfolio() {
  return (
      <div className="container">
      <div className="row">
      {projects.map((p) => (
    <div className="col-4 col-md-3">
     
        <>
          <div className="card-body-portfolio">
          <div className={`img ${p.id}`}></div>
            <h5 className="card-title">{p.name}</h5>
            <p className="card-text">{p.skills}</p>
          </div>
          <div className="card-body">
            <a href={p.url} className="card-link">Click for Repo</a>
          </div>
        </>
 
    </div>
         ))}
    </div>
    </div>
  );
}

export default Portfolio;
