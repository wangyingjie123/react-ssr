import React from "react";
import { Helmet } from "react-helmet";
import { Button } from 'antd';
import { fetchFooList } from "../../redux/actions";
/* eslint-disable no-console */
class Foo extends React.Component {
  componentDidMount() {
    console.log(this.props)
  }
  handleFoo () {
    this.props.dispatch(fetchFooList('你修改我了'))
  }
  render() {
    return (
      <div className="layout">
        <Helmet>
          <title>redux测试页</title>
        </Helmet>
        <div>
          <h3>{this.props.FooList.name}</h3>
          <Button type="danger" onClick={this.handleFoo.bind(this)}>Danger</Button>
        </div>
      </div>
    );
  }
}

export default Foo;
