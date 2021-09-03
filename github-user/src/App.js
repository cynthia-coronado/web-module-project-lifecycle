import './App.css';
import React from 'react'
import axios from 'axios'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      user: {},
      followers: []
    }
  }
  componentDidMount() {
    console.log('App: CDM');
    axios
    .get('https://api.github.com/users/cynthia-coronado')
    .then(response => {
      console.log(response);
      this.setState({
        user: response.data
      })
    })
    .catch(error => {
      console.log(error);
    })
    axios 
    .get(' https://api.github.com/users/cynthia-coronado/followers')
    .then(response => {
      console.log(response);
      this.setState({
        followers: response.data
      })
    })
    .catch(error => {
      console.log(error);
    }) 
  }
  componentDidUpdate() {
    console.log('App: CDU');
  }
  handleChange = (event) => {

  }
  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Github Project
        </header>
      </div>
    );
  }
}

export default App;
