import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filter, onChange }) => (
  <div className={styles.filter}>
    <label>
      Find contacts by name
      <input
        type="text"
        className={styles.filterInput}
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </label>
  </div>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
