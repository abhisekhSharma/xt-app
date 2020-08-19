import React, { Component } from 'react';
import Home from './Home';
import './App.css';






const App = (props) => {

  console.log(props);
  return (
    <div>
      <Home pageData={props.hits} />
    </div>
  );
};

export default App;
