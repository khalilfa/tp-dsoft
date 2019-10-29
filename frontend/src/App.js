import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Maps from './components/Maps';
import MenuBrowser from './components/MenuBrowser';


function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/maps" component={Maps} />
      <Route exact path="/browseMenu" component={MenuBrowser} />
    </Router>
  );
}

export default App;
