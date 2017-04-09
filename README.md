# Address book

Address Book where you can add, edit or remove contacts with firstname, lastname, email and country

**NOTE:** I would like to do all the tests but I have no time, it is going to be an issue for this project, however, there are some tests done (Button, Input and Label) so you can see the way this application is tested.

**NOTE:** This project is done with node v7.7.1 and I use yarn v0.21.3 as a depency manager, I would recommend to install them to the correct use of this project

**NOTE:** This project has been developed with Reactjs tech, also I have used the library [create-react-app](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html) in order to have webpack, Label, etc configured.

**NOTE:** on src/themes there is a file called testTheme, this file has a custom theme but we can play with colors, typographies and even curvatures and the application will change depending on this changes, in a future I would like to make some themes so the user can change the theme on live, it is an issue of this project

## Installation
```js
yarn

// or

yarn install
```

## File Structure

- node_odules
** With all the Modules I have used on this project
- public
-- With favicon and index.html
- src
-- actions
--- actions to trigger
-- api
--- country api
-- components
--- atoms (Atoms components, they are very simple)
---- __tests__
---- Input (Component and readme)
---- Label (Component and readme)
--- molecules (Molecules, they have some complicity)
---- __tests__
---- Button (Component and readme)
---- ContactItem (Component and readme)
---- ContactList (Component and readme)
---- Form (Component and readme)
---- FormInput (Component and readme)
---- SelectForm (Component and readme)
--- organisms (Organisms components, this components use another components and are wrapped with their own containers)
---- __tests__
---- contactProfile (Component and readme)
---- contacts (Component and readme)
---- newContact (Component and readme)
-- constans
--- Some constans we need on the components
-- containers (They have the logic of the organisms components)
--- organisms
---- contactProfile
---- contacts
---- newContact
-- helpers (they are going to help us with the code in order to make it more reusable)
-- reducers (the reducers of our application)
-- router (react-router of our application)
-- storage (a localstorage is created here)
-- store (the store of the application)
-- themes (there is a theme, testtheme see the Note above)
- App.css
- index.css
- index.js
- logo.svg
- package.json
- ME!!! (README.md)
- yarn.lock




