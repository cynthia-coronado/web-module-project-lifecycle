import React from 'react'

class UserFollowers extends React.Component {
    
    componentDidMount() {
        console.log('Follower: CDM');
    }
    render(){
        const { follower } = this.props
        console.log(follower);
        return(
        <>
            <div className='followerImg-container'>
                <img alt = 'Follower Avatar' src = {follower.avatar_url}></img>
            </div>
            <div className='followerInfo-container'>
                <p>Login: {follower.login}</p>
            </div>
        </>
        )
    }
}
export default UserFollowers