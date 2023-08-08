export const getARequetsStart = () => ({
    type: "GET_AREQUESTS_START",
  });
  
  export const getARequestsSuccess = (adoptRequests) => ({
    type: "GET_AREQUESTS_SUCCESS",
    payload: adoptRequests,
  });
  
  export const getARequestsFailure = () => ({
    type: "GET_AREQUESTS_FAILURE",
  });
  
  export const createARequestStart = () => ({
    type: "CREATE_AREQUEST_START",
  });
  
  export const createARequestSuccess = (adoptRequest) => ({
    type: "CREATE_AREQUEST_SUCCESS",
    payload: adoptRequest,
  });
  
  export const createARequestFailure = () => ({
    type: "CREATE_AREQUEST_FAILURE",
  });
  
  
  export const updateARequestStart = () => ({
    type: "UPDATE_AREQUEST_START",
  });
  
  export const updateARequestSuccess = (adoptRequest) => ({
    type: "UPDATE_AREQUEST_SUCCESS",
    payload: adoptRequest,
  });
  
  export const updateARequestFailure = () => ({
    type: "UPDATE_AREQUEST_FAILURE",
  });
  
  export const deleteARequestStart = () => ({
    type: "DELETE_AREQUEST_START",
  });
  
  export const deleteARequestSuccess = (id) => ({
    type: "DELETE_AREQUEST_SUCCESS",
    payload: id,
  });
  
  export const deleteARequestFailure = () => ({
    type: "DELETE_AREQUEST_FAILURE",
  });