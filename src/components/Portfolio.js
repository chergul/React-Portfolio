import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { projects } from "../general";

function Portfolio() {
  return (
    <div className="p-card" style={{ width: "18rem" }}>
      {projects.map((p) => (
        <>
          <div className="card-body">
          <img src={p.id} />
            <h5 className="card-title">{p.name}</h5>
            <p className="card-text">{p.skills}</p>
          </div>
          <div className="card-body">
            <a href={p.link} className="card-link">Click for Repo</a>
          </div>
        </>
      ))}
    </div>
  );
}

export default Portfolio;
