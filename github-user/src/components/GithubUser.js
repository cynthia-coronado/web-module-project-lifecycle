import React from 'react' 

class GithubUser extends React.Component {

    componentDidMount(){
        console.log('GithubUser: CDM');
    }
    render(){
        const { user } = this.props
        console.log(this.props.user);
        return(
            <div>
                <img alt = 'User Avatar' src = {user.avatar_url}></img>
            </div>
        )
    }
}
export default GithubUser 