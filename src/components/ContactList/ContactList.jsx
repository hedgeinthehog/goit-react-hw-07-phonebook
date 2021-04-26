import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onClick }) => {
  const handleDelBtn = event => {
    const { name } = event.target;
    onClick(name);
  };

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.listItem} key={id}>
          {name} {number}
          <button
            type="button"
            className={styles.btn}
            name={id}
            onClick={handleDelBtn}
          >
            Delete
          </button>
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
};

export default ContactList;
