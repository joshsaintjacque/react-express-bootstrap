import { GET_EXAMPLES } from './constants';

export const getExamples = () => dispatch => {
  return fetch('/api/examples')
    .then(res => res.json())
    .then(examples => dispatch({ type: GET_EXAMPLES, payload: examples }));
}