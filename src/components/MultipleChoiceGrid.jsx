import React, { useEffect, useState } from "react";
import {
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const MultiChoiceGrid = ({ useCheckbox = false, onChange }) => {
  const [selectedValues, setSelectedValues] = useState({});

  useEffect(() => {
    onChange(selectedValues);
  }, [selectedValues]);

  const handleSelectChange = (row, column, value) => {
    setSelectedValues((prevState) => ({
      ...prevState,
      [`${row}-${column}`]: value,
    }));
  };

  const renderSelectControl = (row, column) => {
    if (useCheckbox) {
      return (
        <Checkbox
          checked={selectedValues[`${row}-${column}`] === "CB"}
          onChange={(event) =>
            handleSelectChange(row, column, event.target.checked ? "CB" : null)
          }
        />
      );
    } else {
      return (
        <RadioGroup
          value={selectedValues[`${row}-${column}`] || ""}
          onChange={(event) =>
            handleSelectChange(row, column, event.target.value)
          }
        >
          <FormControlLabel value="RB" control={<Radio />} />
        </RadioGroup>
      );
    }
  };

  return (
    <TableContainer sx={{ maxWidth: "300px", margin: "1rem 0" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>C1</TableCell>
            <TableCell>C2</TableCell>
            <TableCell>C3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>R1</TableCell>
            <TableCell>{renderSelectControl("R1", "C1")}</TableCell>
            <TableCell>{renderSelectControl("R1", "C2")}</TableCell>
            <TableCell>{renderSelectControl("R1", "C3")}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>R2</TableCell>
            <TableCell>{renderSelectControl("R2", "C1")}</TableCell>
            <TableCell>{renderSelectControl("R2", "C2")}</TableCell>
            <TableCell>{renderSelectControl("R2", "C3")}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>R3</TableCell>
            <TableCell>{renderSelectControl("R3", "C1")}</TableCell>
            <TableCell>{renderSelectControl("R3", "C2")}</TableCell>
            <TableCell>{renderSelectControl("R3", "C3")}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MultiChoiceGrid;
