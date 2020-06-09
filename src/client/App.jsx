import React, {Component} from 'react';
import Home from "./containers/Home";
import Country from "./containers/Country"

import { Menu } from 'antd';

const { Item } = Menu;
var showHome = false;




class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
              <Item key="1">Home</Item>
              <Item key="2">All Countries</Item>
            </Menu>
            <Country />
            {showHome ? <Home/> : ''}
          </div>
        );
    }
}

export default App;
