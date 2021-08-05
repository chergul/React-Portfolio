import React from 'react';
import '../style.css';
import Particles from "react-particles-js"
import ParticleConfig from "../config/particlesConfig"
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { name, title } from '../general';


function Home () {
            return (
              <div>
                    <div class="container-home">
                      <h1>{`Hello, I'am ${name}`} </h1>
                      <h4>
                        {title}
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
