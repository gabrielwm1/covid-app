import React, { Component } from 'react';
import '../styles.css';

class AgePicker extends Component {
  onAgeChange = age => {
    this.props.handleAge(age);
  };
  render() {
    return (
      <div className="row d-flex justify-content-center pt-3">
        <div className="form-group col-md-8 pb-2 ">
          <h3 className="pb-3">Select your age:</h3>
          <input
            type="range"
            className="form-control-range"
            id="formControlRange"
            onChange={this.onAgeChange}
            min="1"
            max="120"
          ></input>
        </div>
      </div>
    );
  }
}
export default AgePicker;
