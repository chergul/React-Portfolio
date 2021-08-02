import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { about, skills, sectionAbout } from '../general'


const About = () => {
    
    return (
        <div className="about">
            <div>
<div class="row">
  <div class="col-sm-4 offset-md-2 photo">
    <div class="card photo">
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{sectionAbout}</h5>
        <p class="card-text">{about.text}</p>
      </div>
    </div>
  </div>
</div>
            </div>

        </div>
    )
}


export default About