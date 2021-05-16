import { v4 as uuidv4 } from 'uuid';
import types from './contacts-types';

const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    name,
    number,
    id: uuidv4(),
  },
});

const deleteContact = id => ({
  type: types.DELETE,
  payload: id,
});

const updateFilter = value => ({
  type: types.UPDATE_FILTER,
  payload: value,
});

export { addContact, deleteContact, updateFilter };
