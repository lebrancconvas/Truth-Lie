import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export const state = () => ({
  statements: []
});

export const mutations = {
  ADD_STATEMENT(state, statement) {
    const newStatement = { id: uuidv4(), ...statement };
    state.statements.push(newStatement);
    const url = "http://localhost:8000/api/v1/statements";
    axios.post(url, newStatement)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
        console.log(`[ERROR] Posting Data Error.`);
      })
  }
};
