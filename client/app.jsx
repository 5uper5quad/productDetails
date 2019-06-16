import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import { FaAmazonPay , FaApplePay } from 'react-icons/fa';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [],
      features: []
    }
  }


  componentDidMount() {
    
    $.get(`http://localhost:3009/languageFeatures/1`, (data) => {
      var languageArray = []
      var featuresArray = []
      for(let key in data){
        languageArray.push(` ${key}  `)
        console.log("data[key]", data[key])
      for(let innerKey in data[key]){
        featuresArray.push(`  ${innerKey}     `)
        console.log("innerKey",innerKey)
      }
      }

    this.setState({
       languages : languageArray.splice(0,5),
       features: featuresArray.splice(0,3)
    })

  }) 
}


  render() {
    
    return (
      <div > 
        {/* <h5 style= 'color: white '>Is this game relevant to you?</h5>
  <h3 style ='color: white;border: solid'> Sign in to see reasons why you may or may not 
   like this based on your games, 
   friends, and curators you follow.
  </h3> 
    <button style= 'background:#7797b0;border-radius: 35px; margin: 20px; padding: 10px'>Sign-in </button><b>or</b>
    <button style= 'background:#7797b0;border-radius: 35px; margin: 10px; padding: 10px'>Open in Steam</button> */}
    
        <h5 style = {divStyle}>Is this game relevant to you?</h5>
        <h3 style = {divStyle}>Sign in to see reasons why you may or may not 
            like this based on your games, 
            friends, and curators you follow.
        </h3>
   <div style = {flexDiv}>
      <button style={buttonStyle}>Sign-in </button>
      <h3>or</h3>
      <button style={buttonStyle}>Open in Steam </button>
    </div>
        <div style={divStyle}>Available Languages and Features :</div>
        <div style ={innerDivStyle}>
          <b>Language :</b> 
          {this.state.languages[0]}  
          Features :
           {this.state.features[0]}<span>&#10003;</span>
           {this.state.features[1]}
           {this.state.features[2]}<span>&#10003;</span>
          </div>
          <div style ={innerDivStyle}>
          <b>Language :</b> 
          {this.state.languages[1]}  
          Features :
           {this.state.features[0]}<span>&#10003;</span>
           {this.state.features[1]}<span>&#10003;</span>
           {this.state.features[2]}<span>&#10003;</span>
          </div>
          <div style ={innerDivStyle}>
          <b>Language :</b> 
          {this.state.languages[2]}  
          Features :
           {this.state.features[0]}
           {this.state.features[1]}<span>&#10003;</span>
           {this.state.features[2]}<span>&#10003;</span>
          </div>
          <div style ={innerDivStyle}>
          <b>Language :</b> 
          {this.state.languages[3]}  
          Features :
           {this.state.features[0]}<span>&#10003;</span>
           {this.state.features[1]}
           {this.state.features[2]}<span>&#10003;</span>
          </div>
          <div style ={innerDivStyle}>
          <b>Language :</b> 
          {this.state.languages[4]}  
          Features :
           {this.state.features[0]}<span>&#10003;</span>
           {this.state.features[1]}
           {this.state.features[2]}<span>&#10003;</span>
          </div>
          <div style ={innerDivStyle}>
          <b>Language :</b> 
          {this.state.languages[5]}  
          Features :
           {this.state.features[0]}
           {this.state.features[1]}<span>&#10003;</span>
           {this.state.features[2]}<span>&#10003;</span>
          </div>
          <h4>Payment Options : <FaAmazonPay size ={60}/>  and  <FaApplePay size ={60}/></h4>
      </div>
   )
  }
};


ReactDOM.render(<App />, document.querySelector('#root'))
const innerDivStyle = {
  padding: '20px',
  color:'#8f98a0',
  padding: '10px',
  background: '#191b4dfa',
  margin: 'auto',
  border: 'solid',
  hover:{
    background: 'yellow'
  }
  
}
const buttonStyle = {
  background:'#7797b0',
  borderRadius: '25px',
   margin: '3px', 
   padding: '5px'
}

const divStyle = {
  border: 'solid',
  color: '#8f98a0',
  height: '50px',
  background: 'Navy'
  
}

const flexDiv = {
  display: 'flex',
  'flexDirection': 'row',
  'justifyContent': 'left'
}

