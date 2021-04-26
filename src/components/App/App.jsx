import React from 'react';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Minion da Bob', number: '459-12-56' },
      { id: 'id-6', name: 'Bobo', number: '443-89-12' },
    ],
    filter: '',
  };

  updateFilter = event => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  addNewContact = newContact => {
    const { contacts } = this.state;
    const isInContacts = contacts.find(
      contact => contact.name === newContact.name,
    );

    isInContacts
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [newContact, ...prevState.contacts],
        }));
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const contactId = contacts.findIndex(contact => contact.id === id);

    this.setState(prevState => {
      const updatedContacts = [...prevState.contacts];
      updatedContacts.splice(contactId, 1);

      return {
        contacts: updatedContacts,
      };
    });
  };

  filterContacts = () => {
    const { contacts } = this.state;
    const filter = this.state.filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter),
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <>
        <h1 className={styles.title}>phonebook</h1>
        <ContactForm onSubmit={this.addNewContact} />
        <h2 className={styles.title}>contacts</h2>
        <Filter filter={filter} onChange={this.updateFilter} />
        <ContactList contacts={filteredContacts} onClick={this.deleteContact} />
      </>
    );
  }
}

export default App;
