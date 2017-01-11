import React, { PropTypes } from 'react'
import classNames from 'classnames'

const stopPropagation = f => e => {
    e.stopPropagation()
    f()
}

const SelectOptionsList = ({ highlighted, value, options = [], onSelect }) => {
    const optionsList = options.map(({ id, text, isHidden }, i) => {
        if (isHidden) return null

        const isSelected = typeof value !== 'undefined' && value !== null && value === id
        const optionClassName = classNames('pure-react-select-results__option', {
            'pure-react-select-results--selected': isSelected,
            'pure-react-select-results__option--highlighted': i === highlighted
        })

        const onOptionSelect = isSelected ? null : onSelect.bind(null, id)

        return (
            <li key={ i }
                className={ optionClassName }
                onClick={ stopPropagation(onOptionSelect) }>
                { text }
            </li>
        )
    })

    return (
        <ul className="pure-react-select__results-options">
            { optionsList }
        </ul>
    )
}

SelectOptionsList.propTypes = {
    highlighted: PropTypes.number,
    onSelect: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    value: PropTypes.string,
}

export default SelectOptionsList
