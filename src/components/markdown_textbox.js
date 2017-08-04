import React, { Component } from 'react';

class MarkdownTextbox extends Component {
  render() {
    return (
        <textarea
        className="markdown-textbox"
        onChange={event => this.props.onUpdate(event.target.value)} />
    );
  }
}

export default MarkdownTextbox;
