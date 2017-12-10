import React, { Component } from 'react';

import Output from './Components/Output';
import Form from './Components/Form';

import axios  from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleParas = this.handleParas.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleFormat = this.handleFormat.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      paras: 2,
      type: 'all-meat',
      format: 'html',
      text: ''
    }
  }

  componentWillMount() {
    this.getText();
  }

  getText() {
    axios.get(`https://baconipsum.com/api/?type=${this.state.type}&paras=${this.state.paras}&format=${this.state.format}`)
    .then((response) => {
      this.setState({ text: response.data })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  handleParas(e) {
    this.setState({
      paras: e.target.value
    }, this.getText)
  }

  handleType(e) {
    this.setState({
      type: e.target.value
    }, this.getText)
  }

  handleFormat(e) {
    this.setState({
      format: e.target.value
    }, this.getText)
  }

  // handleSubmit() {
  //   this.getText();
  // }

  render() {
    const { paras, type, format, text } = this.state;
    return (
      <div className="App">
      <h2>Bacon Ipsum Generator</h2>

        <Form paras={paras}
        type={type}
         format={format}
         handleParas={this.handleParas}
         handleType={this.handleType}
         handleFormat={this.handleFormat}
         // handleSubmit={this.handleSubmit}
          />
        <Output text={text}/>

        <p>Made with React
        <i className="fab fa-react fa-spin fa-2x"></i>
        </p>
      </div>
    )
  }
}

export default App;
