# Button
A React Component that returns an actionable button element.

---
### Props (Required)
|Prop   	|Default   	|Type    |Description  	
|---	|---	|---	|---	|
|N/A   	|N/A   	|N/A     |N/A  	  |
---

### Props (Optional)
|Prop   	|Default   	|Type    |Description  	
|---	|---	|---	|---	|
|buttonClass |disabled |enum |Enables class hooks.
|classes |none |array |Adds custom classes to the element.
|classPrefix |none |string |Custom prefix added to the class hooks. ButtonClass must be enabled.
|disabled |none |boolean |Sets the disabled attribute to the button element.
|label |none |string |Provides the button text. This will override the children prop.  
|onClick |none |function |Provides a callback function on button click.
|ref |none |varies |The ref will be forwarded to the element node.
|type |'button' |string |Sets the type attribute to the button element. Available types are &nbsp; `button - submit - reset`.

---

### Usage
```
import { Button, ButtonType, ButtonStyle } from @codeannex/ui-react';

export const App = () => {
  const ref = React.useRef<HTMLButtonElement>(null);

  const handleSubmit = () => {
    ...code
  };

  return (
    <div>
      <Button
        ref={ref}
        onClick={handleSubmit}
        type={ButtonType.Submit}
        buttonStyle={ButtonStyle.Default}
        label="Submit"
      />
    </div>
  );
}
```
---

#### buttonClass
Provides a group of class hooks for button styles, (classHooks must be enabled). This feature does not apply any opinionated CSS rules, it simply sets the defined class to the elements class list.

* ButtonStyle.Danger `button__primary`
* ButtonStyle.Secondary `button__secondary`
* ButtonStyle.Success `button__success`
* ButtonStyle.Danger `button__danger`
* ButtonStyle.Warning `button__warning`
* ButtonStyle.Info `button__info`
* ButtonStyle.Light `button__light`
* ButtonStyle.Dark `button__dark`
* ButtonStyle.Link `button__link`

#### buttonStyle

```
import { Button, ButtonStyle } from from @codeannex/ui-react';

<Button
  label="Submit"
  classHooks={true}
  buttonStyle={ButtonStyle.Danger}
/>

Renders:

<button class="tks-button tks-button--danger">Submit</button>
```

---

#### children 
Support for React children prop allowing the use of the composition model.

```
<Button>
  <p>Some special submit <span>text</span></p>
</Button>

Renders:

<button>
  <p>Some special submit <span>text</span></p>
</button>
```
---

#### classes 
When class names are added to the classes prop array, those class names are added to the elements class list.

```
const customClassList = ['one', 'two', 'three'];
const label = 'Submit';

<Button
  classes={customClassList}
>
  {title}
</Button>

Renders:

<button class="one two three">Submit</button>
```
---

#### disabled 
Disables the event handler rendering the button unclickable and disabled.

---

#### label 
Provides the button with text content. This will override any children.

```
const label = 'Submit';

<Button label={label} />

Renders:

<button>Submit</button>
```
---

#### ref 
The component will forward the ref to the button element providing access to the DOM node.

---

#### type 
Specifies the HTML button type attribute.

* ButtonType.Button &nbsp; `type="button"`
* ButtonType.Reset &nbsp; `type="reset"`
* ButtonType.Submit &nbsp; `type="submit"`

---
---

### Notes:
