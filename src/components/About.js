import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { about, skills, sectionAbout } from '../general';


const About = () => {
    
    return (
        <div className="about">
            <div>
<div className="row">
  <img className="col-sm-4 offset-md-2 photo">
  </img>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{sectionAbout}</h5>
        <p className="card-text">{about.text}</p>
      </div>
    </div>
  </div>
</div>
            </div>

            {/* //Skills */}
            <div id="Skills"> 
            {skills.map((skill) =>
                <div className="row d-flex justify-content-center skills">
                  {/* {skill.faClass}  */}
                  {skill.name}
                </div> 
            )}
            </div>

        </div>
    )
}


export default About