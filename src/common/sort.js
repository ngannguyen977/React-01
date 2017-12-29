import React, { Component } from 'react';

class Sort extends Component {
  render() {
    return (
        <div className="col-md-4 col-sm-4">
            <div className="btn-group">
            <button className="btn btn-default" type="button">Sort by</button>
            <button data-toggle="dropdown" className="btn btn-default dropdown-toggle" type="button"><span className="caret" />
            </button>
            <ul className="dropdown-menu">
                <li><a href="">Name ASC</a></li>
                <li><a href="">Name DESC</a></li>
                <li><a href="">Something else here</a></li>
                <li className="divider" />
                <li><a href="">Separated link</a></li>
            </ul>
            <span className="label label-success label-menidum">NAME-DESC</span>
            </div>
        </div>
    );
  }
}

export default Sort;
