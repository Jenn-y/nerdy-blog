import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

class App extends React.Component{
  render(){
    return (
      <div className="welcome-container">
        <div>
          <h1>HOME</h1>
          <Link to="/post1"><button>Read Post #1</button></Link>
          <Link to="/post2"><button>Read Post #2</button></Link>
        </div>
        <div className="footer">
          <p>2021   |   Jenny</p>
        </div>
      </div>
    )
  }
}
export default App;
