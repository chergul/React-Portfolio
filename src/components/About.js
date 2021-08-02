import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { about, skills, sectionAbout } from '../general'


const About = (props) => {
    
    return (
        <div className="about row">
            <div>
            Special title treatment
With supporting text below as a natural lead-in to additional content.

Copy
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
                {/* <div className="d-none d-md-block offset-md-1 col-md-5 photo" >My photo</div>
                <div className="col-10 offset-md-1 col-md-5 about">
                    <h1>{sectionAbout}</h1>
                    <div className="">
                <h1>{about.text}</h1>
                </div>
                <p className="about-text">
                </p>
                </div> */}
            </div>

        </div>
    )
}







export default About