# Button

This component is going to render a button

## Usage

```
import Button from 'src/components/molecules/Button';
```

## Props


| Name | Description | Type | Default |
|------|-------------|------|---------|
|   component   |   You can set a comonent on the buton, link, button,          |  String    |  'button'       |
|     kind |       Button kind     |   oneOf(Kind Array)*   |         |
|   style   |      Custom style       |   Object   |         |
|   theme   |      The theme colour       |   Object*   |         |
|   children   |      content of the Buton       |   node*   |         |

```
  <Button
    component={'button'}
    kind= {Kind.PRIMARY}
    style= {{foo: bar}}
    theme= {theme()}
  >
    <span>foo children</span>
  </Button>
```

[^Kind]:{
  'PRIMARY',
  'SECONDARY',
  'TERTIARY',
  'DETRIMENTAL',
  'POSITIVE'
}