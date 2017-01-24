import React, { PropTypes } from 'react'

import classNames from 'classnames'
import isFunction from 'lodash/isFunction'

import isNil from 'lodash/isNil'
import { stopPropagation } from '../utils/events'


const SelectOptionsList = ({ highlighted, selected, formatter, options = [], onSelect }, { cssClassNameSelector }) => {
  const optionsList = options.map((option) => {
    const { id, isHidden } = option

    if (isHidden) {
      return null
    }

    let optionText = option.text

    if (isFunction(formatter)) {
      optionText = formatter(option)
    }

    const isSelected = !isNil(selected) && selected === id
    const optionClassName = classNames(`${cssClassNameSelector}__option`, {
      [`${cssClassNameSelector}__option--selected`]: isSelected,
      [`${cssClassNameSelector}__option--highlighted`]: id === highlighted
    })

    const onOptionSelect = isSelected ? null : onSelect.bind(null, id)

    return (
      <li key={ id }
          data-id={ id }
          className={ optionClassName }
          onClick={ stopPropagation(onOptionSelect) }>
        { optionText }
      </li>
    )
  })

  return (
    <ul className={`${cssClassNameSelector}__options-list`}>
      { optionsList }
    </ul>
  )
}

SelectOptionsList.contextTypes = {
  cssClassNameSelector: PropTypes.string,
}

SelectOptionsList.propTypes = {
  highlighted: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  formatter: PropTypes.func,
  options: PropTypes.array.isRequired,
  selected: PropTypes.string,
}

export default SelectOptionsList
