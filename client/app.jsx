import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import HelloWorld from './components/HelloWorld.jsx'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: null
    }
  }

  
  componentDidMount() {
    getAllGames()
  }
  
  getAllGames(){
    $.get(`http://localhost:3009/games`, (data) => {
        this.setState({languages: data})
      })    
  }
  
  
  
  render() {
    
    return (
      <div > 
        {this.state.languages}
      </div>
   )
  }
};



ReactDOM.render(<App />, document.getElementById('app'))
