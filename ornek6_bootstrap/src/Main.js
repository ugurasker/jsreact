import React from 'react'
import {Card,Button,Container,Row,Col} from "react-bootstrap";
import data from "./Data";



function Kart(props) {
    const {text,name,img}= data[props.index];
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {text}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    )
}






function Main() {
    return (
        <div>
           <Container className="text-center border mt-4">
              <Row className="d-flex justify-content-center">
                 <Col className= "mb-3 d-flex justify-content-center "
                 xs={12} md={6} lg={4}>
                 <Kart index="0"/> 
                 </Col> 
                 <Col className= "mb-3 d-flex justify-content-center"
                  xs={12} md={6} lg={4}>
                 <Kart index="1"/>
                 </Col> 
                 <Col className= "mb-3 d-flex justify-content-center"
                  xs={12} md={6} lg={4}>
                 <Kart index="2"/>  
                 </Col> 
              </Row>   
           </Container>
        </div>
    )
}

export default Main
