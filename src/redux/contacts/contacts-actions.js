import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    name,
    number,
    id: uuidv4(),
  },
}));

const deleteContact = createAction('contacts/delete');

const updateFilter = createAction('contacts/update_filter');

export { addContact, deleteContact, updateFilter };

//Redux w/o toolkit
// const actions = {
//   addContact: createAction('contacts/add', (name, number) => ({
//     payload: {
//       name,
//       number,
//       id: uuidv4(),
//     },
//   })),

//   deleteContact: createAction('contacts/delete'),

//   updateFilter: createAction('contacts/update_filter'),
// };

// export default actions;

// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     name,
//     number,
//     id: uuidv4(),
//   },
// });
// const deleteContact = id => ({
//   type: types.DELETE,
//   payload: id,
// });
// const updateFilter = value => ({
//   type: types.UPDATE_FILTER,
//   payload: value,
// });
