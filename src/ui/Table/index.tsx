import React from "react";
import {
  TableContainer,
  Paper,
  Table as MaterialTable,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  makeStyles,
  Grid,
  Box,
} from "@material-ui/core";
import { colors } from "../../shared/constants/colors";
import { Pagination } from "@material-ui/lab";
import { TextField } from "../TextField";
import { Search } from "@material-ui/icons";
import { TablePagination } from "./TablePagination";
import { usePagination } from "../../shared/hooks/usePagination";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  tableContainer: {
    border: `1px solid ${colors.deselected.deselectedDefault}`,
    borderRadius: "4px",
  },
  tableCell: {},
  rootPagination: {
    "& > ul li > button": {
      border: `1px solid ${colors.deselected.deselectedDefault}`,
      "&:hover, &.Mui-selected, &.Mui-selected:hover": {
        color: "#fff",
        backgroundColor: `${colors.info.infoDefault}`,
      },
    },
  },
});

const Header = () => {
  return (
    <Grid
      alignItems="flex-start"
      spacing={3}
      justify="flex-end"
      direction="row"
      container
    >
      <Grid item xs={6}>
        1
      </Grid>
      <Grid item xs={6}>
        <TextField
          placeholder="Поиск"
          iconStart={<Search color="disabled" />}
          type="search"
          onChange={() => {}}
        />
      </Grid>
    </Grid>
  );
};

export const Table = () => {
  const classes = useStyles();
  return (
    <Paper>
      <Header></Header>
      <TableContainer classes={{ root: classes.tableContainer }}>
        <MaterialTable>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MaterialTable>
      </TableContainer>
      <Pagination
        shape="rounded"
        variant="outlined"
        hidePrevButton
        hideNextButton
        count={10}
        classes={{ root: classes.rootPagination }}
      />
    </Paper>
  );
};
