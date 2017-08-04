import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MarkdownTextbox from './components/markdown_textbox';
import PreviewTextbox from './components/preview_textbox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  render() {
    return (
      <div className="App">
        <MarkdownTextbox onUpdate={event => this.setState({input: event})}/>
        <PreviewTextbox markdown={this.state.input}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
