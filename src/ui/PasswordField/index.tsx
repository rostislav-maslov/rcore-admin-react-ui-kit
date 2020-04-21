import React, { useState } from "react";
import { TextField } from "../TextField";
import { Visibility } from "@material-ui/icons";
import { TextFieldProps } from "@material-ui/core";

type Props = {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const PasswordField: React.FC<Props> = ({
  label,
  value,
  onChange,
  ...other
}) => {
  const [showMask, setShowMask] = useState(false);
  return (
    <TextField
      type={showMask ? "text" : "password"}
      label={label}
      value={value}
      onChange={onChange}
      iconEnd={
        <Visibility
          style={{ cursor: "pointer" }}
          onClick={() => setShowMask(!showMask)}
        />
      }
      {...other}
    />
  );
};
