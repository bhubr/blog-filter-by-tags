import React from 'react';

const SingleArticle = props => (
  <article>
    <h2>{props.title}</h2>
    <div>
      <img src={props.picture} />
      <p>{props.content}</p>
    </div>
    <ul className="tags">
      {
        props.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))
      }
    </ul>
  </article>
);

export default SingleArticle;
