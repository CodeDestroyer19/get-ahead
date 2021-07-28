import React from "react";
import { emphasize, withStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Chip from "@material-ui/core/Chip";

const StyledBreadcrumb = withStyles(theme => ({
  root: {
    backgroundColor: '#b71c1c',
    height: theme.spacing(4),
    color: 'black',
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.grey[300],
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip);

export default function CustomizedBreadcrumbs({ sub, handel }) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <StyledBreadcrumb component="button" label={sub} onClick={handel} />
    </Breadcrumbs>
  );
}
