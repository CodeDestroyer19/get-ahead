import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import VideoData from "../data/video";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ width: "100vh", margin: "auto" }}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0} style={{ height: "100%", width: "100%", margin: "auto" }}>
          {children}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 624,
    width: "100%",
    margin: "0px",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: "#cfcfcf",
    maxWidth: "35%",
    minWidth: "250px",
  },
}));

const DefinedPlayers = [
  {
    player: function Smo() {
      const classes = useStyles();
      const [value, setValue] = React.useState(0);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      return (
        <div container className={classes.root}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            indicatorColor="secondary"
            textColor="secondary"
            style={{ textAlign: "left" }}
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
              ></Tab>
            ))}
          </Tabs>
          {VideoData.maths.topics.map(i => (
            <TabPanel
              value={value}
              index={i.index}
              style={{
                width: "75%",
                margin: "auto",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              {i.embed}
            </TabPanel>
          ))}
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
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            indicatorColor="secondary"
            textColor="secondary"
            style={{ textAlign: "left" }}
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
          {VideoData.mathslit.topics.map(i => (
            <TabPanel
              value={value}
              index={i.index}
              style={{
                width: "75%",
                margin: "auto",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              {i.embed}
            </TabPanel>
          ))}
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
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            indicatorColor="secondary"
            textColor="secondary"
            style={{ textAlign: "left" }}
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
          {VideoData.lifeSci.topics.map(i => (
            <TabPanel
              value={value}
              index={i.index}
              style={{
                width: "75%",
                margin: "auto",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              {i.embed}
            </TabPanel>
          ))}
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
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            indicatorColor="secondary"
            textColor="secondary"
            style={{ textAlign: "left" }}
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
                    {`#${i.index}  `}
                    {i.name}
                  </p>
                }
                {...a11yProps(i.index)}
              />
            ))}
          </Tabs>
          {VideoData.phyiscs.topics.map(i => (
            <TabPanel
              value={value}
              index={i.index}
              style={{
                width: "75%",
                margin: "auto",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              {i.embed}
            </TabPanel>
          ))}
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
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            indicatorColor="secondary"
            textColor="secondary"
            style={{ textAlign: "left" }}
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
          {VideoData.tourism.topics.map(i => (
            <TabPanel
              value={value}
              index={i.index}
              style={{
                width: "75%",
                margin: "auto",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              {i.embed}
            </TabPanel>
          ))}
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
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            indicatorColor="secondary"
            textColor="secondary"
            style={{ textAlign: "left" }}
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
          {VideoData.cat.topics.map(i => (
            <TabPanel
              value={value}
              index={i.index}
              style={{
                width: "75%",
                margin: "auto",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              {i.embed}
            </TabPanel>
          ))}
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
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            indicatorColor="secondary"
            textColor="secondary"
            style={{ textAlign: "left" }}
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
          {VideoData.afrikaans.topics.map(i => (
            <TabPanel
              value={value}
              index={i.index}
              style={{
                width: "75%",
                margin: "auto",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              {i.embed}
            </TabPanel>
          ))}
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
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            indicatorColor="secondary"
            textColor="secondary"
            style={{ textAlign: "left" }}
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
          {VideoData.economics.topics.map(i => (
            <TabPanel
              value={value}
              index={i.index}
              style={{
                width: "75%",
                margin: "auto",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              {i.embed}
            </TabPanel>
          ))}
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
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            indicatorColor="secondary"
            textColor="secondary"
            style={{ textAlign: "left" }}
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
          {VideoData.businessstudies.topics.map(i => (
            <TabPanel
              value={value}
              index={i.index}
              style={{
                width: "75%",
                margin: "auto",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              {i.embed}
            </TabPanel>
          ))}
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
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            indicatorColor="secondary"
            textColor="secondary"
            style={{ textAlign: "left" }}
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
          {VideoData.accounting.topics.map(i => (
            <TabPanel
              value={value}
              index={i.index}
              style={{
                width: "75%",
                margin: "auto",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              {i.embed}
            </TabPanel>
          ))}
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
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            indicatorColor="secondary"
            textColor="secondary"
            style={{ textAlign: "left" }}
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
          {VideoData.geography.topics.map(i => (
            <TabPanel
              value={value}
              index={i.index}
              style={{
                width: "75%",
                margin: "auto",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              {i.embed}
            </TabPanel>
          ))}
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
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            indicatorColor="secondary"
            textColor="secondary"
            style={{ textAlign: "left" }}
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
          {VideoData.englishHl.topics.map(i => (
            <TabPanel
              value={value}
              index={i.index}
              style={{
                width: "75%",
                margin: "auto",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              {i.embed}
            </TabPanel>
          ))}
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
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            indicatorColor="secondary"
            textColor="secondary"
            style={{ textAlign: "left" }}
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
          {VideoData.englishfal.topics.map(i => (
            <TabPanel
              value={value}
              index={i.index}
              style={{
                width: "75%",
                margin: "auto",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              {i.embed}
            </TabPanel>
          ))}
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
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            indicatorColor="secondary"
            textColor="secondary"
            style={{ textAlign: "left" }}
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
          {VideoData.spedihome.topics.map(i => (
            <TabPanel
              value={value}
              index={i.index}
              style={{
                width: "75%",
                margin: "auto",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              {i.embed}
            </TabPanel>
          ))}
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
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            indicatorColor="secondary"
            textColor="secondary"
            style={{ textAlign: "left" }}
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
          {VideoData.zuluhome.topics.map(i => (
            <TabPanel
              value={value}
              index={i.index}
              style={{
                width: "75%",
                margin: "auto",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              {i.embed}
            </TabPanel>
          ))}
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
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            indicatorColor="secondary"
            textColor="secondary"
            style={{ textAlign: "left" }}
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
          {VideoData.history.topics.map(i => (
            <TabPanel
              value={value}
              index={i.index}
              style={{
                width: "75%",
                margin: "auto",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              {i.embed}
            </TabPanel>
          ))}
        </div>
      );
    },
    name: "HISTORY",
  },
];

export default DefinedPlayers;
