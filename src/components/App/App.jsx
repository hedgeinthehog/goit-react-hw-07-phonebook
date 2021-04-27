import React from 'react';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localContacts) {
      this.setState({ contacts: localContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts.length !== prevState.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

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
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.updateFilter} />
        <ContactList contacts={filteredContacts} onClick={this.deleteContact} />
      </>
    );
  }
}

export default App;
