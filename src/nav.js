import React, { Component } from 'react';
import { Menu } from 'antd';

class NavSidebar extends Component {
  constructor(props) {
    super(props);

    this.convertCardTypePayload = this.convertCardTypePayload.bind(this);
    this.convertCardTypeChildPayload = this.convertCardTypeChildPayload.bind(this);

    this.state = {
      'nav': props.navConfig.map(this.convertCardTypePayload),
      'clickHandler': props.clickHandler
    }
  }

  convertCardTypeChildPayload(item, index) {
    let keyValue = item.clickCmd == null ? index : item.clickCmd;

    return (
      <Menu.Item key={ keyValue }>
        { item.label }
      </Menu.Item>
    )
  }

  convertCardTypePayload(item, index) {
    let keyValue = item.clickCmd == null ? index : item.clickCmd;

    if (item.children == null) {
      return (
        <Menu.Item key={ keyValue }>
          { item.label }
        </Menu.Item>
      );
    } else {
      return (
        <Menu.SubMenu key={ keyValue } title={ item.label }>
          { item.children.map(this.convertCardTypeChildPayload) }
        </Menu.SubMenu>
      );
    }
  }

  render() {
    return (
      <Menu onClick={ this.state.clickHandler }>
        { this.state.nav }
      </Menu>
    )
  }
}

export default NavSidebar;
