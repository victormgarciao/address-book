# ContactProfile
Render a form with the data of the contact, you can update the data from there

## Usage

```
import ContactProfile from 'src/components/organisms/ContactProfile';
```

## Props


| Name | Description | Type | Default |
|------|-------------|------|---------|
| contactId | id of the contact | string* |    |
| updateContact | Function to trigger when update contact | function* |   |
| updateCountry | Function to trigger when update country | function* |   |

```
  <ContactProfile
    contactId={'contactId'}
    updateContact={() => // somethig}
    updateCountry={() => // somethig}
  />

```