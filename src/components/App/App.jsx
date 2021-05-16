import React from 'react';
import { connect } from 'react-redux';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

const App = ({ filteredContacts }) => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={filteredContacts} />
    </>
  );
};

const filterContacts = (contacts, filter) => {
  const lowerCasedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowerCasedFilter),
  );
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  return { filteredContacts: filterContacts(items, filter), filter };
};

export default connect(mapStateToProps)(App);
