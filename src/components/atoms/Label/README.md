# Label
Renders a label, and an optional text

## Usage

```
import Label from 'src/components/atoms/Label';
```

## Props


| Name | Description | Type | Default |
|------|-------------|------|---------|
| children | Text of the label | node* |  |
| required | it is going to tell us if this is required or not | bool | true  |
| theme | The theme colour | Object* |    |

```
  <Label
    theme={theme()}
    required= {false}
  >
    Foo text
  </Label>

```