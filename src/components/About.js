import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { about, skills, sectionAbout } from '../general';
// import '@fortawesome/fontawesome-free/css/all.css';



const About = () => {
    
    return (
        <div className="about">
            <div>
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
</div>
            </div>

<br>
</br>
<br>
</br>


<div className="card">

            <div id="Skills"> 
            {skills.map((skill,indexS) =>
                <div key={indexS} className={`skills ${skill.faClass}`}>
                  
                  {/* {skill.name} */}
                </div> 
            )}
            </div>
            </div>
            </div>
       

    )
}


export default About