
import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import myResume from "./myResume.pdf";

const Resume = () => {
  return (
    <MDBContainer className="resume mt-5">
      <MDBRow>
        <MDBCol md="12">
          <embed id="myResume" src={myResume} width="100%" height="1000px"/>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Resume;