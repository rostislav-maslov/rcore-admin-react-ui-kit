import React from "react";
import {
  TextField as MaterialTextField,
  makeStyles,
  TextFieldProps,
} from "@material-ui/core";
import { colors } from "../../shared/constants/colors";
import { SvgIconComponent } from "@material-ui/icons";

type Props = {
  label?: string;
  iconStart?: React.ReactElement<SvgIconComponent>;
  iconEnd?: React.ReactElement<SvgIconComponent>;
  type?: string;
  error?: boolean;
  placeholder?: string;
  helperText?: string;
  variant?: "outlined" | "text";
} & TextFieldProps;

const useStyles = makeStyles({
  root: {},
  inputLabelRoot: {
    color: "#212121",
  },
  inputLabelFocused: {
    "&:not(.Mui-error):not(.Mui-disabled)": {
      color: `${colors.info.infoDefault} !important`,
    },
  },
  inputRoot: {
    "&:hover:not(.Mui-error):not(.Mui-disabled) $notchedOutline": {
      borderColor: `${colors.info.infoDefault} !important`,
    },
  },
  inputFocused: {
    "&:not(.Mui-error):not(.Mui-disabled) $notchedOutline": {
      borderColor: `${colors.info.infoDefault} !important`,
    },
  },
  notchedOutline: {
    borderColor: colors.deselected.deseletedActive,
  },

  adornedStart: {
    "& > svg": {
      marginRight: "10px",
    },
  },
  adornedEnd: {
    "& > svg": {
      marginLeft: "10px",
    },
  },
});

export const TextField: React.FC<Props> = ({
  label,
  iconStart,
  iconEnd,
  error,
  onChange,
  type,
  placeholder,
  helperText,
  variant = "outlined",
  children,
  ...other
}) => {
  const classes = useStyles();

  return (
    <MaterialTextField
      classes={{ root: classes.root }}
      InputLabelProps={{
        classes: {
          root: classes.inputLabelRoot,
          focused: classes.inputLabelFocused,
        },
      }}
      InputProps={{
        classes: {
          root: classes.inputRoot,
          focused: classes.inputFocused,
          notchedOutline: classes.notchedOutline,
          adornedStart: classes.adornedStart,
          adornedEnd: classes.adornedEnd,
        },
        startAdornment: iconStart,
        endAdornment: iconEnd,
      }}
      onChange={onChange}
      label={label}
      error={error}
      type={type}
      variant={variant}
      {...other}
    />
  );
};
