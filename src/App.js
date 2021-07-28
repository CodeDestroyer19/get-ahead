//React modules
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

//Mui modules
import { ThemeProvider } from "@material-ui/core/Styles";
import "./App.css";
import Theme from "./theme/Themes";

//Pages
import Home from "./pages/Home";
import Sciences from "./pages/Sciences";
import Commerce from "./pages/Commerce";
import About from "./pages/About";
import Auth from "./components/auth/auth";
import TeachAuth from "./components/auth/techAuth";
import Languages from "./pages/Languages";
import Library from "./pages/Library";
import Notes from "./pages/Notes";
import PastPapers from "./pages/PastPapers";
import VClass from "./pages/V-Class";

//Components
import PersistentDrawerLeft from "./components/SecNav";
import Redirect from "./components/404/Redirect";
import PreMadeHome from "./components/VideoPlayer/PremadeVideos/PreMadeHome";
import EduCast from "./components/VideoPlayer/ZoomClone/EduCast";
import Settings from "./components/Settings/Settings";
import Room from "./components/VideoPlayer/ZoomClone/Room";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        {!localStorage.getItem("videoCall") ? <PersistentDrawerLeft /> : null}
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/V-Class" component={VClass} />
          <Route exact path="/Library" component={Library} />
          <Route exact path="/About" component={About} />

          <Route exact path="/V-Class/PreMadeHome" component={PreMadeHome} />
          <Route exact path="/V-Class/EduCast" component={EduCast} />

          <Route exact path="/Sciences" component={Sciences} />
          <Route exact path="/Commerce" component={Commerce} />
          <Route exact path="/Languages" component={Languages} />
          <Route exact path="/Notes" component={Notes} />
          <Route exact path="/PastPapers" component={PastPapers} />
          <Route exact path="/Teachers" component={TeachAuth} />
          <Route exact path="/" component={Auth} />
          <Route exact path="/user/Settings" component={Settings} />

          <Route
            exact
            path="/V-Class/EduCast/room/:roomID/:Subject"
            component={Room}
          />
          <Route component={Redirect} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
