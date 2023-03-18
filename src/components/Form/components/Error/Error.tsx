import * as React from "react";

import { ELEMENT_OPTION_TYPE, Element } from "@core/Element/Element";

type ErrorProps = unknown;

export const Error: React.FC<ErrorProps> = () => {
  return (
    <Element as={ELEMENT_OPTION_TYPE.DIV}>
      <p>Error</p>
    </Element>
  );
};
