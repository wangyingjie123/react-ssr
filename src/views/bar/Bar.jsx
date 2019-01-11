import React from "react";
import { Helmet } from "react-helmet";
import Barcanves from '@/components/bars/barCanvas'
import { notification } from 'antd';
import { tryConvert } from '@/utils/libs'
import './bar.scss'
function BoilingVerdict (props) {
  if (props.celsius >= 100) {
    return <p>水会烧开</p>;
  }
  return <div className={props.color}>
    水不会烧开
    {props.children}
  </div>;
}
/* eslint-disable no-console */
class Bar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      temperature: '',
      scale: 'c'
    }
  }
  handleClick (id, e) {
    const args = {
      message: `Notification ID is ${id}`,
      description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
      // duration: 0,
    };
    notification.open(args);
  }
  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }
  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, 'f') : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, 'c') : temperature;
    return (
      <div className="layout">
        <Helmet>
          <title>Bar</title>
          <meta name="keywords" content="这是 Bar"></meta>
        </Helmet>
        <div className="bar">
          <div className="imgmask" onClick={this.handleClick.bind(this, 33)}></div>
          <p className="bar-text">mask属性，不支持IE噢</p>
          <Barcanves scale="f"
                      temperature={fahrenheit}
                      onTemperatureChange={this.handleFahrenheitChange.bind(this)} />
          <Barcanves  scale="c"
                      temperature={celsius}
                      onTemperatureChange={this.handleCelsiusChange.bind(this)}/>
          <BoilingVerdict celsius={parseFloat(celsius)} color="red">
            <span className="Dialog-title">
              Welcome
            </span>
            <p className="Dialog-message">
              Thank you for visiting our spacecraft!
            </p>
          </BoilingVerdict>
        </div>
      </div>
    );
  }
}

export default Bar;
