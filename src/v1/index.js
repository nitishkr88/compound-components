import React from "react"
import styled from "styled-components"

import List from "./list"

const Container = styled.div`
  padding: 48px;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
`

class ListApp extends React.Component {
  render() {
    return (
      <Container>
        <div style={{ width: '40%' }}>
          <List label="Select One" initialValues={1} onSelection={v => console.log(v)}>
            <List.Item value={1} icon="add_circle_outline">one</List.Item>
            <List.Item value={2} icon="info">two</List.Item>
            <List.Item value={3} icon="link">three</List.Item>
            <List.Item value={4} icon="notifications_none">four</List.Item>
          </List>
        </div>
        <div style={{ width: '40%' }}>
          <List multi label="Select Multiple" initialValues={[1, 3]} onSelection={v => console.log(v)}>
            <List.Item value={1} icon="add_circle_outline">one</List.Item>
            <List.Item value={2} icon="info">two</List.Item>
            <List.Item value={3} icon="link">three</List.Item>
            <List.Item value={4} icon="notifications_none">four</List.Item>
          </List>
        </div>
      </Container>
    )
  }
}

export default ListApp
