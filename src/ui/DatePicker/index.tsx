import React, { useState } from "react";
import {
  MuiPickersUtilsProvider,
  //   DatePicker as MaterialDataPicker,
  KeyboardDatePicker,
  Day,
} from "@material-ui/pickers";
import ruLocale from "date-fns/locale/ru";
import DateFnsUtils from "@date-io/date-fns";
import {
  makeStyles,
  IconButton,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import {
  startOfWeek,
  endOfWeek,
  isWithinInterval,
  isSameDay,
  format as _format,
} from "date-fns";
import { colors } from "../../shared/constants/colors";

type Props = {
  minDate?: Date;
  maxDate?: Date;
  invalidDateMessage?: string;
  minDateMessage?: string;
  maxDateMessage?: string;
  format?: string;
  variant?: "dialog" | "inline" | "static";
  disabled?: boolean;
};

const theme = createMuiTheme({
  overrides: {
    MuiPickersCalendarHeader: {
      dayLabel: {
        color: colors.deselected.deselectedDefault,
        fontWeight: 500,
        fontSize: "16px",
      },
      switchHeader: {
        "& p": {
          color: "#000",
          fontWeight: 500,
        },
      },
    },
    MuiPickersDay: {
      day: {
        color: colors.black,
        fontWeight: 500,
        "&:hover": {
          border: `1px solid ${colors.info.infoDefault}`,
          color: colors.info.infoDefault,
          borderRadius: "50%",
          backgroundColor: "transparent",
        },
      },
      daySelected: {
        backgroundColor: `${colors.info.infoDefault}`,
      },
      dayDisabled: {
        color: colors.deselected.deselectedDefault,
      },
      current: {
        //   color: lightBlue["900"],
      },
    },
    MuiPickersModal: {
      dialogAction: {
        // color: lightBlue["400"],
      },
    },
  },
});

export const DatePicker: React.FC<Props> = ({
  minDate,
  maxDate,
  invalidDateMessage = "Неккоректная дата",
  minDateMessage = "Дата не должна быть раньше минимальной даты",
  maxDateMessage = "Дата не должна быть позже максимальной даты",
  format = "MM/dd/yyyy",
  variant = "inline",
  disabled,
}) => {
  const [selectedDate, handleDateChange] = useState<Date | null>(new Date());
  //   const classes = useStyles();

  //   const renderWeekDay = (date: Date | null, selectedDate: Date | null) => {
  //     const isSelectedDate = isSameDay(date!, selectedDate!);

  //     const wrapperClassName = clsx(classes.dayWrapper, {
  //       [classes.highlightDayWrapper]: isSelectedDate,
  //     });

  //     const dayClassName = clsx(classes.day, {
  //       [classes.highlightDay]: isSelectedDate,
  //     });

  //     return (
  //       <div className={wrapperClassName}>
  //         <IconButton className={dayClassName}>
  //           <span> {_format(date!, "d")} </span>
  //         </IconButton>
  //       </div>
  //     );
  //   };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
      <ThemeProvider theme={theme}>
        <KeyboardDatePicker
          clearable
          autoOk
          value={selectedDate}
          placeholder="01/01/2020"
          invalidDateMessage={invalidDateMessage}
          minDateMessage={minDateMessage}
          maxDateMessage={maxDateMessage}
          onChange={(date) => handleDateChange(date)}
          //   renderDay={renderWeekDay}
          minDate={new Date()}
          format={format}
          inputVariant="outlined"
          clearLabel="Очистить"
          cancelLabel="Отменить"
          okLabel="ОК"
          variant={variant}
          disableToolbar
          disabled={disabled}
        />
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
};

// const useStyles = makeStyles((theme) => ({
//   dayWrapper: {
//     position: "relative",
//   },
//   day: {
//     width: 36,
//     height: 36,
//     fontSize: "16px",
//     fontWeight: 500,
//     color: "#212121",
//     "&:hover": {
//       border: `1px solid ${colors.info.infoDefault}`,
//       color: colors.info.infoDefault,
//       borderRadius: "50%",
//       backgroundColor: "transparent",
//     },
//   },
//   highlightDayWrapper: {
//     backgroundColor: `${colors.info.infoDefault}`,
//     borderRadius: "50%",
//   },
//   highlightDay: {
//     color: "#fff !important",
//   },
// }));
