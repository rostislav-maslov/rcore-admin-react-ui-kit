import React from "react";
import { Welcome } from "@storybook/react/demo";
import { Radio } from "../ui/Radio";
import { CheckBox } from "../ui/Checkbox";

export default {
  title: "Welcome",
  component: Welcome,
};

export const RadioInputStory = () => <Radio />;
export const CheckboxStory = () => <CheckBox />;

// export const ButtonInputStory = () => <Button/>
