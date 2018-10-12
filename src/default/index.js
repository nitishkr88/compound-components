import React from 'react'

import List from './list'
import Item from './item'

import { StyledContainer } from '../common/_styled-list-items'
import { contains, addRemoveOrReplace } from '../common/utils'

class ListApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list1: {
        type: 'single',
        selected: 1
      },
      list2: {
        type: 'multi',
        selected: [1, 3]
      }
    }
  }

  onSelection = list => value => {
    this.setState(prevState => ({
      ...prevState,
      [list]: {
        ...prevState[list],
        selected: this.getSelection(list, value)
      }
    }))
  }

  getSelection = (list, value) => {
    const { type, selected } = this.state[list]
    const multi = type === 'multi' ? true : false
    return addRemoveOrReplace(selected, value, multi)
  }

  isSelected = (list, value) => {
    const { type, selected } = this.state[list]
    const multi = type === 'multi' ? true : false
    return contains(selected, value, multi)
  }

  render() {
    const { list1, list2 } = this.state
    return (
      <StyledContainer>
        <List id="list1" label="Select One">
          <Item
            value={1}
            type={list1.type}
            selected={this.isSelected('list1', 1)}
            onSelection={this.onSelection('list1')}
            icon="add_circle_outline">
            one
          </Item>
          <Item
            value={2}
            type={list1.type}
            selected={this.isSelected('list1', 2)}
            onSelection={this.onSelection('list1')}
            icon="notifications_none">
            two
          </Item>
          <Item
            value={3}
            type={list1.type}
            selected={this.isSelected('list1', 3)}
            onSelection={this.onSelection('list1')}
            icon="link">
            three
          </Item>
        </List>

        <List id="list2" label="Select Multiple">
          <Item
            value={1}
            type={list2.type}
            selected={this.isSelected('list2', 1)}
            onSelection={this.onSelection('list2')}
            icon="add_circle_outline">
            one
          </Item>
          <Item
            value={2}
            type={list2.type}
            selected={this.isSelected('list2', 2)}
            onSelection={this.onSelection('list2')}
            icon="notifications_none">
            two
          </Item>
          <Item
            value={3}
            type={list2.type}
            selected={this.isSelected('list2', 3)}
            onSelection={this.onSelection('list2')}
            icon="link">
            three
          </Item>
        </List>
      </StyledContainer>
    )
  }
}

export default ListApp
