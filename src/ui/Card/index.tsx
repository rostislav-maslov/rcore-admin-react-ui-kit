// Карточка собирается целиком из компонентов MaterialUI, кастомные элементы не нужны, этот компонент будет удалён
import React from "react";
import { Card as MuiCard, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: "425px",
  },
});

export const Card: React.FC = ({ children }) => {
  const classes = useStyles();
  return <MuiCard classes={{ root: classes.root }}>{children}</MuiCard>;
};
