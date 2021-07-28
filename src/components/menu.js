import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Book, Category, Home, QuestionAnswer } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/Styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Divider from "@material-ui/core/Divider";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    minWidth: 200,
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
));

const themeM = makeStyles({
  menu: {
    paddingTop: 0,
    margin: "auto",
  },
});

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: "black",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: "#f50057",
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const themeStyle = themeM();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { lable: "Home", url: "http://localhost:3000/", icon: <Home /> },
    { lable: "Library", url: "http://localhost:3000/Library", icon: <Book /> },
    {
      lable: "V-Class",
      url: "http://localhost:3000/V-Class",
      icon: <Category />,
    },
    {
      lable: "About",
      url: "http://localhost:3000/About",
      icon: <QuestionAnswer />,
    },
  ];

  return (
    <div>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="inherit"
        onClick={handleClick}
      >
        <MenuIcon style={{ width: 24, height: 24 }} />
      </IconButton>
      <StyledMenu
        className={themeStyle.menu}
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map(m => (
          <a
            href={m.url}
            style={{ textDecorationLine: "none", textDecorationColor: "black" }}
          >
            <StyledMenuItem>
              <ListItemIcon>
                {m.icon}
                <Divider />
              </ListItemIcon>
              <ListItemText primary={m.lable}></ListItemText>
            </StyledMenuItem>
          </a>
        ))}
      </StyledMenu>
    </div>
  );
}
