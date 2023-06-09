import Pillsfront from "./components/Add_pills/Pills_front";
import { Device } from "./components/Device_connect/main";
import { Caddy } from "./components/Caddy_Log/Caddy/Caddy";
import { PeopleConnect } from "./components/Community/PeopleConnect";
// import { Main } from "./components/Home/Main";
import Signin from "./components/SignIn/Signin";
import Signup from "./components/SignUp/Signup";
import { CommunityGroups } from "./components/Community/Groups/CommunityGroups";
import { ActiveGroups } from "./components/Community/Groups/ActiveGroups";
import { GroupMembers } from "./components/Community/Groups/GroupMembers.jsx";
import LinkDevice from "./components/linkdevices/LinkDevice";
import { Menu } from "./components/Menu/menu";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import style from "./App.module.css";

// Header Icons
import img1 from "./components/Header/menu.svg";
import img2 from "./components/Header/bell.svg";
// import img3 from "./components/Header/watch.svg"
import img4 from "./components/Header/watchinactive.svg";

// Footer Icons
import homeIconActive from "./components/Footer/homeimgactive.svg";
import communityIcon from "./components/Footer/groupimg.svg";
import schedule from "./3652221.png";
import caddyIcon from "./user.png";
import Render from "./components/Render/Render";
import Profile from "./components/Profile";
import AddClass from "./components/AddClass";
import Schedule from "./components/Schedule";
import ListClassPage from "./components/ListClassPage";
import ClassDetail from "./components/ClassDetail";
// import Headerrr from "./components/Header/Header";

function App() {
  const handle_user_name = (data) => {
    localStorage.setItem("userName", data);
  };

  return (
    <Router>
      <div className={style.app}>
        {/* header */}

        {/* Body */}
        <div className={style.appBody}>
          <Switch>
            <Route path="/" exact>
              <Render />
            </Route>

            <Route path="/signin" exact>
              <Signin handle_user_name={handle_user_name} />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>

            <Route path="/Home" exact>
              <Device style={{ zIndex: "1" }} />
            </Route>

            <Route path="/profile" exact>
              <Profile />
            </Route>

            <Route path="/add-class" exact>
              <AddClass />
            </Route>
            <Route path="/schedule" exact>
              <Schedule />
            </Route>
            <Route path="/list-class" exact>
              <ListClassPage />
            </Route>
            <Route path="/class-detail/:id">
              <ClassDetail />
            </Route>

            <Route path="/Menu" exact>
              <Device style={{ zIndex: "1" }} />
              <Menu style={{ zIndex: "-1" }} />
            </Route>

            <Route path="/PeopleConnect" exact>
              <PeopleConnect />
            </Route>

            <Route path="/CommunityGroups" exact>
              <CommunityGroups />
            </Route>

            <Route path="/ActiveGroups" exact>
              <ActiveGroups />
            </Route>

            <Route path="/GroupMembers" exact>
              <GroupMembers />
            </Route>

            <Route path="/Pills_front" exact>
              <Pillsfront />
            </Route>

            <Route path="/Caddy" exact>
              <Caddy />
            </Route>

            <Route path="/linkdevice" exact>
              <LinkDevice />
            </Route>

            <Route>
              {/* 404 not found */}
              <Device />
            </Route>
          </Switch>
        </div>

        {/* Footer */}
        <FooterCustom />
      </div>
    </Router>
  );
}

const FooterCustom = () => {
  const location = useLocation();
  return (
    location.pathname !== "/" &&
    location.pathname !== "/signin" && (
      <div className={style.footerbody}>
        <Link to="/Home">
          <div>
            <img src={homeIconActive} id="homeicon" alt="home"></img>
          </div>
        </Link>
        <Link to="/schedule">
          <div>
            <img
              src={schedule}
              className={style.scheduleIcon}
              alt="community"
            ></img>
          </div>
        </Link>
        <Link to="/profile">
          <div>
            <img
              className={style.scheduleIcon}
              src={caddyIcon}
        
              alt="caddy"
            ></img>
          </div>
        </Link>
      </div>
    )
  );
};

export default App;
