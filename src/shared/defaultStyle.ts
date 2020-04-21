import { makeStyles, fade } from "@material-ui/core";
import { colors } from "./constants/colors";

export const defaultComponentThemeBuilder = makeStyles({
  primary: {
    color: colors.deselected.deselectedDefault,
    "&:hover": {
      backgroundColor: fade(colors.success.successHover, 0.08),
    },
    "&$checked": {
      color: colors.success.successDefault,
      "&:hover": {
        backgroundColor: fade(colors.success.successActive, 0.08),
      },
    },
    "&$disabled": {
      color: colors.disable.disableDefault,
      "&$checked": {
        color: fade(colors.success.successDefault, 0.6),
      },
    },
  },
  checked: {},
  disabled: {},
  // contained: {
  //   backgroundColor: colors.success.successDefault,
  // },
});
