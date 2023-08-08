const AdoptRequestReducer = (state, action) => {
    switch (action.type) {
      case "GET_AREQUESTS_START":
        return {
          arequests: [],
          isFetching: true,
          error: false,
        };
      case "GET_AREQUESTS_SUCCESS":
        return {
          arequests: action.payload,
          isFetching: false,
          error: false,
        };
      case "GET_AREQUESTS_FAILURE":
        return {
          arequests: [],
          isFetching: false,
          error: true,
        };
      case "CREATE_AREQUEST_START":
        return {
          ...state,
          isFetching: true,
          error: false,
        };
      case "CREATE_AREQUEST_SUCCESS":
        return {
          arequests: [...state.arequests, action.payload],
          isFetching: false,
          error: false,
        };
      case "CREATE_AREQUEST_FAILURE":
        return {
          ...state,
          isFetching: false,
          error: true,
        };
      case "UPDATE_AREQUEST_START":
        return {
          ...state,
          isFetching: true,
          error: false,
        };
      case "UPDATE_AREQUEST_SUCCESS":
        return {
          arequests: state.arequests.map(
            (arequest) => arequest._id === action.payload._id && action.payload
          ),
          isFetching: false,
          error: false,
        };
      case "UPDATE_AREQUEST_FAILURE":
        return {
          ...state,
          isFetching: false,
          error: true,
        };
      case "DELETE_AREQUEST_START":
        return {
          ...state,
          isFetching: true,
          error: false,
        };
      case "DELETE_AREQUEST_SUCCESS":
        return {
          arequests: state.arequests.filter((arequest) => arequest._id !== action.payload),
          isFetching: false,
          error: false,
        };
      case "DELETE_AREQUEST_FAILURE":
        return {
          ...state,
          isFetching: false,
          error: true,
        };
      default:
        return { ...state };
    }
  };
  
  export default AdoptRequestReducer;