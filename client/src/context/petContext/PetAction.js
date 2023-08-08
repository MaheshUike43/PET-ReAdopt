export const getPetStart = () => ({
    type: "GET_PET_START",
  });
  
  export const getPetSuccess = (pet) => ({
    type: "GET_PET_SUCCESS",
    payload: pet,
  });
  
  export const getPetFailure = () => ({
    type: "GET_PET_FAILURE",
  });

export const getPetsStart = () => ({
    type: "GET_PETS_START",
  });
  
  export const getPetsSuccess = (pets) => ({
    type: "GET_PETS_SUCCESS",
    payload: pets,
  });
  
  export const getPetsFailure = () => ({
    type: "GET_PETS_FAILURE",
  });
  
  export const createPetStart = () => ({
    type: "CREATE_PET_START",
  });
  
  export const createPetSuccess = (pet) => ({
    type: "CREATE_PET_SUCCESS",
    payload: pet,
  });
  
  export const createPetFailure = () => ({
    type: "CREATE_PET_FAILURE",
  });
  
  
  export const updatePetStart = () => ({
    type: "UPDATE_PET_START",
  });
  
  export const updatePetSuccess = (pet) => ({
    type: "UPDATE_PET_SUCCESS",
    payload: pet,
  });
  
  export const updatePetFailure = () => ({
    type: "UPDATE_PET_FAILURE",
  });
  
  export const deletePetStart = () => ({
    type: "DELETE_PET_START",
  });
  
  export const deletePetSuccess = (id) => ({
    type: "DELETE_PET_SUCCESS",
    payload: id,
  });
  
  export const deletePetFailure = () => ({
    type: "DELETE_PET_FAILURE",
  });