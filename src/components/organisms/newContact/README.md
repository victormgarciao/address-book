# NewContact
Render an emty form in order to create a new contact.

## Usage

```
import NewContact from 'src/components/organisms/NewContact';
```

## Props


| Name | Description | Type | Default |
|------|-------------|------|---------|
| addContact | Function to trigger when add a contact | function* |   |
| updateCountry | Function to trigger when update country | function* |   |

```
  <NewContact
    contactId={'contactId'}
    updateCountry={() => // somethig}
  />

```