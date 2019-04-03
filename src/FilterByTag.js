import React, { Component } from 'react';

const tags = ['Web', 'React', 'Angular'];

class FilterByTag extends Component {
  render() {
    return (
      <ul className="tags">
      {
        tags.map((tag, index) => (
          <li
            key={index}
            onClick={() => this.props.filterTag(tag)}
          >
            {tag}
          </li>
        ))
      }
      </ul>
    )
  }
}

export default FilterByTag;
