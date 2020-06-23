import React, { Component } from 'react';
import SymptomOption from './SymptomOption';
import AgePicker from './AgePicker';
import '../styles.css';
class SymptomsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symptoms: [
        {
          name: 'Bluish lips or face',
          hasSymptom: false
        },
        {
          name: 'pain or pressure in the chest',
          hasSymptom: false
        },
        {
          name: 'Extreme difficulty breathing',
          hasSymptom: false
        },
        {
          name: 'Severe and constant dizziness or lightheadedness',
          hasSymptom: false
        },
        {
          name: 'Serious disorientation',
          hasSymptom: false
        },
        {
          name: 'Unconscious or very difficult to wake up',
          hasSymptom: false
        },
        {
          name: 'Slurred speech (new or worsening)',
          hasSymptom: false
        },
        {
          name: 'Seizures',
          hasSymptom: false
        },
        {
          name:
            'Signs of low blood pressure (too weak to stand, light headed, feeling cold, pale, clammy skin))',
          hasSymptom: false
        }
      ]
    };
  }

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.symptoms);
  };

  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="col-md-6 offset-md-3 symptoms-container"
      >
        <div>
          <AgePicker />
          <div className="pt-1 pb-4 row container-fluid d-flex justify-content-center">
            <h3>Select your symptoms:</h3>
            {this.state.symptoms.map(symptom => (
              <SymptomOption
                key={symptom.name}
                symptom={symptom.name}
                hasSymptom={symptom.hasSymptom}
              />
            ))}
          </div>
        </div>
        <button type="submit" className="offset-md-5 btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
export default SymptomsForm;
