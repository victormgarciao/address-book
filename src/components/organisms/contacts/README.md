# Contacts
Render a list of contacts, you can go to add or go to edit a contact

## Usage

```
import Contacts from 'src/components/organisms/Contacts';
```

## Props


| Name | Description | Type | Default |
|------|-------------|------|---------|
| contacts | array of the contacts | array* |  []  |
| deleteContact | Function to trigger when delete contact | function* |   |

```
  <Contacts
    contacts={contactsObject}
    deleteContact={() => // somethig}
  />

```