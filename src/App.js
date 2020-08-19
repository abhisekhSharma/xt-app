import React, { useState, useEffect }from 'react';
import Home from './Home';
import './App.css';






const App = (props) => {

  return (
    <div>
      <Home pageData={props.hits} />
    </div>
  );
};

export default App;
