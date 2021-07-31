import React from "react";
//Import icons for social media
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
  import 'bootstrap/dist/css/bootstrap.min.css';

  function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return ( 
<div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    {/* <h5 class="card-title">Special title treatment</h5> */}
    <p class="card-text">Designed and Developed by Ceyda H. Hergul</p>
    <h2>Copyright © {year} CHH</h2>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
    );
  }
  
  export default Footer;
  
  
