import React from "react";
import { Route } from "react-router-dom";
import {router} from "./index";
/* eslint-disable no-console */
class NestedRoute extends React.Component {
  constructor (props) {
    super(props)
  }
  componentDidMount() {
    this.props.onRouter(this.props.name)
  }
  render() {
    return (
      <Route path={this.props.path} exact={this.props.exact}
    /*渲染路由对应的视图组件，将路由组件的props传递给视图组件*/
      render={(props) => <this.props.component {...props} router={this.props.routes}/>}
      />
    );
  }
}

export default NestedRoute;
