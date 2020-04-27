// WIP дождаться стабильной версии @material-ui/pickers
/* eslint-disable import/no-unresolved */
// @ts-nocheck
import React, { useState } from 'react'
import ruLocale from 'date-fns/locale/ru'
import enLocale from 'date-fns/locale/en-US'
import DateFnsAdapter from '@material-ui/pickers/adapter/date-fns'
import {
  DateRangePicker,
  DateRange,
  LocalizationProvider,
  Day,
  DayProps,
} from '@material-ui/pickers/'
import { makeStyles } from '@material-ui/core'
import { isSameDay, startOfWeek, endOfWeek, isWithinInterval } from 'date-fns'
import { MaterialUiPickersDate } from '@material-ui/pickers/src/typings/date'

const useStyles = makeStyles((theme) => ({
  highlight: {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  firstHighlight: {
    backgroundColor: 'red',
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  },
  endHighlight: {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  },
}))

export const _DateRangePicker = () => {
  const [selectedDate, handleDateChange] = React.useState<DateRange>([
    null,
    null,
  ])
  const classes = useStyles()

  const renderDay = (
    date: MaterialUiPickersDate,
    selectedDates: MaterialUiPickersDate[],
    DayComponentProps: DayProps,
  ) => {
    const start = startOfWeek(selectedDates[0] as Date)
    const end = endOfWeek(selectedDates[1] as Date)

    const dayIsBetween = isWithinInterval(date as Date, { start, end })
    const isFirstDay = isSameDay(date as Date, start)
    const isLastDay = isSameDay(date as Date, end)

    return (
      <Day
        {...DayComponentProps}
        disableMargin
        className={`${dayIsBetween && classes.highlight} ${
          isFirstDay && classes.firstHighlight
        } ${isLastDay && classes.endHighlight}`}
        // className
        // className={clsx({
        //   [classes.highlight]: dayIsBetween,
        //   [classes.firstHighlight]: isFirstDay,
        //   [classes.endHighlight]: isLastDay,
        // })}
      />
    )
  }

  return (
    <LocalizationProvider dateAdapter={DateFnsAdapter} locale={enLocale}>
      <DateRangePicker
        startText="Стартовая дата"
        endText="Конечная дата"
        // ren
        value={selectedDate}
        // mask="____/__/__"
        toText="По"
        onChange={(date: DateRange) => {
          handleDateChange(date)
        }}
        renderDay={renderDay}
        className={`firstHighlight`}
      ></DateRangePicker>
    </LocalizationProvider>
  )
}
