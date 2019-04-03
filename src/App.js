import React, { Component } from 'react';
import ArticleList from './ArticleList';
import FilterByTag from './FilterByTag';
import articles from './articles';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterByTag />
        <ArticleList articles={articles} />
      </div>
    );
  }
}

export default App;
