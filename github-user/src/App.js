import './App.css';
import React from 'react'
import axios from 'axios'
import GithubSearchForm from './components/GithubSearchForm'
import GithubUser from './components/GithubUser'

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

  render() {
    return (
      <div className="App">
        <h1>Github Project</h1>
        <GithubSearchForm />
        <GithubUser user = {this.state.user}/>
      </div>
    );
  }
}

export default App;
