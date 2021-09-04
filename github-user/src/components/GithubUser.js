import React from 'react' 

class GithubUser extends React.Component {

    componentDidMount(){
        console.log('GithubUser: CDM');
    }
    render(){
        const { user } = this.props
        console.log(this.props.user);
        return(
            <>
            <div className='userImg-container'>
                <img alt = 'User Avatar' src = {user.avatar_url}></img>
            </div>
            <div className = 'userInfo-container'>
                <h1>{user.name}</h1>
                <p>Login: {user.login}</p>
                <p>URL: {user.url}</p>
                <p>Followers: {user.followers}</p>
                <p>Following: {user.following}</p>
            </div>
            </>
        )
    }
}
export default GithubUser 