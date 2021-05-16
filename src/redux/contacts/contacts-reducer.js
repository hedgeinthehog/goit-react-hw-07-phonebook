import { combineReducers } from 'redux';
import types from './contacts-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      const contactExists = state.find(
        contact => contact.name === payload.name,
      );

      if (contactExists) {
        alert(`${payload.name} is already in contacts`);
        return state;
      }
      return [payload, ...state];

    case types.DELETE:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.UPDATE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
