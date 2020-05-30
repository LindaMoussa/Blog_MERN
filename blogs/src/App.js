import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import SignIn from "./signin";
import Navbar from "./navbar";
import Profile from "./profile";
import Home from './home';
import Aboutus from "./aboutus";
import Contactus from "./contactus";
import NotFound from "./notfound";
import newBlog from "./newBlog";

function App() {
  return (
    <React.Fragment>
      
        <Navbar></Navbar>
        {/* <SignIn></SignIn>
        <Profile></Profile>
        <Home></Home> */}
        <main className="container">
            <Switch>
             
              {/* from more specific to more generic */}
             
              <Route path="/notfound" component={NotFound} />
              <Route path="/about" component={Aboutus} />
              <Route path="/contact" component={Contactus} />
              <Route path="/profile" component={Profile} />
              <Route path="/registeration" component={SignIn} />
              <Route path="/newBlog" component={newBlog} />
              <Route path="/" exact component={Home}/>
              <Redirect from="/home" to="/" />
              <Redirect to="/notfound" />
            </Switch>
        </main>
    </React.Fragment>
  );
}

export default App;
