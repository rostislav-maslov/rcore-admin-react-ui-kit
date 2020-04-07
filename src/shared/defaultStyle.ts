import { makeStyles, fade } from "@material-ui/core";
import { primary } from "./constants/colors";

export const defaultComponentThemeBuilder = makeStyles({
  primary: {
    color: primary.success.successDefault,
    "&:hover": {
      backgroundColor: fade(primary.success.successHover, 0.08),
    },
    "&$checked": {
      color: primary.success.successDefault,
      "&:hover": {
        backgroundColor: fade(primary.success.successActive, 0.08),
      },
    },
    "&$disabled": {
      color: primary.disable.disableDefault,
      "&$checked": {
        color: fade(primary.success.successDefault, 0.6),
      },
    },
  },
  checked: {},
  disabled: {},
});
