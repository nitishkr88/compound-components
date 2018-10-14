import React from 'react'

import List from './list'
import { StyledContainer } from '../common/_styled-list-items'

class ListApp extends React.Component {
  state = {
    list1: {
      type: 'single',
      initialValues: 1
    },
    list2: {
      type: 'multi',
      initialValues: [1, 3]
    }
  }
  render() {
    const { list1, list2 } = this.state
    return (
      <StyledContainer>
        <List
          id="list1"
          multi={list1.type === 'multi'}
          label="Select One"
          initialValues={list1.initialValues}
          onSelection={v => console.log(v)}>
          <List.Item value={1} icon="add_circle_outline">one</List.Item>
          <List.Item value={2} icon="notifications_none">two</List.Item>
          <List.Item value={3} icon="link">three</List.Item>
        </List>
        <List
          id="list2"
          multi={list2.type === 'multi'}
          label="Select Multiple"
          initialValues={list2.initialValues}
          onSelection={v => console.log(v)}>
          <List.Item value={1} icon="add_circle_outline">one</List.Item>
          <List.Item value={2} icon="notifications_none">two</List.Item>
          <List.Item value={3} icon="link">three</List.Item>
        </List>
      </StyledContainer>
    )
  }
}

export default ListApp
