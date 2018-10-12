import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../common/icon'
import Toggle from '../common/toggle'
import {
  StyledRow,
  StyledContent,
  StyledIcon,
  StyledItem
} from '../common/_styled-list-items'
import { noop } from '../common/utils'

class Item extends React.Component {
  getToggleType() {
    const { type } = this.props
    return type === 'multi' ? 'checkbox' : 'radio'
  }

  render() {
    const { selected, icon, children, value, type, onSelection } = this.props
    return (
      <StyledItem selected={selected} multi={type === 'multi'}>
        <StyledRow onClick={() => onSelection(value)}>
          <Toggle type={this.getToggleType()} readOnly checked={selected} />
          <StyledContent>{children}</StyledContent>
          {icon && (
            <StyledIcon>
              <Icon name={icon} />
            </StyledIcon>
          )}
        </StyledRow>
      </StyledItem>
    )
  }
}

Item.defaultProps = {
  type: 'single',
  selected: false,
  onSelection: noop
}

Item.propTypes = {
  type: PropTypes.oneOf(['multi', 'single']),
  selected: PropTypes.bool,
  icon: PropTypes.string,
  value: PropTypes.any,
  onSelection: PropTypes.func
}

export default Item
