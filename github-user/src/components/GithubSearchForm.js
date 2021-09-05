import React from 'react'
import axios from 'axios'
import SearchedUsers from './SearchedUsers'

class GithubSearchForm extends React.Component {
    constructor() {
     super()
     this.state = {
         users: {},
         followers: []
     }
    }
    componentDidMount() {
        console.log('search: CDM');
        axios
        .get('https://api.github.com/users')
        .then(response => {
          console.log('search form',response);
          this.setState({
            users: response.data
          })
        })
        .catch(error => {
          console.log(error);
        })
        axios 
        .get(' https://api.github.com/users/followers')
        .then(response => {
          console.log('follower form', response);
          this.setState({
            followers: response.data
          })
        })
        .catch(error => {
          console.log(error);
        }) 
    }
    handleChange = (event) => {
        this.setState({
            users: event.target.value
        })
    }
    handleSubmit = (event) => {
      event.preventDefault()
      axios 
      .get(`https://api.github.com/users/${this.state.users}`)
      .then(response => {
          console.log('search users',response);
          this.setState({
              users: response.data
          })
      })
      .catch(error => {
          console.log(error);
      })
    }
    
    render() {
        return(
            <div>
                <h1>Search Github!</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type= 'text'
                        onChange = {this.handleChange}
                    />
                    <button>Find Github User</button>
                </form>
                <div>
                   <SearchedUsers users={this.state.users}/>
                </div>
            </div>
        )
    }
}
export default GithubSearchForm