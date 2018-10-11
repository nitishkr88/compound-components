import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Icon from "./icon"
import Toggle from "./toggle"

function isNil(value) {
  return (
    value === null ||
    value === undefined ||
    value === "" ||
    (Array.isArray(value) && value.length === 0 ? true : false)
  )
}

function getValue(value, multi = false) {
  if (isNil(value)) {
    return multi ? [] : ""
  }
  return value
}

function addRemoveOrReplace(arr, value, multi = false) {
  if (!multi || !Array.isArray(arr)) {
    return value
  }

  if (arr.includes(value)) {
    return arr.filter(v => v !== value)
  }

  return [...arr, value]
}

function contains(selected, value, multi = false) {
  if (multi) {
    return selected.includes(value)
  }

  return selected === value
}

const _isValid = child => child && React.isValidElement(child)
const _noop = () => {}

const StyledLabel = styled.div`
  border-bottom: 1px solid grey;
  padding: 0 0 4px 0;
  margin: 0 0 8px 0;
  h3 {
    margin: 0;
  }
`

const StyledRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: ${props => props.height || "36px"};
`

const StyledList = styled.div`
  padding: 4px;
`

const StyledContent = styled.span`
  padding-left: 8px;
`

const StyledIcon = styled.span`
  margin-left: auto;
`

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: this.getInitialValues(props)
    }
  }

  getInitialValues({ initialValues, multi }) {
    return getValue(initialValues, multi)
  }

  onSelection = value => {
    const selected = addRemoveOrReplace(
      this.state.selected,
      value,
      this.props.multi
    )
    this.setState({ selected }, () =>
      this.props.onSelection(this.state.selected)
    )
  }

  isSelected = value => {
    return contains(this.state.selected, value, this.props.multi)
  }

  getToggleType() {
    return this.props.multi ? "checkbox" : "radio"
  }

  render() {
    const { label, children } = this.props
    const validChildren = React.Children.toArray(children).filter(_isValid)
    return (
      <StyledList>
        {label && (
          <StyledLabel>
            <h3>{label}</h3>
          </StyledLabel>
        )}
        {React.Children.map(validChildren, child =>
          React.cloneElement(
            child,
            {
              multi: this.props.multi,
              selected: this.isSelected(child.props.value)
            },
            <StyledRow onClick={() => this.onSelection(child.props.value)}>
              <Toggle
                type={this.getToggleType()}
                readOnly
                checked={this.isSelected(child.props.value)}
              />
              <StyledContent>{child.props.children}</StyledContent>
              {child.props.icon && (
                <StyledIcon>
                  <Icon name={child.props.icon} />
                </StyledIcon>
              )}
            </StyledRow>
          )
        )}
      </StyledList>
    )
  }
}

List.Item = styled.div`
  padding: 4px;
  cursor: ${props =>
    props.multi ? "pointer" : props.selected ? "default" : "pointer"};
  pointer-events: ${props =>
    props.multi ? "auto" : props.selected ? "none" : "auto"};
  &:hover {
    background: #e3f2fd;
  }
`

List.defaultProps = {
  onSelection: _noop,
  multi: false
}

List.propTypes = {
  onSelection: PropTypes.func,
  multi: PropTypes.bool
}

export default List
