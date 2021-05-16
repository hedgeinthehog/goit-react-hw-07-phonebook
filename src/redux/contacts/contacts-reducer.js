import { combineReducers } from 'redux';
import * as actions from './contacts-actions';
import { createReducer } from '@reduxjs/toolkit';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    const contactExists = state.find(contact => contact.name === payload.name);

    if (contactExists) {
      alert(`${payload.name} is already in contacts`);
      return state;
    }
    return [payload, ...state];
  },
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [actions.updateFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

// Redux w/o toolkit
// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       const contactExists = state.find(
//         contact => contact.name === payload.name,
//       );

//       if (contactExists) {
//         alert(`${payload.name} is already in contacts`);
//         return state;
//       }
//       return [payload, ...state];

//     case types.DELETE:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.UPDATE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };
