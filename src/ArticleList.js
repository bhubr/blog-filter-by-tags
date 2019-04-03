import React from 'react';
import SingleArticle from './SingleArticle';

const ArticleList = props => (
  <div>
    {
      props.articles.map(article => (
        <SingleArticle
          title={article.title}
          content={article.content}
          picture={article.picture}
          tags={article.tags}
        />
  
      ))
    }
  </div>
);

export default ArticleList;
