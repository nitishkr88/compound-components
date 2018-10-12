import React from 'react'
import PropTypes from 'prop-types'

import { StyledList, StyledLabel } from '../common/_styled-list-items'

class List extends React.Component {
  render() {
    return (
      <StyledList>
        <StyledLabel>
          <h3>{this.props.label}</h3>
        </StyledLabel>
        {this.props.children}
      </StyledList>
    )
  }
}

List.propTypes = {
  label: PropTypes.string
}

export default List
