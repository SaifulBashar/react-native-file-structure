const INITIAL_STATE = {
  exampleTitle: "Old title"
};

export const example = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_TITLE":
      return {
        ...state,
        exampleTitle: action.payload
      };

    default:
      return state;
  }
};
