import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleNumParas = this.handleNumParas.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleFormat = this.handleFormat.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNumParas(num) {
    this.props.handleParas(num);
  }

  handleType(type) {
    this.props.handleType(type);
  }

  handleFormat(format) {
    this.props.handleFormat(format);
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.handleSubmit();
  // }

  render() {
    const { paras, type, format } = this.props;
    //<form onSubmit={this.handleSubmit}
    // <input type="submit" value="Get Bacon ipsum" />
    return (
      <form>

        <label htmlFor="num-paras">
          <p># of paragraphs</p>
          <input id="num-paras" type="number" value={paras} onChange={this.handleNumParas} />
        </label>

        <label htmlFor="type">
          <p>type</p>
          <select id="type" value={type} onChange={this.handleType}>
            <option value="all-meat">all-meat</option>
            <option value="meat-and-filler">meat-and-filler</option>
          </select>
        </label>

        <label htmlFor="format">
          <p>format</p>
          <select id="format" value={format} onChange={this.handleFormat}>
            <option value="html">html</option>
            <option value="text">text</option>
          </select>
        </label>
      </form>
    )
  }
}

export default Form;
