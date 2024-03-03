import React, { Component } from 'react'
import { Button, Card, Form } from 'react-bootstrap'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person:{
                fullName:"sofien khaterchi",
                bio:"ghvjkjhkhoilhjlkhlkhlkhlkjl",
                imgsrc:"https://i.pinimg.com/originals/b3/3e/0d/b33e0db317ebc8614ef516eb680209ca.png",
                profession:"student"


            }
        };
      }
    
  render() {
    let person=this.state.person
    return (
        <div style={{display:"flex", justifyContent:"center",marginTop:"10%"}}>
        <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src={person.imgsrc} />
   <Card.Body>
     <Card.Title>{person.fullName} </Card.Title>
     <Card.Text>
     {person.bio}
     </Card.Text>
     <Form.Control onChange={(e)=>this.setState({person:{...person,fullName:e.target.value}})} placeholder='enter your name'/>
     <Button variant="primary">Go somewhere</Button>
   </Card.Body>
 </Card>


      </div>
    )
  }
}
