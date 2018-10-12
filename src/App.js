import React, { Component } from 'react'

import ListDefault from './default'
import ListCompound from './compound'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListDefault />
        <hr style={{ width: '100vw' }} />
        <ListCompound />
      </div>
    )
  }
}

export default App
