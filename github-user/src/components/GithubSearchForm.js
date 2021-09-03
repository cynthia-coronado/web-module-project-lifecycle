import React from 'react'

class GithubSearchForm extends React.Component {

    handleChange = (event) => {
    }
    handleSubmit = (event) => {
      event.preventDefault()
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
            </div>
        )
    }
}
export default GithubSearchForm