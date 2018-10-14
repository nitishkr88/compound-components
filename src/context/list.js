import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../common/icon'
import Toggle from '../common/toggle'
import {
  StyledLabel,
  StyledRow,
  StyledList,
  StyledContent,
  StyledIcon,
  StyledItem
} from '../common/_styled-list-items'
import { getValue, addRemoveOrReplace, contains, noop } from '../common/utils'

const { Provider, Consumer } = React.createContext()

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
    const selected = addRemoveOrReplace(this.state.selected, value, this.props.multi)
    this.setState({ selected }, () => this.props.onSelection(this.state.selected))
  }

  isSelected = value => {
    return contains(this.state.selected, value, this.props.multi)
  }

  getToggleType() {
    return this.props.multi ? 'checkbox' : 'radio'
  }

  render() {
    const { label, children } = this.props
    return (
      <Provider
        value={{
          multi: this.props.multi,
          isSelected: this.isSelected,
          onSelection: this.onSelection,
          type: this.getToggleType()
        }}
      >
        <StyledList>
          {label && (
            <StyledLabel>
              <h3>{label}</h3>
            </StyledLabel>
          )}
          {children}
        </StyledList>
      </Provider>
    )
  }
}

List.Item = props => (
  <Consumer>
    {({ multi, isSelected, onSelection, type }) => (
      <StyledItem {...props} multi={multi} selected={isSelected(props.value)}>
        <StyledRow onClick={() => onSelection(props.value)}>
          <Toggle type={type} readOnly checked={isSelected(props.value)} />
          <StyledContent>{props.children}</StyledContent>
          {props.icon && (
            <StyledIcon>
              <Icon name={props.icon} />
            </StyledIcon>
          )}
        </StyledRow>
      </StyledItem>
    )}
  </Consumer>
)

List.defaultProps = {
  onSelection: noop,
  multi: false
}

List.propTypes = {
  onSelection: PropTypes.func,
  multi: PropTypes.bool
}

export default List
