# FormInput
Renders an ReduxInput

## Usage

```
import FormInput from 'src/components/molecules/FormInput';
```

## Props


| Name | Description | Type | Default |
|------|-------------|------|---------|
| theme | The theme colour | Object* |    |
| model | model of the Control input | string* |  |
| show | Function to trigger to show the errors | function |   |
| validators | Object of vaidators | object |   |
| errorMessages | Object of errors | errors |   |
| label | Label of the input | node* |   |

```
  <FormInput
    theme={theme()}
    model={model}
    show={() => // somethig}
    validator={{foo: bar}}
    errorMessages={{foo: bar}}
    label='foo label'
  />

```