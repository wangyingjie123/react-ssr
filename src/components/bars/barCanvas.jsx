import React from "react";
/* eslint-disable no-console */
const scaleNames = {
  c: '摄氏温度',
  f: '华氏温度'
};
class Barcanves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  handleChange(e) {
    // this.setState({value: event.target.value});
    this.props.onTemperatureChange(e.target.value);
  }
  render() {
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[this.props.scale]}:</legend>
        <input value={this.props.temperature}
               onChange={this.handleChange.bind(this)} />
      </fieldset>
    )
  }
}
export default Barcanves;