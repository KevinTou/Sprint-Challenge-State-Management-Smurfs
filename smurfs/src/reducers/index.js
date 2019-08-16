import {
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE,
} from '../actions';

const initialState = {
  smurfs: [],
  error: '',
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SMURF_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [],
        isLoading: false,
        error: '',
      };
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case GET_SMURFS_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
        error: '',
      };
    case GET_SMURFS_FAILURE:
      return {
        ...state,
        smurfs: [],
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
