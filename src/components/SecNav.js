import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Zoom from "@material-ui/core/Zoom";
import PropTypes from "prop-types";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Avatar from "@material-ui/core/Avatar";
import NavComp from "./navComp";
import { Link } from "react-router-dom";
import {
  Home,
  QuestionAnswer,
  VideoLibrary,
  BookTwoTone,
  BarChart,
  LanguageTwoTone,
  LibraryBooksOutlined,
  ExitToApp,
  Dashboard,
  Notifications,
  VideoCall,
  Settings,
} from "@material-ui/icons";
import { Box, Grid, Typography } from "@material-ui/core";
import MenuPopupState from "./Pop";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    color: "red",
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  rootUp: {
    position: "fixed",
    bottom: theme.spacing(6),
    right: theme.spacing(1),
  },
  topNav: {
    marginLeft: "5%",
    marginRight: "10%",
    justifyContent: "space-between",
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.rootUp}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const PersistentDrawerLeft = props => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const user = JSON.parse(localStorage.getItem("profile"));
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const mainmenu = [
    { lable: "Home", url: "http://localhost:3000/Home", icon: <Home /> },
    {
      lable: "Library",
      url: "http://localhost:3000/Library",
      icon: <BookTwoTone />,
    },
    {
      lable: "V-Class",
      url: "http://localhost:3000/V-Class",
      icon: <VideoLibrary />,
    },
    {
      lable: "About",
      url: "http://localhost:3000/About",
      icon: <QuestionAnswer />,
    },
  ];

  const secondarymenu = [
    {
      lable: "Sciences",
      url: "http://localhost:3000/Sciences",
      icon: <LibraryBooksOutlined />,
    },
    {
      lable: "Commerce",
      url: "http://localhost:3000/Commerce",
      icon: <BarChart />,
    },
    {
      lable: "Languages",
      url: "http://localhost:3000/Languages",
      icon: <LanguageTwoTone />,
    },
  ];

  const AvaterImg = () => {
    return (
      user &&
      (user?.result?.Settings?.profilePicture === null ? (
        <Avatar
          alt={user.result.name}
          src={user.result.imageUrl}
          style={{ width: "32px", height: "32px" }}
        >
          {user.result.name.charAt(0)}
        </Avatar>
      ) : (
        <Avatar
          alt={user.result.name}
          src={user.result.Settings?.profilePicture}
          style={{ width: "32px", height: "32px" }}
        ></Avatar>
      ))
    );
  };

  const Logout = () => {
    const [user, setUser] = useState(
      JSON.parse(localStorage.getItem("profile"))
    );
    const dispatch = useDispatch();

    const Out = () => {
      setUser(null);
      dispatch({ type: "LOGOUT" });
      window.history.pushState({ urlPath: "/" }, "", "/");
      window.location.reload();
    };

    const token = user?.token;
    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem("profile")));

      if (token) {
        const decodedToken = decode(token);
        if (decodedToken.exp * 1000000 < new Date().getTime()) Out();
      }
    }, [token]);

    const dash = JSON.parse(localStorage.getItem("Dash"));

    return (
      <Grid
        container
        style={{ display: "flex", flexWrap: "wrap", maxWidth: "150px" }}
      >
        <Grid item xs={12}>
          <ListItem
            button
            onClick={() => {
              Out();
              localStorage.removeItem("Dash");
            }}
            style={{ padding: "0px", paddingBottom: "5px", paddingTop: "5px" }}
          >
            <ExitToApp />
            <Typography
              variant="body 2"
              align="center"
              style={{ paddingLeft: "5px", width: "100%" }}
            >
              Log Out
            </Typography>
          </ListItem>
        </Grid>
        {user?.result?.UserType === "Learner" &&
          (!dash ? (
            <Grid item xs={12}>
              <ListItem
                button
                onClick={() => {
                  localStorage.setItem(
                    "Dash",
                    JSON.stringify({ item: "dash" })
                  );
                  if (window.location.pathname !== "/Home") {
                    window.history.pushState({}, "", "/Home");
                    window.location.reload();
                  } else {
                    window.location.reload();
                  }
                }}
                style={{
                  padding: "0px",
                  paddingBottom: "5px",
                  paddingTop: "5px",
                }}
              >
                <Dashboard />
                <Typography
                  variant="body 2"
                  align="center"
                  style={{ paddingLeft: "5px", width: "100%" }}
                >
                  Dash Board
                </Typography>
              </ListItem>
            </Grid>
          ) : (
            <Grid item xs={12}>
              <ListItem
                button
                onClick={() => {
                  localStorage.removeItem("Dash");
                  if (window.location.pathname !== "/Home") {
                    window.history.pushState({}, "", "/Home");
                    window.location.reload();
                  } else {
                    window.location.reload();
                  }
                }}
                style={{
                  padding: "0px",
                  paddingBottom: "5px",
                  paddingTop: "5px",
                }}
              >
                <Home />
                <Typography
                  variant="body 2"
                  align="center"
                  style={{ paddingLeft: "5px", width: "100%" }}
                >
                  Home
                </Typography>
              </ListItem>
            </Grid>
          ))}
        <Grid item xs={12}>
          <Link to="/user/Settings">
            <ListItem
              button
              style={{
                padding: "0px",
                paddingBottom: "5px",
                paddingTop: "5px",
                color: "black",
              }}
            >
              <Settings />
              <Typography
                variant="body 2"
                align="center"
                style={{ paddingLeft: "5px", width: "100%" }}
              >
                Settings
              </Typography>
            </ListItem>
          </Link>
        </Grid>
      </Grid>
    );
  };

  // const Notifications = () => {
  // dispatch(signin(formData, history));

  // };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="secondary"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.topNav}>
          {!user ? (
            <>
              <Typography variant="button">
                You have To sign in to use this service
              </Typography>

              {window.location.pathname === "/" ? null : (
                <Link to="/">
                  <Button color="primary" variant="outlined" size="medium">
                    Sign in
                  </Button>
                </Link>
              )}
            </>
          ) : (
            <>
              <Box display={{ xs: "flex", sm: "none" }}>
                <IconButton
                  color="default"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, open && classes.hide)}
                  style={{ color: "white", margin: "0px", float: "left" }}
                >
                  <MenuIcon style={{ color: "white", margin: "0px" }} />
                </IconButton>
              </Box>

              <NavComp />

              <span
                style={{
                  float: "right",
                  justifySelf: "right",
                  width: "fit-content",
                  flexWrap: "nowrap",
                }}
              >
                <Grid
                  container
                  spacing={2}
                  style={{
                    float: "right",
                    justifySelf: "right",
                    width: "fit-content",
                    flexWrap: "nowrap",
                  }}
                >
                  <Grid item>
                    <MenuPopupState
                      img={
                        <VideoCall
                          style={{
                            margin: "auto",
                            color: "white",
                          }}
                        />
                      }
                    />
                  </Grid>
                  <Grid item>
                    <MenuPopupState
                      img={
                        <Notifications
                          style={{
                            margin: "auto",
                            color: "white",
                          }}
                        />
                      }
                    />
                  </Grid>
                  <Grid item>
                    <MenuPopupState
                      logout={<Logout />}
                      avatar={<AvaterImg />}
                    />
                  </Grid>
                </Grid>
              </span>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        color="primary"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div
          className={classes.drawerHeader}
          style={{ backgroundColor: "transparent" }}
        >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {mainmenu.map(i => (
            <a href={i.url} style={{ color: "black", backgroundColor: "red" }}>
              <ListItem button key={i.lable} color="secondary">
                <ListItemIcon color="secondary">{i.icon}</ListItemIcon>
                <ListItemText primary={i.lable} color="secondary" />
              </ListItem>
            </a>
          ))}
        </List>
        <Divider />
        <List>
          {secondarymenu.map(i => (
            <a href={i.url} style={{ color: "black", backgroundColor: "red" }}>
              <ListItem button key={i.lable}>
                <ListItemIcon>{i.icon}</ListItemIcon>
                <ListItemText primary={i.lable} />
              </ListItem>
            </a>
          ))}
        </List>
        <Divider />
        {/* <List>
          {tertarymenu.map(i => (
            <a href={i.url} style={{ color: "black", backgroundColor: "red" }}>
              <ListItem button key={i.lable}>
                <ListItemIcon>{i.icon}</ListItemIcon>
                <ListItemText primary={i.lable} />
              </ListItem>
            </a>
          ))}
        </List> */}
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
};

export default PersistentDrawerLeft;
