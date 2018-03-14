export const changeTitle = ({ title }) => {
  return dispatch => {
    dispatch({ type: "CHANGE_TITLE", payload: title });
  };
};
