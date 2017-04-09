# Form
Renders a Form Redux

## Usage

```
import Form from 'src/components/molecules/Form';
```

## Props


| Name | Description | Type | Default |
|------|-------------|------|---------|
| model | model of the form | string* |    |
| onSubmit | Function to trigger when submit | function* |  |
| children | Children of the form (inputs, selects) | node* |   |

```
  <Form
    model={'fooModel'}
    onSubmit={() => // something}
  >
    <someInpug />
    <someSelect />
  </Form>

```