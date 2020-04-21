import React, { useState } from "react";
import {
  TimePicker as MuiTimePicker,
  MuiPickersUtilsProvider,
  TimePickerProps,
} from "@material-ui/pickers";
import ruLocale from "date-fns/locale/ru";
import DateFnsUtils from "@date-io/date-fns";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { colors } from "../../shared/constants/colors";

type Props = {
  value: Date;
  onAccept?: (date: Date | null) => void;
} & Omit<TimePickerProps, "value" | "onAccept" | "onChange">;

export const TimePicker: React.FC<Props> = ({
  value = new Date(),
  onAccept,
  ...other
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(value);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
      <MuiThemeProvider theme={theme}>
        <MuiTimePicker
          autoOk
          value={selectedDate}
          onChange={handleDateChange}
          onClose={() => onAccept && onAccept(selectedDate)} // see https://github.com/mui-org/material-ui-pickers/issues/1049
          variant="inline"
          ampm={false}
          inputVariant="outlined"
          {...other}
        />
      </MuiThemeProvider>
    </MuiPickersUtilsProvider>
  );
};

const theme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        background: "#fff !important",
        justifyContent: "flex-start",
        "& h2": {
          color: "#212121",
          fontSize: "16px",
          fontWeight: 500,
          "&.MuiPickersToolbarText-toolbarBtnSelected": {
            color: colors.info.infoDefault,
          },
        },
      },
    },
    MuiPickersClockPointer: {
      thumb: {
        borderColor: colors.info.infoDefault,
      },
      noPoint: {
        backgroundColor: colors.info.infoDefault,
        borderColor: colors.info.infoDefault,
      },
    },
    MuiPickersTimePickerToolbar: {
      separator: {
        color: "#000",
      },
    },
  },
});
