import React, { Component } from 'react';
import ArticleList from './ArticleList';
import FilterByTag from './FilterByTag';
import articles from './articles';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    this.setState({
      filter: value
    });
  }

  render() {
    const tagFilter = this.state.filter;
    let filteredArticles;
    if (tagFilter === '') {
      filteredArticles = articles;
    } else {
      filteredArticles = articles.filter(
        article => article.tags.includes(tagFilter)
      );
    }
    return (
      <div className="App">
        <FilterByTag filterTag={this.handleClick} />
        <ArticleList articles={filteredArticles} />
      </div>
    );
  }
}

export default App;
