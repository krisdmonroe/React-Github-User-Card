import React from 'react';
import GithubCards from './GithubCards'
import axios from 'axios'
import FollowerCards from './FollowerCards'

class GithubList extends React.Component {
    state = {
        githubs:[],
        followers:[]
      }
      //Axios call to retrieve data from github and set that data to state
      componentDidMount() {
        axios
        .get('https://api.github.com/users/krisdmonroe')
        .then(response => {
        this.setState({
         githubs:[response.data]
        })
        console.log('this is me',response)
      })
      .catch(err => console.log(err))
    //axios call for followers and set that to followers state
    axios
    .get('https:api.github.com/users/krisdmonroe/followers')
    .then(res => {
        res.data.forEach(user => {
            axios
            .get(`https:api.github.com/users/${user.login}`)
            .then(res => {
                console.log(res.data)
                this.setState({
                  followers: [...this.state.followers, res.data]
                });
        })
    })
    console.log('this is followers', this.state.followers)
})
.catch(err => console.log(err))
};




      render(){
    return(
        <div className="UserCard-list">
      {this.state.githubs.map(github => (
          <GithubCards
            image={github.avatar_url}
            key={github.id}
            name={github.name}
            login={github.login}
            location={github.location}
            profile={github.html_url}
            followers={github.followers}
            following={github.following}
            bio={github.bio} 
            url={github.url}
          />
      ))}
      <div className="character-list">
      {this.state.followers.map(follow => (
     <FollowerCards
            image={follow.avatar_url}
            key={follow.id}
            name={follow.login}
            login={follow.login}
            location={follow.location}
            profile={follow.html_url}
            followers={follow.followers}
            following={follow.following}
            bio={follow.bio}
            url={follow.url}
          />
          
      ))}
    </div>
      </div>
    );
}
}
export default GithubList;