import React, { Component } from 'react';

const tags = ['Web', 'React', 'Angular'];

class FilterByTag extends Component {
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
    return (
      <ul className="tags">
      {
        tags.map((tag, index) => (
          <li
            key={index}
            onClick={() => this.handleClick(tag)}
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
