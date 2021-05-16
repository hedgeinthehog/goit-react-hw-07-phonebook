import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../styled-components/Button';
import * as actions from '../../redux/contacts/contacts-actions';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name} {number}
          <Button
            type="button"
            name={id}
            onClick={deleteContact}
            size="small"
            bg="dark"
            position="right"
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  deleteContact: e => dispatch(actions.deleteContact(e.target.name)),
});

export default connect(null, mapDispatchToProps)(ContactList);
