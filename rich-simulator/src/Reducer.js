export const initialState = {
  name: "",
  avatar_index:null,
};
export const actionTypes = {
  SET_USER_NAME: "SET_USER_NAME",
  SET_AVATAR_INDEX: "SET_AVATAR_INDEX",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_NAME:
      return {
        ...state,
        name: action.name,
      };
    case actionTypes.SET_AVATAR_INDEX:
      return {
        ...state,
        avatar_index: action.avatar_index,
      };
    default:
      return state;
  }
};

export default reducer;
