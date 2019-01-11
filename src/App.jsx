// import "babel-polyfill"
import React from "react";
import {
  Switch,
  Redirect,
  NavLink
} from "react-router-dom";
import { Helmet } from "react-helmet"; // 自定义seo
import { router, NestedRoute, StatusRoute} from "./router";
import { Menu, Icon, Affix } from 'antd';
import './assets/app.css';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
/* eslint-disable no-console */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'mail'
    };
  }
  componentDidMount() {
  }
  handleClick (e) {
    this.setState({
      current: e.key,
    });
  }
  handleTemp (path) {
    this.setState({
      current: path,
    });
  }
  render() {
    return (
      <div className="react-container">
        <Helmet>
          <title>This is App page</title>
          <meta name="keywords" content="React SSR"></meta>
        </Helmet>
        <header className="header">
          <Affix>
            <Menu
              onClick={this.handleClick.bind(this)}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="bar">
                <NavLink to="/bar"><Icon type="mail" />Bar</NavLink>
              </Menu.Item>
              <Menu.Item key="baz">
                <NavLink to="/baz"><Icon type="twitter" />Baz</NavLink>
              </Menu.Item>
              <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Navigation Three - Submenu</span>}>
                <MenuItemGroup title="Item 1">
                  <Menu.Item key="redux"><NavLink to="/redux">redux</NavLink></Menu.Item>
                  <Menu.Item key="pbl"><NavLink to="/pbl">瀑布流</NavLink></Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <Menu.Item key="top-list">
                <NavLink to="/top-list"><Icon type="qq" />Grid</NavLink>
              </Menu.Item>
            </Menu>
          </Affix>
        </header>
        <div className="view">
          <Switch>
            {
              router.map((route, i) => 
                <NestedRoute key={i} {...route} onRouter={this.handleTemp.bind(this)}/>
              )
            }
            <Redirect from="/" to="/bar" exact/>
            <StatusRoute code={404}>
              <div>
                <h1>Not Found</h1>
              </div>
            </StatusRoute>
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
