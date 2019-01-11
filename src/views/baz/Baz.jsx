import React from "react";
import { Helmet } from "react-helmet";
import {
  Skeleton, Switch, List, Avatar, Icon,
} from 'antd';
const listData = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
class Baz extends React.Component {
  constructor () {
    super()
    this.state = {
     loading: true,
    }
  }
  onChange (checked) {
    this.setState({ loading: !checked });
  }
  render() {
    const { loading } = this.state;
    return (
      <div className="layout">
        <Helmet>
          <title>Baz</title>
        </Helmet>
        <div>
          <Switch checked={!loading} onChange={this.onChange.bind(this)} />

          <List
            itemLayout="vertical"
            size="large"
            dataSource={listData}
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={!loading &&
                [
                  <IconText key="icon1" type="star-o" text="156" />,
                  <IconText key="icon2" type="like-o" text="156" />,
                  <IconText key="icon3" type="message" text="2" />]
                }
                extra={!loading && <img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
              >
                <Skeleton loading={loading} active avatar>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                  />
                  {item.content}
                </Skeleton>
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default Baz;
