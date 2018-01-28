import { GET_EXAMPLES } from '../actions/constants';

const exampleReducer = (state = [], { type, payload }) => {
    switch (type) {
      case GET_EXAMPLES:
        return payload;
      default:
        return state;
    }
}

export default exampleReducer;