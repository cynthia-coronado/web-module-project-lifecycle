import React from 'react'

class SearchedUsers extends React.Component {

    componentDidMount(){
        console.log('GithubUser: CDM');
    }
    render(){
        const { users } = this.props
        console.log(this.props.users);
        return(
            <>
            <div className='usersImg-container'>
                <img alt = 'Users Avatar' src = {users.avatar_url}></img>
            </div>
            <div className = 'userInfo-container'>
                <h1>{users.name}</h1>
                <p>Login: {users.login}</p>
                <p>URL: {users.url}</p>
                <p>Followers: {users.followers}</p>
                <p>Following: {users.following}</p>
            </div>
            </>
        )
    }
}
export default SearchedUsers