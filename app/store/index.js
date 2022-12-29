import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export const state = () => ({
  statements: []
});

export const mutations = {
  ADD_STATEMENT(state, statement) {
    const newStatement = { id: uuidv4(), ...statement };
    switch(newStatement.lieStatement) {
      case("Statement 1"):
        newStatement.statement1.isLie = true;
        break;
      case("Statement 2"):
        newStatement.statement2.isLie = true;
        break;
      case("Statement 3"):
        newStatement.statement3.isLie = true;
        break;
      default:
        console.log("[ERROR] Invalid Lie Statement");
        break;
    }
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
  },
  RESET_STATEMENT(state) {

  }
};
