# Versions

## v0.1

Changes:
- src/version.md
  - IT'S ME!!! I AM NEW!!

- src/index.js
  - Indentation

- contactProfile Component
  - use of contactState as a model
  - remove updateCountry function

- newContactProfile Component
  - use of contactState as a model
  - remove updateCountry function

- contactProfile Container
  - use of contactState and contactsState
  - change name of function initFormFields to initContactState
  - remove updateCountry function

- contacts Container
  - use of contactsState

- newContact Container
  - use of contactState
  - remove updateCountry function

- New reducer contact.js with the initial state of a contact

- contacts.js reducer
  - The reducer is called now contactsReducer instead of contactReducer

- index.js reducer
  - import of contact and contacts reducers
  - initialContactState and intitialContact removed
  - contactState is now contactsState and it is managed by contactsReducer
  - actual contactState is the old 'contact' inside ...createForms and is managed by contactReducer

- store.js
  - Has been changed in order to use Redux dev tools