import React , { Component } from 'react';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: ["red", "blue"]
        }
    }
    showColor(color){
        console.log(color);
        return {
            backgroundColor: color
        }
    }
    render() {
        var elementColor = this.state.color.map((color, index)=>{
            return <span key = {index}
                        style={this.showColor(color)}
                    ></span>
        });
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">colorPicker</h3>
            </div>
            <div className="panel-body">
            {elementColor}
                <hr />
            </div>
            </div>
        </div>
        );
    }
}
export default ColorPicker;
