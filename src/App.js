import React from 'react';
import './App.css';
import Counter from './Counter';
import PostList from './PostList';

function App() {
  return (
    <div className="App">
      <Counter/>
      <hr/>
      <PostList/>
    </div>
  );
}

export default App;
