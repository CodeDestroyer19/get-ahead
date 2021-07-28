import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import VideoData from "../data/video";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <div style={{ height: "350px" }}>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const DefinedPlayersMoblie = [
  {
    player: function Smo() {
      const classes = useStyles();
      const [value, setValue] = React.useState(0);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      return (
        <div className={classes.root}>
          {VideoData.maths.topics.map(i => (
            <TabPanel value={value} index={i.index}>
              {i.embed}
            </TabPanel>
          ))}

          <AppBar
            position="static"
            color="default"
            style={{ width: "100%", height: "280px" }}
          >
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              indicatorColor="secondary"
              textColor="secondary"
              aria-label="scrollable force tabs example"
              style={{
                backgroundColor: "#cfcfcf",
                color: "white",
                width: "100%",
              }}
            >
              {VideoData.maths.topics.map(i => (
                <Tab
                  label={
                    <p
                      style={{
                        fontSize: "14px",
                        textAlign: "left",
                        width: "100%",
                        margin: "0px",
                      }}
                    >
                      {`#${i.index + 1}  `}
                      {i.name}{" "}
                      <hr
                        style={{
                          backgroundColor: "#00000030",
                          border: "1px solid #00000030",
                        }}
                      ></hr>{" "}
                    </p>
                  }
                  {...a11yProps(i.index)}
                />
              ))}
            </Tabs>
          </AppBar>
        </div>
      );
    },
    name: "MATHEMATICS",
  },

  {
    player: function Smo() {
      const classes = useStyles();
      const [value, setValue] = React.useState(0);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      return (
        <div className={classes.root}>
          {VideoData.mathslit.topics.map(i => (
            <TabPanel value={value} index={i.index}>
              {i.embed}
            </TabPanel>
          ))}

          <AppBar
            position="static"
            color="default"
            style={{ width: "100%", height: "280px" }}
          >
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              indicatorColor="secondary"
              textColor="secondary"
              aria-label="scrollable force tabs example"
              style={{
                backgroundColor: "#cfcfcf",
                color: "white",
                width: "100%",
              }}
            >
              {VideoData.mathslit.topics.map(i => (
                <Tab
                  label={
                    <p
                      style={{
                        fontSize: "14px",
                        textAlign: "left",
                        width: "100%",
                        margin: "0px",
                      }}
                    >
                      {`#${i.index + 1}  `}
                      {i.name}{" "}
                      <hr
                        style={{
                          backgroundColor: "#00000030",
                          border: "1px solid #00000030",
                        }}
                      ></hr>{" "}
                    </p>
                  }
                  {...a11yProps(i.index)}
                />
              ))}
            </Tabs>
          </AppBar>
        </div>
      );
    },
    name: "MATHS LITERACY",
  },

  {
    player: function Smo() {
      const classes = useStyles();
      const [value, setValue] = React.useState(0);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      return (
        <div className={classes.root}>
          {VideoData.lifeSci.topics.map(i => (
            <TabPanel value={value} index={i.index}>
              {i.embed}
            </TabPanel>
          ))}

          <AppBar
            position="static"
            color="default"
            style={{ width: "100%", height: "280px" }}
          >
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              indicatorColor="secondary"
              textColor="secondary"
              aria-label="scrollable force tabs example"
              style={{
                backgroundColor: "#cfcfcf",
                color: "white",
                width: "100%",
              }}
            >
              {VideoData.lifeSci.topics.map(i => (
                <Tab
                  label={
                    <p
                      style={{
                        fontSize: "14px",
                        textAlign: "left",
                        width: "100%",
                        margin: "0px",
                      }}
                    >
                      {`#${i.index + 1}  `}
                      {i.name}{" "}
                      <hr
                        style={{
                          backgroundColor: "#00000030",
                          border: "1px solid #00000030",
                        }}
                      ></hr>{" "}
                    </p>
                  }
                  {...a11yProps(i.index)}
                />
              ))}
            </Tabs>
          </AppBar>
        </div>
      );
    },
    name: "LIFE SCIENCE",
  },

  {
    player: function Smo() {
      const classes = useStyles();
      const [value, setValue] = React.useState(0);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      return (
        <div className={classes.root}>
          {VideoData.phyiscs.topics.map(i => (
            <TabPanel value={value} index={i.index}>
              {i.embed}
            </TabPanel>
          ))}

          <AppBar
            position="static"
            color="default"
            style={{ width: "100%", height: "280px" }}
          >
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              indicatorColor="secondary"
              textColor="secondary"
              aria-label="scrollable force tabs example"
              style={{
                backgroundColor: "#cfcfcf",
                color: "white",
                width: "100%",
              }}
            >
              {VideoData.phyiscs.topics.map(i => (
                <Tab
                  label={
                    <p
                      style={{
                        fontSize: "14px",
                        textAlign: "left",
                        width: "100%",
                        margin: "0px",
                      }}
                    >
                      {`#${i.index + 1}  `}
                      {i.name}{" "}
                      <hr
                        style={{
                          backgroundColor: "#00000030",
                          border: "1px solid #00000030",
                        }}
                      ></hr>{" "}
                    </p>
                  }
                  {...a11yProps(i.index)}
                />
              ))}
            </Tabs>
          </AppBar>
        </div>
      );
    },
    name: "PHYSICAL SCIENCES",
  },

  {
    player: function Smo() {
      const classes = useStyles();
      const [value, setValue] = React.useState(0);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      return (
        <div className={classes.root}>
          {VideoData.tourism.topics.map(i => (
            <TabPanel value={value} index={i.index}>
              {i.embed}
            </TabPanel>
          ))}

          <AppBar
            position="static"
            color="default"
            style={{ width: "100%", height: "280px" }}
          >
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              indicatorColor="secondary"
              textColor="secondary"
              aria-label="scrollable force tabs example"
              style={{
                backgroundColor: "#cfcfcf",
                color: "white",
                width: "100%",
              }}
            >
              {VideoData.tourism.topics.map(i => (
                <Tab
                  label={
                    <p
                      style={{
                        fontSize: "14px",
                        textAlign: "left",
                        width: "100%",
                        margin: "0px",
                      }}
                    >
                      {`#${i.index + 1}  `}
                      {i.name}{" "}
                      <hr
                        style={{
                          backgroundColor: "#00000030",
                          border: "1px solid #00000030",
                        }}
                      ></hr>{" "}
                    </p>
                  }
                  {...a11yProps(i.index)}
                />
              ))}
            </Tabs>
          </AppBar>
        </div>
      );
    },
    name: "TOURISM",
  },

  {
    player: function Smo() {
      const classes = useStyles();
      const [value, setValue] = React.useState(0);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      return (
        <div className={classes.root}>
          {VideoData.cat.topics.map(i => (
            <TabPanel value={value} index={i.index}>
              {i.embed}
            </TabPanel>
          ))}

          <AppBar
            position="static"
            color="default"
            style={{ width: "100%", height: "280px" }}
          >
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              indicatorColor="secondary"
              textColor="secondary"
              aria-label="scrollable force tabs example"
              style={{
                backgroundColor: "#cfcfcf",
                color: "white",
                width: "100%",
              }}
            >
              {VideoData.cat.topics.map(i => (
                <Tab
                  label={
                    <p
                      style={{
                        fontSize: "14px",
                        textAlign: "left",
                        width: "100%",
                        margin: "0px",
                      }}
                    >
                      {`#${i.index + 1}  `}
                      {i.name}{" "}
                      <hr
                        style={{
                          backgroundColor: "#00000030",
                          border: "1px solid #00000030",
                        }}
                      ></hr>{" "}
                    </p>
                  }
                  {...a11yProps(i.index)}
                />
              ))}
            </Tabs>
          </AppBar>
        </div>
      );
    },
    name: "CAT",
  },

  {
    player: function Smo() {
      const classes = useStyles();
      const [value, setValue] = React.useState(0);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      return (
        <div className={classes.root}>
          {VideoData.afrikaans.topics.map(i => (
            <TabPanel value={value} index={i.index}>
              {i.embed}
            </TabPanel>
          ))}

          <AppBar
            position="static"
            color="default"
            style={{ width: "100%", height: "280px" }}
          >
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              indicatorColor="secondary"
              textColor="secondary"
              aria-label="scrollable force tabs example"
              style={{
                backgroundColor: "#cfcfcf",
                color: "white",
                width: "100%",
              }}
            >
              {VideoData.afrikaans.topics.map(i => (
                <Tab
                  label={
                    <p
                      style={{
                        fontSize: "14px",
                        textAlign: "left",
                        width: "100%",
                        margin: "0px",
                      }}
                    >
                      {`#${i.index + 1}  `}
                      {i.name}{" "}
                      <hr
                        style={{
                          backgroundColor: "#00000030",
                          border: "1px solid #00000030",
                        }}
                      ></hr>{" "}
                    </p>
                  }
                  {...a11yProps(i.index)}
                />
              ))}
            </Tabs>
          </AppBar>
        </div>
      );
    },
    name: "AFRIKAANS",
  },

  {
    player: function Smo() {
      const classes = useStyles();
      const [value, setValue] = React.useState(0);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      return (
        <div className={classes.root}>
          {VideoData.economics.topics.map(i => (
            <TabPanel value={value} index={i.index}>
              {i.embed}
            </TabPanel>
          ))}

          <AppBar
            position="static"
            color="default"
            style={{ width: "100%", height: "280px" }}
          >
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              indicatorColor="secondary"
              textColor="secondary"
              aria-label="scrollable force tabs example"
              style={{
                backgroundColor: "#cfcfcf",
                color: "white",
                width: "100%",
              }}
            >
              {VideoData.economics.topics.map(i => (
                <Tab
                  label={
                    <p
                      style={{
                        fontSize: "14px",
                        textAlign: "left",
                        width: "100%",
                        margin: "0px",
                      }}
                    >
                      {`#${i.index + 1}  `}
                      {i.name}{" "}
                      <hr
                        style={{
                          backgroundColor: "#00000030",
                          border: "1px solid #00000030",
                        }}
                      ></hr>{" "}
                    </p>
                  }
                  {...a11yProps(i.index)}
                />
              ))}
            </Tabs>
          </AppBar>
        </div>
      );
    },
    name: "ECONOMICS",
  },

  {
    player: function Smo() {
      const classes = useStyles();
      const [value, setValue] = React.useState(0);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      return (
        <div className={classes.root}>
          {VideoData.businessstudies.topics.map(i => (
            <TabPanel value={value} index={i.index}>
              {i.embed}
            </TabPanel>
          ))}

          <AppBar
            position="static"
            color="default"
            style={{ width: "100%", height: "280px" }}
          >
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              indicatorColor="secondary"
              textColor="secondary"
              aria-label="scrollable force tabs example"
              style={{
                backgroundColor: "#cfcfcf",
                color: "white",
                width: "100%",
              }}
            >
              {VideoData.businessstudies.topics.map(i => (
                <Tab
                  label={
                    <p
                      style={{
                        fontSize: "14px",
                        textAlign: "left",
                        width: "100%",
                        margin: "0px",
                      }}
                    >
                      {`#${i.index + 1}  `}
                      {i.name}{" "}
                      <hr
                        style={{
                          backgroundColor: "#00000030",
                          border: "1px solid #00000030",
                        }}
                      ></hr>{" "}
                    </p>
                  }
                  {...a11yProps(i.index)}
                />
              ))}
            </Tabs>
          </AppBar>
        </div>
      );
    },
    name: "BUSINESS STUDIES",
  },

  {
    player: function Smo() {
      const classes = useStyles();
      const [value, setValue] = React.useState(0);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      return (
        <div className={classes.root}>
          {VideoData.accounting.topics.map(i => (
            <TabPanel value={value} index={i.index}>
              {i.embed}
            </TabPanel>
          ))}

          <AppBar
            position="static"
            color="default"
            style={{ width: "100%", height: "280px" }}
          >
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              indicatorColor="secondary"
              textColor="secondary"
              aria-label="scrollable force tabs example"
              style={{
                backgroundColor: "#cfcfcf",
                color: "white",
                width: "100%",
              }}
            >
              {VideoData.accounting.topics.map(i => (
                <Tab
                  label={
                    <p
                      style={{
                        fontSize: "14px",
                        textAlign: "left",
                        width: "100%",
                        margin: "0px",
                      }}
                    >
                      {`#${i.index + 1}  `}
                      {i.name}{" "}
                      <hr
                        style={{
                          backgroundColor: "#00000030",
                          border: "1px solid #00000030",
                        }}
                      ></hr>{" "}
                    </p>
                  }
                  {...a11yProps(i.index)}
                />
              ))}
            </Tabs>
          </AppBar>
        </div>
      );
    },
    name: "ACCOUNTING",
  },

  {
    player: function Smo() {
      const classes = useStyles();
      const [value, setValue] = React.useState(0);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      return (
        <div className={classes.root}>
          {VideoData.geography.topics.map(i => (
            <TabPanel value={value} index={i.index}>
              {i.embed}
            </TabPanel>
          ))}

          <AppBar
            position="static"
            color="default"
            style={{ width: "100%", height: "280px" }}
          >
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              indicatorColor="secondary"
              textColor="secondary"
              aria-label="scrollable force tabs example"
              style={{
                backgroundColor: "#cfcfcf",
                color: "white",
                width: "100%",
              }}
            >
              {VideoData.geography.topics.map(i => (
                <Tab
                  label={
                    <p
                      style={{
                        fontSize: "14px",
                        textAlign: "left",
                        width: "100%",
                        margin: "0px",
                      }}
                    >
                      {`#${i.index + 1}  `}
                      {i.name}{" "}
                      <hr
                        style={{
                          backgroundColor: "#00000030",
                          border: "1px solid #00000030",
                        }}
                      ></hr>{" "}
                    </p>
                  }
                  {...a11yProps(i.index)}
                />
              ))}
            </Tabs>
          </AppBar>
        </div>
      );
    },
    name: "GEOGRAPHY",
  },

  {
    player: function Smo() {
      const classes = useStyles();
      const [value, setValue] = React.useState(0);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      return (
        <div className={classes.root}>
          {VideoData.englishHl.topics.map(i => (
            <TabPanel value={value} index={i.index}>
              {i.embed}
            </TabPanel>
          ))}

          <AppBar
            position="static"
            color="default"
            style={{ width: "100%", height: "280px" }}
          >
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              indicatorColor="secondary"
              textColor="secondary"
              aria-label="scrollable force tabs example"
              style={{
                backgroundColor: "#cfcfcf",
                color: "white",
                width: "100%",
              }}
            >
              {VideoData.englishHl.topics.map(i => (
                <Tab
                  label={
                    <p
                      style={{
                        fontSize: "14px",
                        textAlign: "left",
                        width: "100%",
                        margin: "0px",
                      }}
                    >
                      {`#${i.index + 1}  `}
                      {i.name}{" "}
                      <hr
                        style={{
                          backgroundColor: "#00000030",
                          border: "1px solid #00000030",
                        }}
                      ></hr>{" "}
                    </p>
                  }
                  {...a11yProps(i.index)}
                />
              ))}
            </Tabs>
          </AppBar>
        </div>
      );
    },
    name: "ENGLISH HL",
  },

  {
    player: function Smo() {
      const classes = useStyles();
      const [value, setValue] = React.useState(0);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      return (
        <div className={classes.root}>
          {VideoData.englishfal.topics.map(i => (
            <TabPanel value={value} index={i.index}>
              {i.embed}
            </TabPanel>
          ))}

          <AppBar
            position="static"
            color="default"
            style={{ width: "100%", height: "280px" }}
          >
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              indicatorColor="secondary"
              textColor="secondary"
              aria-label="scrollable force tabs example"
              style={{
                backgroundColor: "#cfcfcf",
                color: "white",
                width: "100%",
              }}
            >
              {VideoData.englishfal.topics.map(i => (
                <Tab
                  label={
                    <p
                      style={{
                        fontSize: "14px",
                        textAlign: "left",
                        width: "100%",
                        margin: "0px",
                      }}
                    >
                      {`#${i.index + 1}  `}
                      {i.name}{" "}
                      <hr
                        style={{
                          backgroundColor: "#00000030",
                          border: "1px solid #00000030",
                        }}
                      ></hr>{" "}
                    </p>
                  }
                  {...a11yProps(i.index)}
                />
              ))}
            </Tabs>
          </AppBar>
        </div>
      );
    },
    name: "ENGLISH FAL",
  },

  {
    player: function Smo() {
      const classes = useStyles();
      const [value, setValue] = React.useState(0);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      return (
        <div className={classes.root}>
          {VideoData.spedihome.topics.map(i => (
            <TabPanel value={value} index={i.index}>
              {i.embed}
            </TabPanel>
          ))}

          <AppBar
            position="static"
            color="default"
            style={{ width: "100%", height: "280px" }}
          >
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              indicatorColor="secondary"
              textColor="secondary"
              aria-label="scrollable force tabs example"
              style={{
                backgroundColor: "#cfcfcf",
                color: "white",
                width: "100%",
              }}
            >
              {VideoData.spedihome.topics.map(i => (
                <Tab
                  label={
                    <p
                      style={{
                        fontSize: "14px",
                        textAlign: "left",
                        width: "100%",
                        margin: "0px",
                      }}
                    >
                      {`#${i.index + 1}  `}
                      {i.name}{" "}
                      <hr
                        style={{
                          backgroundColor: "#00000030",
                          border: "1px solid #00000030",
                        }}
                      ></hr>{" "}
                    </p>
                  }
                  {...a11yProps(i.index)}
                />
              ))}
            </Tabs>
          </AppBar>
        </div>
      );
    },
    name: "SPEDI HOME LANGUAGE",
  },

  {
    player: function Smo() {
      const classes = useStyles();
      const [value, setValue] = React.useState(0);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      return (
        <div className={classes.root}>
          {VideoData.zuluhome.topics.map(i => (
            <TabPanel value={value} index={i.index}>
              {i.embed}
            </TabPanel>
          ))}

          <AppBar
            position="static"
            color="default"
            style={{ width: "100%", height: "280px" }}
          >
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              indicatorColor="secondary"
              textColor="secondary"
              aria-label="scrollable force tabs example"
              style={{
                backgroundColor: "#cfcfcf",
                color: "white",
                width: "100%",
              }}
            >
              {VideoData.zuluhome.topics.map(i => (
                <Tab
                  label={
                    <p
                      style={{
                        fontSize: "14px",
                        textAlign: "left",
                        width: "100%",
                        margin: "0px",
                      }}
                    >
                      {`#${i.index + 1}  `}
                      {i.name}{" "}
                      <hr
                        style={{
                          backgroundColor: "#00000030",
                          border: "1px solid #00000030",
                        }}
                      ></hr>{" "}
                    </p>
                  }
                  {...a11yProps(i.index)}
                />
              ))}
            </Tabs>
          </AppBar>
        </div>
      );
    },
    name: "ISIZULU HOME LANGUAGE",
  },

  {
    player: function Smo() {
      const classes = useStyles();
      const [value, setValue] = React.useState(0);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      return (
        <div className={classes.root}>
          {VideoData.history.topics.map(i => (
            <TabPanel value={value} index={i.index}>
              {i.embed}
            </TabPanel>
          ))}

          <AppBar
            position="static"
            color="default"
            style={{ width: "100%", height: "280px" }}
          >
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              indicatorColor="secondary"
              textColor="secondary"
              aria-label="scrollable force tabs example"
              style={{
                backgroundColor: "#cfcfcf",
                color: "white",
                width: "100%",
              }}
            >
              {VideoData.history.topics.map(i => (
                <Tab
                  label={
                    <p
                      style={{
                        fontSize: "14px",
                        textAlign: "left",
                        width: "100%",
                        margin: "0px",
                      }}
                    >
                      {`#${i.index + 1}  `}
                      {i.name}{" "}
                      <hr
                        style={{
                          backgroundColor: "#00000030",
                          border: "1px solid #00000030",
                        }}
                      ></hr>{" "}
                    </p>
                  }
                  {...a11yProps(i.index)}
                />
              ))}
            </Tabs>
          </AppBar>
        </div>
      );
    },
    name: "HISTORY",
  },
];

export default DefinedPlayersMoblie;
