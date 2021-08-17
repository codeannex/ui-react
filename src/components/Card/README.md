# Card
A React Component that returns an actionable card component.

---
### Props (Required)
|Prop   	|Default   	|Type    |Description  	
|---	|---	|---	|---	|
|children |N/A |N/A  |N/A |
---

### Props (Optional)
|Prop   	|Default   	|Type    |Description  	
|---	|---	|---	|---	|
|classHooks |disabled |boolean |nables class hooks.
|classes |none |array |Adds custom classes to the element.
|disabled |false |boolean |Specifies if the component is disabled.
|focusable |true |boolean |Enables tab focus.
|el  |div |string |Specifies the node type.
|onClick |none |func |Callback for card onClick.

---

### Usage
```$xslt
import { Card, CardNodeType } from @codeannex/ui-react';

export const Page = ({title, classList}) => {
  const [classes, setClasses] = React.useState([...classList]);

  return (
    <Card
      el={CardNodeType.ARTICLE}
      classes={classes}
    >
      {title}
    </Card>
  );
};
```
---