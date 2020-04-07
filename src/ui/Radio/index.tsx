import { Radio as RadioInput } from "@material-ui/core";
import React from "react";
import { defaultComponentThemeBuilder } from "../../shared/defaultStyle";

type Props = {
  disabled?: boolean;
  checked?: boolean;
  required?: boolean;
  value?: any;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
};

export const Radio: React.FC<Props> = (props) => {
  const classes = defaultComponentThemeBuilder();
  return (
    <RadioInput
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
