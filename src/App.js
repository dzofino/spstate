import React, { Component } from 'react'
import Navigation from './componente/Navigation';
import Profile from './componente/Profile';
import { Button } from 'react-bootstrap';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {show:true}
     }
     toggle=function() {
      this.setState({show:!this.state.show})

     }
  render() {
    return (
      <div>
        <Navigation/>
        <div style={{display:"flex",justifyContent:"center" }}>
          <Button onClick={()=>this.toggle()}> {this.state.show?'show':'hide'} </Button>
        </div>
        { this.state.show?<Profile/> :null}
        
      </div>
    )
  }
}
