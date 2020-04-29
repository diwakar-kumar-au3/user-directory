import { post, del } from "../action/action";

const initState = [];
const rootreducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return post(action.payload);
    case "REMOVE_USER":
      return del(action.payload);
    default:
      return state;
  }
};

export default rootreducer;
