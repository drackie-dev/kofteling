import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import { Home } from './pages/Home.js';
import { About } from './pages/About.js';
import { Contact } from './pages/Contact.js';
import { NoMatch } from './pages/NoMatch.js';
import { Admin } from './pages/Admin.js';
import Login from './pages/Login.js';
import Signup from './pages/SignUp.js';

import { Layout } from './components/Layout.js';
import { NavigationBar } from './components/NavigationBar.js';

import { AuthContext } from "./context/auth";

function App(props) {
  return (
    <AuthContext.Provider value={false}>
      <BrowserRouter>
        <NavigationBar />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/admin" component={Admin} />
            <Route component={NoMatch} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;