# ElementType
A React Component that returns an HTML element based on a prop argument. ElementType is a base component and is not used directly.

## Props (Required)
The only requirement for use is to pass a string representation of the expected generated element.

```
const props = {
  ...rest,
  from: htmlElement // might be 'div', 'article', etc.
};

return (
  <ElementType { ...props } ref={forwardedRef}>
    {children}
  </ElementType>
);

```
