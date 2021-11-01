import React, {useState} from "react";

import {Card,Navbar,Button} from "react-bootstrap";
const Kart = () => {
  return (
    <div className="d-flex justify-content-center">
      <Card  style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png" />
        <Card.Body>
          <Card.Title>REACT</Card.Title>
          <Card.Text>Reacti ogrenmek basta biraz zormus</Card.Text>
          <Button variant="danger">Detaylar</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
const Footer = () => {
  return (
    <div>
      <Navbar
        fixed="bottom"
        fluid=""
        className="justify-content-center bg-dark p-3"
      >
        <p className="text-light">Copyright 2021</p>
      </Navbar>
    </div>
  );
};

function ConditionalRender() {
    const [goster,setGoster] =useState(false);

    function gosterGizle () {
     setGoster(!goster)
  }
  return ( <div className="text-center">
      <button onClick={gosterGizle}className="btn btn-warning m-4 p-3">goster/gizle</button>
    {/*1. degisken true ise 2.yi calistirir */}
      {goster && <Kart />}
      {!goster && <Footer />}
      {/*1. degisken false ise 2.yi calistirir */}
      {/* {goster || <Kart />} */}
      {goster ? (
      <>
      <h1>Kart gozukuyor</h1>
       <Kart />
       </>
      ): (
          <>
          <h1>Footer Gozukuyor</h1>
      <Footer />
      </>)} 
  </div>
  )
}
export default ConditionalRender;