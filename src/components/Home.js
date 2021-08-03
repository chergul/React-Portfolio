import React from 'react';
import '../style.css';
import Particles from "react-particles-js"
import ParticleConfig from "../config/particlesConfig"
import { Container, Row, Col } from 'reactstrap';

function Home () {
            return (


                    <div class="container">

 <Particles 
                    params={ParticleConfig}>
                    </Particles>
                    <div class="text">
                        <h1>This is a test</h1>
                    </div>
                 </div>


            );
        }







export default Home;
