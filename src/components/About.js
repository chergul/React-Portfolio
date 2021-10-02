import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { about, skills, sectionAbout } from '../general';

const About = () => {
    
    return (
      <div className="container-about">
        <div className="about">
       
<div className="row">
  <img className="col-sm-4 offset-md-2 photo" alt="">
  </img>
  <div className="col-sm-4">
    <div className="card-about">
      <div className="card-body">
        <h5 className="card-title">{sectionAbout}</h5>
        <p className="card-text">{about.text}</p>
      </div>
 
  </div>
</div>
           

<br>
</br>
<br>
</br>




            <div className="col-sm-12" id="Skills"> 
            {skills.map((skill,indexS) =>
                <div key={indexS} className={`skills ${skill.faClass}`}></div> 
            )}
          
            </div>
            </div>
            </div>
            </div>
       

    )
}


export default About