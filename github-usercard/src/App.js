import React from 'react';

import UserCard from './compnents/UserCard'
import FollowersCard from './compnents/FollowersCard'

import './App.css';
// name: Ryan-Wisniewski
// api: https://api.github.com/users/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>do something</h1>
        <UserCard />
        <FollowersCard />
      </header>
    </div>
  );
}

export default App;
