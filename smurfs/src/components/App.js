import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addSmurf, getSmurfs } from '../actions';
import './App.css';

import FormikSmurfForm from './SmurfForm';

const App = props => {
  useEffect(() => {
    if (props.smurfs.length === 0) {
      props.getSmurfs();
    }
  }, [props.smurfs]);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <FormikSmurfForm addSmurf={props.addSmurf} />
      {props.smurfs.map(smurf => {
        return (
          <div key={smurf.id} className="smurf-card">
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
            <button>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    isLoading: state.isLoading,
  };
};

export default connect(
  mapStateToProps,
  { addSmurf, getSmurfs },
)(App);
