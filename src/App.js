import React from 'react';
import './App.css';
import GithubList from './components/GithubList';
import styled from 'styled-components';

const DIV = styled.div`
  display:flex;
  justify-content: center;
  margin:2% 2%;
  `;
  const H1 = styled.div`
  display:flex;
  justify-content: center;
  margin:2%;
  `;
class App extends React.Component {
  state = {
    githubs:[],
  };
  //render the return to the screen
  render(){
  return (
    <div>
    <H1>Github User Cards</H1>
    <DIV>
      <GithubList />
    </DIV>
    </div>
  );
  }
}

export default App;
