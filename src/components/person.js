import React, { Component } from 'react'
import Counter from './counter'
import Button from 'react-bootstrap/Button';
import '../index.css';
export default class person extends Component {
   
  
    state={
        fullName:"HAYKEL MHADHBI ",
        bio:"x", 
        imgSrc:"",
        profession:"ING ",
        shows:false,
    }
    showHandler=()=>{
        this.setState({
            shows:!this.state.shows
        })
    }
  render() {
    return (
        
        <div>{this.state.shows? <div><img src={this.state.imgSrc} alt="" />
        <p>{this.state.fullName}</p>
       <p>{this.state.profession}</p>
       <p>{this.state.bio}</p>
       <Counter/>
       
        </div>: <div> check</div>
        
         }
         
        
      <div className='container'>
      <div className="d-grid gap-2">
      <Button variant="x" size="xxl" onClick={this.showHandler}>
        Show / Hide
      </Button>
      </div>
        </div></div>
    )
  }
}
