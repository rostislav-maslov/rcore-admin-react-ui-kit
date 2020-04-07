import React from "react";
import { Checkbox as CheckboxInput } from "@material-ui/core";
import { defaultComponentThemeBuilder } from "../../shared/defaultStyle";

type Props = {
  disabled?: boolean;
  checked?: boolean;
  required?: boolean;
  value?: any;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
};

export const CheckBox: React.FC<Props> = (props) => {
  const classes = defaultComponentThemeBuilder();
  return (
    <CheckboxInput
      {...props}
      color="primary"
      classes={{
        colorPrimary: classes.primary,
        disabled: classes.disabled,
        checked: classes.checked,
      }}
    />
  );
};
