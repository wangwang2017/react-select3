import React, { PropTypes } from 'react'

const SelectionClear = ({ onClearSelection }) => (
    <span className="react-select-selection__clear"
          role="presentation"
          onClick={ onClearSelection }>&times;</span>
)

SelectionClear.propTypes = {
    onClearSelection: PropTypes.func.isRequired
}

export default SelectionClear
