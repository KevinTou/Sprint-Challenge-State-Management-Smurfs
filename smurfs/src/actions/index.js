import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar';

export const GET_SMURFS_START = 'GET_SMURFS_START';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE';

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS_START });
  loadProgressBar();
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({ type: GET_SMURFS_FAILURE, payload: err.response }),
    );
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF_START });
  loadProgressBar();
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => dispatch({ type: ADD_SMURF_SUCCESS }))
    .catch(err => dispatch({ type: ADD_SMURF_FAILURE, payload: err.response }));
};