import './App.css';
import React from 'react'

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
