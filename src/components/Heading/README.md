# Heading
A React Component that returns a heading (h) element.

```$xslt
h1 h2 h3 h4 h5 h6
```
---

### Props (Required)
|Prop   	|Default   	|Type    |Description  	
|---	|---	|---	|---	|
|el |none |enum |Specifies the heading h1 thru h6,
---

### Props (Optional)
|Prop   	|Default   	|Type    |Description  	
|---	|---	|---	|---	|	
|classes |none |array |Adds custom classes to the element.
|classPrefix |none |string |Custom prefix added to the class hooks. HeadingClass must be enabled.
|headingClass |false |boolean |Enables class hooks.
|label |none |string |Specifies the heading text.

---

### Usage 1
```
import { Heading, HeadingType } from @codeannex/ui-react';

export const Page = ({title, classList}) => {
  return (
    <Heading
      el={HeadingType.H2}
      label={title}
    />
  );
};
```
---

### Usage 2
```
import { Heading, HeadingType } from @codeannex/ui-react';

export const Page = ({title, classList}) => {
  return (
    <Heading el={HeadingType.H2}>
      {title}
    </Heading>
  );
};
```
---

### Usage 3 children
Support for React children prop allowing the use of the composition model.

```
import { Heading, HeadingType } from @codeannex/ui-react';

export const Page = ({title, classList}) => {
  return (
    <Heading el={HeadingType.H2}>
      <span>Some special submit <span>{text}</span></span>
    </Heading>
  );
};

```
---

#### classHooks 
If classHooks is enabled the component adds two default class hooks. 

```$xslt
<h2 class="tks-heading tks-h2">Some title text</h2>
```

---

#### classes 
When class names are added to the classes prop array, those class names are added to the elements class list.

```$xslt
const customClassList = ['one', 'two', 'three'];

<Heading
  el={HeadingType.H2}
  classes={customClassList}
>
  {title}
</Heading>

Renders:

<h2 class="one two three">Some title text</h2>
```

---

#### el 
El prop takes in a string value of type ***HeadingType***. HeadingType ranges from ***HeadingType.H1 thru HeadingType.H6***.

```$xslt
import { Heading, HeadingType } from @codeannex/ui-react';
```

#### label 
Provides the heading with text content. This will override any children.

```
const label = 'Promo';

<h2 label={label} />

Renders:

<h2>Promo</h2>
```

---


#### Ref 
The component allows for a ref to be added and will be forwarded to the heading element.

```$xslt
<Heading
  el={HeadingType.H2}
  ref={ref}
>
  {title}
</Heading>
```
