import { Button, Paper } from "@material-ui/core";
import React from "react";

const Subjects = ({ sub, handel }) => {
  return (
    <>
      <Paper
        elevation={2}
        style={{
          backgroundColor: "white",
          color: "white",
          width: "95%",
          margin: "auto",
          marginBottom: "10px",
        }}
      >
        <Button
          size="large"
          style={{ width: "100%" }}
          id={sub}
          onClick={handel}
        >
          {sub}
        </Button>
      </Paper>
    </>
  );
};

export default Subjects;
