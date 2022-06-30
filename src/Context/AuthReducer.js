const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        loading: false,
        user: null,

        isFetching: true,

        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        loading: false,

        user: action.payload,
        isFetching: false,
        error: false,
      };

    case "LOGIN_FAILURE":
      return {
        loading: true,
        user: null,
        isFetching: false,
        error: true,
      };

    case "NOT_AUTH":
      return {
        loading: true,
      };
    case "AUTH":
      return {
        loading: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
