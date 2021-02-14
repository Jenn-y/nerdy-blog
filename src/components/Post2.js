import React from 'react';
import Post from '../Post2.md';
import ReactMarkdown from 'react-markdown';
import '../Post.css';
import gfm from 'remark-gfm';
import { Link } from "react-router-dom";

class Post2 extends React.Component{
  constructor(){
    super();
    this.state = { markdown: '' };
  }
  componentDidMount(){
    fetch(Post).then(res => res.text()).then(text => this.setState({markdown: text}));
  }
  render(){
    const {markdown} = this.state;
    return (
      <div>
        <div className="header">
          <div className="navigation">
            <Link to="/"><button>Home</button></Link>
            <Link to="/post1"><button>Read Post #1</button></Link>
            <Link to="/post2"><button className="active">Read Post #2</button></Link>
          </div>
          <h2>Blog Post #2</h2>
        </div>
        <div className="container">
          <ReactMarkdown plugins={[gfm]} source={markdown} />
        </div>
        <div className="footer">
          <p>2021   |   Jenny</p>
        </div>
      </div>
    )
  }
}
export default Post2;
