let petID = 0

export const addPetsAction = (petArray) => {
  return {
    type: 'ADD_PETS',
    id: petID++,
    pets: petArray
  }
}

