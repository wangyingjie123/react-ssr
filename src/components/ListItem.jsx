import React from "react";
import { Card } from 'antd';
const { Meta } = Card;
class ListItem extends React.Component {
  render() {
    const {topTitle, picUrl} = this.props;
    return (
    <Card
      hoverable
      style={{ width: 240, margin: '0 auto' }}
      cover={<img alt="example" src={picUrl} />}
    >
      <Meta
        title={topTitle}
        description="www.instagram.com"
      />
    </Card>
    );
  }
}

export default ListItem;
