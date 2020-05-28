import { getData as getDataAPI } from "../../api/goods";

const GET_DATA = "GET_DATA";
const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";

export const getDataAction = (query = "") => {
  return ((dispatch) => {
    dispatch({ type: GET_DATA });
    getDataAPI(query)
      .then(({ data }) => { 
        dispatch({
          type: GET_DATA_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.log("e", e);
      });
  });
};

export default (state = [], action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return [ ...action.payload ];
    default:
      return state;
  }
};
