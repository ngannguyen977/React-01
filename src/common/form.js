import React, { Component } from 'react';

class From extends Component {
  render() {
    return (
        <div className="col-md-12">
            <form method="POST" className="form-line">
                <div className="form-group">
                    <label className="sr-only">label</label>
                    <input className="form-control" placeholder="task name" ref="task_name" />
                </div>
                <div className="form-group">
                    <label className="sr-only">label</label>
                    <select name="ds" className="form-control" required="required" ref="task_level">
                    <option value={0}>small</option>
                    <option value={1}>Medium</option>
                    <option value={2}>High</option>
                    </select>
                </div>
                <div className="form-group"><div>
                    <button className="btn btn-primary" type="button">Submit</button>
                    <button className="btn btn-default" type="button">Cancel</button>
                    </div>
                </div>
            </form>
        </div> 
    );
  }
}

export default From;
