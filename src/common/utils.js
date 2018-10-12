import React from 'react'

function noop() {}

function isValid(child) {
  return child && React.isValidElement(child)
}

function contains(selected, value, multi = false) {
  if (multi) {
    return selected.includes(value)
  }

  return selected === value
}

function _isNil(value) {
  return (
    value === null ||
    value === undefined ||
    value === '' ||
    (Array.isArray(value) && value.length === 0 ? true : false)
  )
}

function getValue(value, multi = false) {
  if (_isNil(value)) {
    return multi ? [] : ''
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

export { noop, isValid, contains, getValue, addRemoveOrReplace }
