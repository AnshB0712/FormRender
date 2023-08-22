import React, { useState } from "react";
import { Stack, Button, Typography } from "@mui/material";
import { RENDER_TREE } from "../constant";
import RenderQuestion from "./RenderQuestion";

const FormComponent = () => {
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (questionIndex, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: answer,
    }));
  };

  const handleSubmit = () => {
    console.log(answers);
  };

  return (
    <Stack
      component={"form"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        border: "1px solid #dbdbd8",
        borderRadius: "1rem",
        maxWidth: "550px",
        margin: "0 auto",
      }}
    >
      <Typography my={"1rem"} variant="h5">
        Assignment Form
      </Typography>
      {RENDER_TREE.map((question, index) => (
        <RenderQuestion
          key={index}
          question={question}
          onChange={(answer) => handleAnswerChange(index + 1, answer)}
        />
      ))}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ marginBottom: "1rem" }}
      >
        Submit
      </Button>
    </Stack>
  );
};

export default FormComponent;
