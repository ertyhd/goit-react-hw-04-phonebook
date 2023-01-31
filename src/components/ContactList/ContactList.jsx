import React from 'react';
import PropTypes from 'prop-types';
import contactList from './contactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={contactList.list}>
    {contacts.map(({ id, name, number }) => (
      <li className={contactList.listItem} key={id}>
        <span className={contactList.listItemText}>{name}:</span>
        <span className={contactList.listItemText}>{number}</span>
        <button
          className={contactList.button}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
