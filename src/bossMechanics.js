/*
  Boss Mechanics Card Component

  Component for displaying boss mechanics. Displays the follow statistics...
    Name
    Description
    Mechanics Sub Component
    Cost -- TODO
    Comments -- TODO
    Playtest Notes -- TODO
    Revision Number -- TODO
    Revision Count -- TODO
*/

import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Card, Tag, Button, Row, Col, Menu, Dropdown } from 'antd';
import { Input, AutoComplete } from 'antd';
import SiteVars from './SiteGlobals.js';

/**

*/
class BossMechanicCardComponent extends Component {
  constructor(props) {
    super(props);

    this.handleEditMenuClick = this.handleEditMenuClick.bind(this);
    this.descriptionChangeHandler = this.descriptionChangeHandler.bind(this);
    this.cancelButtonHandler = this.cancelButtonHandler.bind(this);

    if (props.editable) {
      this.state = {
        'id': null,
        'name': null,
        'originalName': null,
        'description': null,
        'originalDescription': null,
        'editable': true,
        'mechanics': [],
        'originalMechanics': [],
        'mechanicsAutocomplete': props.mechanicsAutocomplete,
        'autocompleteValue': null,
        'handleDeleteMechanicClick': props.handleDeleteMechanicClick
      }
    } else {
      this.state = {
        'id': props.id,
        'name': props.name,
        'originalName': props.name,
        'description': props.description,
        'originalDescription': props.description,
        'editable': false,
        'mechanics': props.mechanics.slice(),
        'originalMechanics': props.mechanics.slice(),
        'mechanicsAutocomplete': props.mechanicsAutocomplete,
        'autocompleteValue': null,
        'handleDeleteMechanicClick': props.handleDeleteMechanicClick
      }
    }
  }

  handleEditMenuClick(v) {
    let value = v.key;

    if (value === 'edit') {
      this.setState({ 'editable': true });
    } else if (value === 'delete') {
      this.state.handleDeleteMechanicClick(this.state.id);
    }
  }

  autocompleteOnSelectHandler(value) {
    const { mechanics } = this.state;
    if (!mechanics.map((e) => { return e.name; }).includes(value)) {
      mechanics.push({ 'id': this.state.mechanicsAutocomplete.indexOf(value) + 1, 'name': value });
      this.setState({ 'autocompleteValue': null })
    }

    this.setState({ 'mechanics': mechanics });
  }

  descriptionChangeHandler(event) {
    this.setState({ 'description': event.target.value });
  }

  cancelButtonHandler(event) {
    this.setState({
      'name': this.state.originalName,
      'description': this.state.originalDescription,
      'mechanics': this.state.originalMechanics.slice(),
      'editable': false
    });
  }

  /*
    Type - Dropdown - { Action, Behavior, Modifier(Attack|Target|Area), Trigger }
    Name
    Description
    Mechanics Sub Component
    Cost
    Comments
    Playtest Notes
    Revision Number
    Revision Count
  */
  render() {
    var mechanicTags = this.state.mechanics.map((item) => {
      return (
        <Tag key={ item.id }>
          <a
            href={ SiteVars.baseUrl + '/mechanics/' + item.id }
            onClick={() => { alert('test'); }}
          >
            { item.name }
          </a>
        </Tag>
      )
    });

    const menu = (
      <Menu onClick={ this.handleEditMenuClick }>
        <Menu.Item key='edit'>Edit</Menu.Item>
        <Menu.Item key='delete'>Delete</Menu.Item>
      </Menu>
    );

    // NON-EDITABLE CARD
    if (this.state.editable == null || !this.state.editable) {
      var titleLink = (
        <Row>
          <Col span={ 21 }>
            <a href={ SiteVars.baseUrl + '/cards/' + this.state.id }>
              { this.state.name }
            </a>
          </Col>
          <Col span={ 3 }>
            <Dropdown overlay={ menu }>
              <Button icon='bars' size='small' />
            </Dropdown>
          </Col>
        </Row>
      );

      return (
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Card title={ titleLink } bordered={ false } style={{ width: 300 }}>
            <ReactMarkdown source={ this.state.description } />
            <div style={{ paddingTop: '5px' }}>
              { mechanicTags }
            </div>
          </Card>
        </div>
      );
    } else {
      // EDITABLE CARD
      const titleInput = (
        <Input
          placeholder='Mechanic Name'
          value={ this.state.name }
          onChange={ (e) => { this.setState({ 'name': e.target.value }); }}
        />
      )

      return (
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Card title={ titleInput }
            bordered={ false }
            style={{ width: 300 }}
          >
            <div style={{ paddingTop: '5px' }}>
              <Input.TextArea
                autosize={{ minRows: 2, maxRows: 30 }}
                placeholder='Mechanic Description'
                value={ this.state.description }
                onChange={ this.descriptionChangeHandler }
              />
              <h5>Preview</h5>
              <ReactMarkdown source={ this.state.description } />
              <br />

              <h5>Mechanic Tags</h5>
              <AutoComplete
                dataSource={ this.state.mechanicsAutocomplete }
                value={ this.state.autocompleteValue }
                onSelect={ (v) => {
                  this.autocompleteOnSelectHandler(v)
                }}
                placeholder='get yer mechanics!'
              />

              <div style={{ paddingTop: '5px' }}>
                { mechanicTags }
              </div>

              <Button type="primary" onClick={ this.saveButtonHandler }>
                Save
              </Button>
              <Button type="danger" onClick={ this.cancelButtonHandler }>
                Cancel
              </Button>
            </div>
          </Card>
        </div>
      );
    }
  }
}

export { BossMechanicCardComponent };
