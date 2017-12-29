import React, { Component } from 'react';
import Item from './item';

class List extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            
        };
        console.log(this.props.proitem);
    }
  render() {
    return (
        <table className="table table-striped">
            <thead>
                <tr className="row-name">
                    <th>Id</th>
                    <th>Task</th>
                    <th style={{width: '10%'}}>level</th>
                    <th>Settings</th>
                </tr>
            </thead>
            <tbody>
                <Item/>
            </tbody>
        </table>
    );
  }
}

export default List;
