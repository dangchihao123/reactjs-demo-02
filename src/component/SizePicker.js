import React , {Component} from 'react';

class SizePicker extends Component {
    render() {
        return (
            <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">size 15</h3>
          </div>
          <div className="panel-body">
            <button type="button" className="btn btn-success">tăng</button>&nbsp;
            <button type="button" className="btn btn-success">giảm</button>
          </div>
        </div>
        );
    }
}
export default SizePicker; 