import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Toggle = props => {
  return <Toggle.Element {...props} />
}

Toggle.Element = styled.input``

Toggle.defaultProps = {
  checked: false
}

Toggle.propTypes = {
  checked: PropTypes.bool
}

export default Toggle
