import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

import style from './app.module.css';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem('my-contacts'));
    return contacts ? contacts : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('my-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const isDublicate = (name, number) => {
    const normName = name.toLowerCase();
    const normNumber = number.toLowerCase();
    const findContact = contacts.find(({ name, number }) => {
      return (
        name.toLowerCase() === normName && number.toLowerCase() === normNumber
      );
    });
    return Boolean(findContact);
  };

  const addContact = ({ name, number }) => {
    if (isDublicate(name, number)) {
      Notiflix.Notify.failure(
        `The contact ${name} whith ${number} phone is already exist`
      );
      return false;
    }
    setContacts(prevContacts => {
      const newContact = { id: nanoid(), name, number };
      return [newContact, ...prevContacts];
    });
    return true;
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const hendleFilter = ({ target }) => {
    setFilter(target.value);
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizateFilter = filter.toLowerCase();
    const result = contacts.filter(({ name, number }) => {
      return (
        name.toLowerCase().includes(normalizateFilter) ||
        number.toLowerCase().includes(normalizateFilter)
      );
    });
    return result;
  };

  const filteredContacts = getFilteredContacts();
  const isContacts = Boolean(filteredContacts.length);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <div className={style.block}>
        <Filter handleChange={hendleFilter} />
        {isContacts && (
          <ContactList
            deleteContact={deleteContact}
            contacts={filteredContacts}
          />
        )}
        {!isContacts && <p>No contacts in list</p>}
      </div>
    </>
  );
};

export default App;

App.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
