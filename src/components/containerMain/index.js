import React from 'react';
import {Route,Switch} from 'react-router-dom'
import Home from '../../pages/Home'
import User from '../../pages/user/List'
import Add from '../../pages/user/Add'


class ContainerMain extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
        <Switch>
          <Route exact path="/index/user/List" component={User}></Route>
          <Route exact path="/index/user/Add" component={Add}></Route>
          <Route exact path="/Index" component={Home}></Route>
        </Switch>
    )
  }
}
export default ContainerMain;
