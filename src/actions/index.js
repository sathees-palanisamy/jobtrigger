import { ipcRenderer } from 'electron';
import { JOB_TRIGGER } from "./types";

export const jobTrigger = (parameter1,racfid,racfpwd) => dispatch => {
  ipcRenderer.send('mfjob:submit', parameter1,racfid,racfpwd);
  ipcRenderer.on('mfjob:complete', (event, results) => {
    console.log('results:' + results);
    dispatch({ type: JOB_TRIGGER, payload: results });
  });
};

