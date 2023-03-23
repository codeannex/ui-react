import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Error } from "../components/Form/components/Error/Error";
import "./error.css";

export default {
  title: "Component/Form/Error",
  component: Error,
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  message: "Error",
  classes: ["error"],
};
