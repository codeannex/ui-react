import * as React from "react";

import { ELEMENT_OPTION_TYPE, Element } from "@core/Element/Element";

type SelectProps = {
  placeholder?: string;
};

export const Select: React.FC<SelectProps> = React.forwardRef(
  ({ placeholder }, ref?: React.Ref<HTMLSelectElement>) => {
    return (
      <Element as={ELEMENT_OPTION_TYPE.DIV}>
        <Element as={ELEMENT_OPTION_TYPE.SELECT} ref={ref}>
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </Element>
      </Element>
    );
  }
);
