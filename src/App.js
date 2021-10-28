import React, { Component } from 'react'
import { Button } from 'antd';
import './App.css';
import Login from './pages/Login/index';
import Register from './pages/Register/index';
import Admin from './pages/Admin/index';
// import Login from './pages/Login/index.jsx';
// import Home from './pages/Home/index.jsx';
// import ProxyDemo from './ProxyDemo';
import routes from './router';
import {Route,BrowserRouter,Switch} from 'react-router-dom'

export default class App extends Component {
  render(){
      return (
          <div className="App">
            <BrowserRouter>
              <Switch>
                    <Route exact component={Login} path="/"></Route>
                    <Route exact component={Login} path="/login"></Route>
                    <Route exact component={Register} path="/register"></Route>
                    <Route component={Admin}  path="/index"></Route>
                    
              </Switch>
            </BrowserRouter>
            {/* <Login></Login> */}
            {/* <Home></Home>
            <Button style={{color:'red'}}>Start1</Button>
            <Button type="primary" inline size="small" style={{ marginRight: '4px' }}>primary</Button>
          */}
          </div>
      );
  }
}