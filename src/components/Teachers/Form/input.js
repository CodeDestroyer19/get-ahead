import { TextField, Grid, Typography } from "@material-ui/core";
import React from "react";

const Input = ({
  half,
  name,
  onChange,
  label,
  autoFocus,
  type,
  variant,
  style,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <Typography>{name}</Typography>

      <TextField
        color="secondary"
        name={name}
        onChange={onChange}
        variant={variant}
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        style={style}
      />
    </Grid>
  );
};

export default Input;
