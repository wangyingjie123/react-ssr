import React from "react";
import { Helmet } from "react-helmet";
import './flow.scss'
/* eslint-disable no-console */
const FlowRow = ({rows}) => (
  <ul>
    {
      rows.map((num) =>
        <li key={num.toString()} className="flow-row">

        </li>
      )}
  </ul>
)
function FlowColumn (props) {
  const num = props.values
  return (
    <div className="flow-list layout">
      {num.map((number) =>
        <div key={number.toString()} className="flow-item">
          <FlowRow rows={num}></FlowRow>
        </div>
      )}
    </div>
  )
}

class Flow extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      temperature: [1,2,3,4]
    }
  }
  render() {
    return (
      <div className="flow">
        <Helmet>
          <title>瀑布流</title>
          <meta name="keywords" content="这是 瀑布流布局"></meta>
        </Helmet>
        <FlowColumn values={ this.state.temperature }></FlowColumn>
      </div>
    )
  }
}
export default Flow;