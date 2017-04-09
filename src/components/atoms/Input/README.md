# Input
Renders an <input> with the provided information.

## Usage

```
import Input, { paletteResolver } from 'src/components/atoms/Input';
```

## Props


| Name | Description | Type | Default |
|------|-------------|------|---------|
| type | The type of (text) input required, e.g. `text`, `password`, `number`, `date` | String |  text  |
| placeholder | The placeholder text (N.B date fields can't have placeholder text) | String |    |
| status | The status of the input group | String > Status.[^statuses]| Status.DEFAULT  |
| theme | The theme colour | Object* |    |
| meta | Typically provided by redux-form, an object that contains meta state for the input | Object* |    |
| disabled | Is the input disabled? | Boolean |    |
| readOnly | Is the input read only? | Boolean |    |
| withAddon | Styles the borders differently if paired with addons | Boolean |  False  |

```
  <Input
    theme={theme}
    placeholder="placeholder text"
    meta={field.meta} // redux-forms
  />

```

[^statuses]:{
  'DEFAULT',
  'WARNING',
  'SUCCESS',
  'ERROR'
}
