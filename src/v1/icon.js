import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Icon = props => (
  <Icon.Element {...props} className={"material-icons"}>
    {props.name}
  </Icon.Element>
)

Icon.Element = styled.i`
  width: auto;
  color: ${props => props.color};
  font-size: ${props => parseFloat(props.size)}px;
`

Icon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
}

Icon.defaultProps = {
  size: 16,
  color: "inherit"
}

export default Icon
