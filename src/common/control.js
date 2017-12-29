import React, { Component } from 'react';
import Search from './search';
import Sort from './sort';

class Control extends Component {
  render() {
    return (
        <div className="row"> 
            {/* SEARCH */}
            <Search/>
            {/* SORT  */}
            <Sort/>
            {/* ADD  */}
            <div className="col-md-4 col-sm-4">
              <button className="btn btn-info btn-block" type="button">Add Task</button>
            </div>
        </div>
    );
  }
}

export default Control;
