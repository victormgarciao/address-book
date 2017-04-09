# ContactItem
Renders a contact item displaying first name, lastname, email and country, also a couple of buttons to edit or delete the contact

## Usage

```
import ContactItem from 'src/components/molecules/ContactItem';
```

## Props


| Name | Description | Type | Default |
|------|-------------|------|---------|
| theme | The theme colour | Object* |    |
| contact | Object of the contact | Object* |  |
| deleteContact | Function to trigger when delete contact | function* |   |

```
  <ContactItem
    theme={theme()}
    contact={ContactObject}
    deleteContact={() => // somethig}
  />

```