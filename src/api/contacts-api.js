// import axios from 'axios';
// import store from '../store/store';
// import { 
//     getContactsSuccess,
//     deleteContactSuccess,
//     contactProfileSuccess
// } from '../actions/contacts';

// export const getContacts = () => {
//     // return axios.get('http://localhost:3000/contacts')
//         // .then(response => {

//             console.log('eeeeeeeeee', store.getState('contactState'));
//             // store.dispatch(getContactsSuccess(
//                 store.getState('contactState')
//             // ));
//             // return response;
//         // })
// }

// export const searchContacts = (query = '') => {
//     return axios.get(`http://localhost:3000/contacts?q=${query}`)
//         .then(response => {
//             store.dispatch(getContactsSuccess(response.data));
//             return response;
//         })
// }

// export const deleteContact = (contactId) => {
//     return axios.delete(`http://localhost:3000/contacts/${contactId}`)
//         .then(response => {
//             store.dispatch(deleteContactSuccess(response.data));
//             return response;
//         })
// }

// export const getContactProfile = (contactId) => {
//     let contactProfile = {};

//     return axios.get(`http://localhost:3001/contacts/${contactId}`)
//         .then(response => {

//             let contact = response.data;
//             contactProfile.firstname = contact.firstname;
//             contactProfile.lastname = contact.lastname;
//             contactProfile.email = contact.email;
//             contactProfile.country = contact.country;

//             store.dispatch(contactProfileSuccess(contactProfile));
//         })
// }