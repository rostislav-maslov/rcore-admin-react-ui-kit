import React from "react";
import {
  withStyles,
  createStyles,
  TableCell,
  makeStyles,
} from "@material-ui/core";

export const TableCelld = () => {
  const classes = useStyles();
  return <TableCell classes={{ head: classes.head }} />;
  //
};

const StyledTableCell = createStyles({
  head: {},
});

// export const

const useStyles = makeStyles({
  head: {
    fontWeight: 500,
  },
});
