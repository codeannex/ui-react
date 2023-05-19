import * as React from "react";

import { ELEMENT_OPTION_TYPE, Element } from "@core/server/Element/Element";

import { SelectOption } from "../../types";

export type OptionProps = {
  /**
   * Array of options used to build the `select` options.
   */
  option: SelectOption;
};

export const Option: React.FC<OptionProps> = ({ option }) => {
  return (
    <Element as={ELEMENT_OPTION_TYPE.OPTION} value={option.value}>
      {option.label}
    </Element>
  );
};
