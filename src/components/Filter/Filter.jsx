import React from 'react';
import PropTypes from 'prop-types';

import filter from './filter.module.css';

const Filter = ({ handleChange }) => (
  <label className={filter.filterLabel}>
    Find contacts
    <input
      name="filter"
      onChange={handleChange}
      className={filter.filterInput}
      type="text"
    />
  </label>
);

export default Filter;

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
