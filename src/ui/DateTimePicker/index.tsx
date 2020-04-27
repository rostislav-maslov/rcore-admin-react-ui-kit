import React, { useState } from 'react'
import {
  DateTimePicker as MuiDateTimePicker,
  DateTimePickerProps,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import ruLocale from 'date-fns/locale/ru'
import DateFnsUtils from '@date-io/date-fns'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { colors } from '../../shared/constants/colors'

type Props = {
  value: Date
  onAccept?: (date: Date | null) => void
} & Omit<DateTimePickerProps, 'value' | 'onAccept' | 'onChange'>

export const DateTimePicker: React.FC<Props> = ({
  value = new Date(),
  onAccept,
  ...other
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(value)
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
      <MuiThemeProvider theme={theme}>
        <MuiDateTimePicker
          value={selectedDate}
          autoOk
          ampm={false}
          onChange={setSelectedDate}
          onClose={() => onAccept && onAccept(selectedDate)}
          variant="inline"
          inputVariant="outlined"
          hideTabs
          {...other}
        />
      </MuiThemeProvider>
    </MuiPickersUtilsProvider>
  )
}

const theme = createMuiTheme({
  overrides: {
    MuiPickersCalendarHeader: {
      dayLabel: {
        color: colors.deselected.deselectedDefault,
        fontWeight: 500,
        fontSize: '16px',
      },
      switchHeader: {
        '& p': {
          color: '#000',
          fontWeight: 500,
        },
      },
    },
    MuiPickersDay: {
      day: {
        color: colors.black,
        fontWeight: 500,
        '&:hover': {
          border: `1px solid ${colors.info.infoDefault}`,
          color: colors.info.infoDefault,
          borderRadius: '50%',
          backgroundColor: 'transparent',
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
      dialogAction: {},
    },
    MuiPickersToolbar: {},
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
        color: '#000',
      },
    },
    MuiInputLabel: {
      root: {
        color: '#212121',
      },
      focused: {
        '&:not(.Mui-error):not(.Mui-disabled)': {
          color: `${colors.info.infoDefault} !important`,
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        '&:hover:not(.Mui-error):not(.Mui-disabled) $notchedOutline': {
          borderColor: `${colors.info.infoDefault} !important`,
        },
      },
      focused: {
        '&:not(.Mui-error):not(.Mui-disabled) $notchedOutline': {
          borderColor: `${colors.info.infoDefault} !important`,
        },
      },
      notchedOutline: {
        borderColor: colors.deselected.deseletedActive,
      },

      adornedStart: {
        '& > svg': {
          marginRight: '10px',
        },
      },
      adornedEnd: {
        '& > svg': {
          marginLeft: '10px',
        },
      },
    },
  },
})
