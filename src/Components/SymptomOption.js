import React from 'react';

const SymptomOption = props => {
  return (
    <div className="pl-5 row container-fluid d-flex justify-content-start">
      <div className="pt-3">
        <div className="form-check ">
          <input
            className="form-check-input"
            type="radio"
            value=""
            id="defaultCheck1"
          ></input>
          <label className="form-check-label" for="defaultCheck1">
            {props.symptom}
          </label>
        </div>
      </div>
    </div>
  );
};
export default SymptomOption;
