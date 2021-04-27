import PropTypes from 'prop-types';
import ContentBox from '../styled-components/ContentBox';
import Label from '../styled-components/Label';
import Input from '../styled-components/Input';

const Filter = ({ filter, onChange }) => (
  <ContentBox>
    <Label>
      Find contacts by name
      <Input type="text" name="filter" value={filter} onChange={onChange} />
    </Label>
  </ContentBox>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
