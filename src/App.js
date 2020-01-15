import React from 'react';
import './App.css';
import GithubList from './components/GithubList'

class App extends React.Component {
  state = {
    githubs:[],
  }

  
  //render the return to the screen
  render(){
  return (
    <div className="App">
      <h1>Github User Cards</h1>
      <GithubList />
    </div>
  );
  }
}

export default App;
