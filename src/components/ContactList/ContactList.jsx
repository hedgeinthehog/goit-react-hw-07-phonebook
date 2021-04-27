import PropTypes from 'prop-types';
import Button from '../styled-components/Button';

const ContactList = ({ contacts, onClick }) => {
  const handleDelBtn = event => {
    const { name } = event.target;
    onClick(name);
  };

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name} {number}
          <Button
            type="button"
            name={id}
            onClick={handleDelBtn}
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
  onClick: PropTypes.func.isRequired,
};

export default ContactList;
