import React, {Component} from 'react';
import { Input } from 'antd';

const { Search } = Input;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {country: null}

    this.search = this.search.bind(this)
  }

  search(value) {
    console.log(value)
    this.setState({country: value})
  }

  render() {
    return(
      <div>
        <Search placeholder="Type in a country name..." enterButton="Search" size="large" onSearch={this.search}/>
        <p>{this.state.country}</p>
      </div>
    )
  }
}

export default Home;
