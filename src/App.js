import React from 'react';
import {ProjectsProvider} from "./context"
import { Contents } from "./components/layout/Contents" 
import { AddClient } from './components/AddClient';
import {BrowserRouter as Router,Switch , Route} from 'react-router-dom'
import { ClientTest } from './components/ClientTest';
import { EditClient } from './components/EditClient';

export const  App = ()=> {
  return (
    <ProjectsProvider>
        <div>
        <Router>
        <Contents/>
        <Switch>
        <Route
        path="/"
        exact
        render={props => (
          <ClientTest/>
        )}
      />
      <Route
        path="/editClient/:clientId"
        exact
        render={props => (
          <EditClient/>
        )}
      />
      <Route
        path="/addClient"
        exact
        render={props => (
          <AddClient/>
        )}
      />
  
       
      </Switch>
      </Router>
        </div>
    </ProjectsProvider>
    
  );
}


