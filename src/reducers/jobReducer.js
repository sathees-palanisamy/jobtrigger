import _ from 'lodash';
import {
  JOB_TRIGGER
} from '../actions/types';

const INITIAL_STATE = {jobSubmitStatus: ''};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
     case JOB_TRIGGER:
        return { ...state, jobSubmitStatus: action.payload}
    default:
      return state;
  }
}
