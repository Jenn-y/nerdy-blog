import React from 'react';
import Post from './Post.md';
import ReactMarkdown from 'react-markdown';
import './App.css';
import gfm from 'remark-gfm'

class App extends React.Component{
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
        <div class="header">
          <h2>Blog Post #1</h2>
        </div>
        <div className="container">
          <ReactMarkdown plugins={[gfm]} source={markdown} />
        </div>
        <div class="footer">
          <p>2021 | Jenny</p>
        </div>
      </div>
    )
  }
}
export default App;
