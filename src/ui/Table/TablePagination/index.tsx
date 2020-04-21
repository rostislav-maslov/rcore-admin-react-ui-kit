import React from "react";
import { styled } from "@material-ui/core";
import { colors } from "../../../shared/constants/colors";

export const TablePagination = () => {
  return (
    <Container>
      <Item>1</Item>
      <Item>2</Item>

      <Item>1</Item>
      <Item>2</Item>

      <Item>1</Item>
      <Item>2</Item>
    </Container>
  );
};

const Container = styled("div")({
  display: "flex",
  padding: "2.5px",
});

const Item = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexBasis: "40px",
  width: "40px",
  height: "40px",
  margin: "2.5px",
  border: `1px solid ${colors.deselected.deselectedDefault}`,
  borderRadius: "4px",
});
