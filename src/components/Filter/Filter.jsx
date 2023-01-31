import React from 'react';
import PropTypes from 'prop-types';
import filter from './filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={filter.filterLabel}>
    Find contacts by name
    <input
      className={filter.filterInput}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
