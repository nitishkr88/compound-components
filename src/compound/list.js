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
import { getValue, addRemoveOrReplace, contains, isValid, noop } from '../common/utils'

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
    const validChildren = React.Children.toArray(children).filter(isValid)
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

List.Item = props => <StyledItem {...props} />

List.Item.displayName = 'ListItem'

List.defaultProps = {
  onSelection: noop,
  multi: false
}

List.propTypes = {
  onSelection: PropTypes.func,
  multi: PropTypes.bool
}

export default List
