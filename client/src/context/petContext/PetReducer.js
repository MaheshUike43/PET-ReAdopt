const PetReducer = (state, action) => {
    switch (action.type) {
      case "GET_PET_START":
        return {
          pets: [],
          isFetching: true,
          error: false,
        };
      case "GET_PET_SUCCESS":
        return {
          pets: action.payload,
          isFetching: false,
          error: false,
        };
      case "GET_PET_FAILURE":
        return {
          pets: [],
          isFetching: false,
          error: true,
        };
      case "GET_PETS_START":
        return {
          pets: [],
          isFetching: true,
          error: false,
        };
      case "GET_PETS_SUCCESS":
        return {
          pets: action.payload,
          isFetching: false,
          error: false,
        };
      case "GET_PETS_FAILURE":
        return {
          pets: [],
          isFetching: false,
          error: true,
        };
      case "CREATE_PET_START":
        return {
          ...state,
          isFetching: true,
          error: false,
        };
      case "CREATE_PET_SUCCESS":
        return {
          pets: [...state.pets, action.payload],
          isFetching: false,
          error: false,
        };
      case "CREATE_PET_FAILURE":
        return {
          ...state,
          isFetching: false,
          error: true,
        };
      case "UPDATE_PET_START":
        return {
          ...state,
          isFetching: true,
          error: false,
        };
      case "UPDATE_PET_SUCCESS":
        return {
          pets: state.pets.map(
            (pet) => pet._id === action.payload._id && action.payload
          ),
          isFetching: false,
          error: false,
        };
      case "UPDATE_PET_FAILURE":
        return {
          ...state,
          isFetching: false,
          error: true,
        };
      case "DELETE_PET_START":
        return {
          ...state,
          isFetching: true,
          error: false,
        };
      case "DELETE_PET_SUCCESS":
        return {
          pets: state.pets.filter((pet) => pet._id !== action.payload),
          isFetching: false,
          error: false,
        };
      case "DELETE_PET_FAILURE":
        return {
          ...state,
          isFetching: false,
          error: true,
        };
      default:
        return { ...state };
    }
  };
  
  export default PetReducer;