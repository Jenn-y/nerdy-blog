import React, { useState, useEffect } from 'react';
import Post from "../Post1.md";
import ReactMarkdown from 'react-markdown';
import '../Post.css';
import gfm from 'remark-gfm';
import { Link } from "react-router-dom";

const Post1 = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(Post).then(res => res.text()).then(text => setMarkdown(text));
  }, []);

  return (
    <div>
      <div className="header">
        <div className="navigation">
          <Link to="/"><button>Home</button></Link>
          <Link to="/post1"><button className="active">Read Post #1</button></Link>
          <Link to="/post2"><button>Read Post #2</button></Link>
        </div>
        <h2>Blog Post #1</h2>
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
export default Post1;
