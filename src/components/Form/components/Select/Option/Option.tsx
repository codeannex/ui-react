import * as React from "react";

import { ELEMENT_OPTION_TYPE, Element } from "@core/Element/Element";

type OptionProps = {
  option: { value: any; label: string };
};

export const Option: React.FC<OptionProps> = ({ option }) => {
  return (
    <Element as={ELEMENT_OPTION_TYPE.OPTION} value={option.value}>
      {option.label}
    </Element>
  );
};
