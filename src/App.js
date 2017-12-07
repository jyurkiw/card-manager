import React, { Component } from 'react';
import './App.css';

import NavSidebar from './nav.js';
import { BossMechanicCardComponent } from './bossMechanics.js'

// Test Data
import { NavConfig, BossMechanics, MechanicTypes } from './test_data.js';
// End Test Data

import { Layout, Row, Col, Button } from 'antd';
const { Header, Sider, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);

    this.handleNavClick = this.handleNavClick.bind(this);
    this.handleDeleteMechanicClick = this.handleDeleteMechanicClick.bind(this);

    this.state = {
      'bossMechanicsContent': BossMechanics,
      'emptyMechanicCards': 0
    }
  }

  handleAddNewMechanicClick() {
    let newState = {
      'bossMechanicsContent': this.state.bossMechanicsContent,
      'emptyMechanicCards': this.state.emptyMechanicCards + 1
    }

    this.setState(newState);
  }

  handleDeleteMechanicClick(id) {
    let deleteIndex = this.state.bossMechanicsContent.map((e) => {
      return e.id;
    }).indexOf(id);
    const bossMechanicsContent = this.state.bossMechanicsContent.slice();
    bossMechanicsContent.splice(deleteIndex, 1);

    this.setState({ 'bossMechanicsContent': bossMechanicsContent });
  }

  handleNavClick(action) {
    let actionKey = action.key;
    console.log(actionKey + " was selected!");
  }

  render() {
    let cardContent = this.state.bossMechanicsContent.map((mechanic) => {
      return (
        <Col span={6} key={ mechanic.id }>
          <BossMechanicCardComponent
            id={ mechanic.id }
            name={ mechanic.name }
            description={ mechanic.description }
            mechanics={ mechanic.mechanics }
            mechanicsAutocomplete={ MechanicTypes }
            handleDeleteMechanicClick={ this.handleDeleteMechanicClick }
          />
        </Col>
      );
    });

    if (this.state.emptyMechanicCards > 0) {
      for(let ci = 0; ci < this.state.emptyMechanicCards; ci++) {
        cardContent.push((
          <Col span={6} key={ 'blankCard' + ci }>
            <BossMechanicCardComponent
              editable={ true }
              mechanicsAutocomplete={ MechanicTypes }
              handleDeleteMechanicClick={ this.handleDeleteMechanicClick }
            />
          </Col>
        ));
      }
    }

    return (
      <div>
        <Layout>
          <Header><h1>Card Manager</h1></Header>
          <Layout>
            <Sider>
              <NavSidebar
                navConfig={ NavConfig }
                clickHandler={ this.handleNavClick }
              />
            </Sider>
            <Content>
              <Row type="flex" justify="start" align="middle" gutter={8}>
                { cardContent }
                <Col span={6} key="addButton">
                  <Button
                    type="dashed"
                    onClick={ (t) => this.handleAddNewMechanicClick() }
                  >
                    + Add New Mechanic
                  </Button>
                </Col>
              </Row>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
