import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
        <tr className="row-content">
            <td>1</td>
            <td>the best way to start building a new React single page application.</td>
            <td> <span className="label label-default "> New </span></td>
            <td>
                <button className="btn btn-danger edit " type="button">Edit</button>
                <button type="button" className="btn btn-info edit ">Delete</button> 
            </td>
        </tr> 
    );
  }
}

export default Item;
