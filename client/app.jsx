import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import Languages from './components/Languages.jsx'
import Features from './components/Features.jsx'

// import Styles from 'stylings.css'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [],
      features: []
    }
  }

  
  componentDidMount() {
    
    $.get(`http://localhost:3009/games/1`, (data) => {
      var languageArray = []
      var featuresArray = []
      for(let key in data){
        languageArray.push(key)
      for(let innerKey in data[key]){
        featuresArray.push(innerKey)
        console.log("innerKey",innerKey)
      }
      }
      
      
      
      console.log("languageArray", languageArray, "featuresArray " , featuresArray)
    this.setState({
       languages : languageArray.splice(0,5),
       features: featuresArray.splice(0,5)
    })

  }) 
}
 
  render() {
    
    return (
      <div > 
        <div>Available Languages and Features :</div>
        <div>Language: {this.state.languages[0]}  Features {this.state.features[0]}</div>
        <div>Language: {this.state.languages[1]}  Features {this.state.features[1]}</div>
        <div>Language: {this.state.languages[2]}  Features {this.state.features[2]}</div>
        <div>Language: {this.state.languages[3]}  Features {this.state.features[3]}</div>
        <div>Language: {this.state.languages[4]}  Features {this.state.features[4]}</div>
       

        {/* <Languages game={this.state.languages} />
        <Features features={this.state.features} />  */}
      </div>
   )
  }
};



ReactDOM.render(<App />, document.getElementById('app'))
