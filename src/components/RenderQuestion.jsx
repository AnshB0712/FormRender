import React from "react";
import {
  FormControlLabel,
  Checkbox,
  Radio,
  TextField,
  Select,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  Button,
  Grid,
} from "@mui/material";
import MultiChoiceGrid from "./MultipleChoiceGrid";

const RenderQuestion = ({ question, onChange }) => {
  const { type, text, options } = question;

  switch (type) {
    case "MCQ":
      return (
        <FormControl
          component="fieldset"
          sx={{
            display: "flex",
            direction: "column",
            border: "1px solid #dbdbd8",
            borderRadius: "8px",
            margin: "1rem 0",
            padding: "1rem 2rem",
            maxWidth: "360px",
          }}
        >
          <FormLabel>{text}</FormLabel>
          <RadioGroup>
            {options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio />}
                label={option}
                onChange={() => onChange(option)}
              />
            ))}
          </RadioGroup>
        </FormControl>
      );
    case "CheckBox":
      return (
        <FormControl
          component="fieldset"
          sx={{
            display: "flex",
            direction: "column",
            border: "1px solid #dbdbd8",
            borderRadius: "8px",
            margin: "1rem 0",
            padding: "1rem 2rem",
            maxWidth: "360px",
          }}
        >
          <FormLabel>{text}</FormLabel>
          {options.map((option, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox />}
              label={option}
              onChange={(e) => onChange(option, e.target.checked)}
            />
          ))}
        </FormControl>
      );
    case "text":
      return (
        <FormControl
          component="fieldset"
          sx={{
            display: "flex",
            direction: "column",
            border: "1px solid #dbdbd8",
            borderRadius: "8px",
            margin: "1rem 0",
            padding: "1rem 2rem",
            maxWidth: "360px",
          }}
        >
          <FormLabel>{text}</FormLabel>
          <TextField
            label={text}
            sx={{ marginTop: ".5rem", maxWidth: "200px" }}
            size="small"
            onChange={(e) => onChange(e.target.value)}
          />
        </FormControl>
      );
    case "file":
      return (
        <FormControl
          component="fieldset"
          sx={{
            display: "flex",
            direction: "column",
            border: "1px solid #dbdbd8",
            borderRadius: "8px",
            margin: "1rem 0",
            padding: "1rem 2rem",
            maxWidth: "360px",
          }}
        >
          <FormLabel>{text}</FormLabel>
          <Button
            sx={{
              position: "relative",
              maxWidth: "100px",
              marginTop: ".5rem",
            }}
            size="small"
            variant="contained"
          >
            Add File
            <input
              type="file"
              style={{ position: "absolute", inset: "0", opacity: "0" }}
              onChange={(e) => onChange(e.target.files)}
            />
          </Button>
        </FormControl>
      );
    case "dropdown":
      return (
        <FormControl
          sx={{
            display: "flex",
            direction: "column",
            border: "1px solid #dbdbd8",
            borderRadius: "8px",
            margin: "1rem 0",
            padding: "1rem 2rem",
            maxWidth: "360px",
          }}
        >
          <FormLabel>{text}</FormLabel>
          <Select
            sx={{ maxWidth: "200px", marginTop: ".5rem" }}
            size="small"
            defaultValue={"USA"}
            onChange={(e) => onChange(e.target.value)}
          >
            {options.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    case "MCQGrid":
      return (
        <>
          <Grid
            item
            xs={12}
            sx={{
              border: "1px solid #dbdbd8",
              borderRadius: "8px",
              margin: "1rem 0",
              padding: "1rem 2rem",
              maxWidth: "360px",
            }}
          >
            <FormLabel>{text}</FormLabel>
            <MultiChoiceGrid useCheckbox={false} onChange={onChange} />
          </Grid>
        </>
      );
    case "CheckboxGrid":
      return (
        <>
          <Grid
            item
            xs={12}
            sx={{
              border: "1px solid #dbdbd8",
              borderRadius: "8px",
              margin: "1rem 0",
              padding: "1rem 2rem",
              maxWidth: "360px",
            }}
          >
            <FormLabel>{text}</FormLabel>
            <MultiChoiceGrid useCheckbox={true} onChange={onChange} />
          </Grid>
        </>
      );
    default:
      return null;
  }
};

export default RenderQuestion;
