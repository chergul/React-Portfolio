import React from 'react';
import '../style.css';
import Particles from "react-particles-js"
import ParticleConfig from "../config/particlesConfig"


function Home () {
            return (


                    <div class="container-home">
                      <h1> I'm Ceyda Hergul </h1>
                      <h4>
                        Full-Stack Web Developer
                      </h4>
 <Particles 
                    params={ParticleConfig}>
                    </Particles>

                 </div>


            );
        }







export default Home;
