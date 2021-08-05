import React from 'react';
import '../style.css';
import Particles from "react-particles-js"
import ParticleConfig from "../config/particlesConfig"
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";


function Home () {
            return (
              <div>
                    <div class="container-home">
                      <h1> I'm Ceyda Hergul </h1>
                      <h4>
                        Full-Stack Web Developer
                      </h4>
                    <Particles 
                    params={ParticleConfig}>
                    </Particles>
                 </div>
                 <About />
                 <Portfolio />
                 <Contact />
              </div>


            );
        }







export default Home;
