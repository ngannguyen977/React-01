import React, { Component } from 'react';
import './App.css';
import Header from './common/header';
import Control from './common/control';
import Form from './common/form';
import List from './common/list';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        everyItem : [
          {
            name  : "ABC",
            level : 0,
          },
          {
            name  : "ABC",
            level : 1,
          },
          {
            name  : "ABC",
            level : 0,
          }
        ]
    };
  }
  render() {
    let items = this.state.everyItem;

    return (
      <div className="App">
        {/* HEADER */}
        <Header/>
        <div className="container list-content">
          {/* CONTROL */}
          <Control/>
          {/* FORM */}
          <Form/>
          {/* LIST */}
          <List proitem={items}/>
        </div>
      </div>
    );
  }
}

export default App;
