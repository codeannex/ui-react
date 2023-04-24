import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Error, FormProvider } from "../../../components/client/Form";
import "./error.css";

export default {
  title: "Component/Form/Error",
  component: Error,
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => {
  return (
    <FormProvider>
      <Error {...args} />
    </FormProvider>
  );
};

export const Basic = Template.bind({});

Basic.args = {
  field: "name",
};
