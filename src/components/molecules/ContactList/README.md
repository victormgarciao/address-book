# ContactList
Renders a  a list of contacts

## Usage

```
import ContactList from 'src/components/molecules/ContactList';
```

## Props


| Name | Description | Type | Default |
|------|-------------|------|---------|
| theme | The theme colour | Object* |    |
| contacts | Array of contacts | Array* |  |
| deleteContact | Function to trigger when delete contact | function* |   |

```
  <ContactList
    theme={theme()}
    contacts={ContactArray}
    deleteContact={() => // somethig}
  />

```