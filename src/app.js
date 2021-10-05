import React from "react";
import { Route, Switch } from "react-router-dom";

import NavList from "./components/navList";
import Home from "./components/home";
import Login from "./components/login";
import Users from "./components/users";
// import UserById from "./components/userById";

function App() {
    return (
        <>
            <NavList />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/users/:userId?" component={Users} />
                {/* <Route path="/users" component={Users} /> */}
            </Switch>
        </>
    );
}

export default App;
