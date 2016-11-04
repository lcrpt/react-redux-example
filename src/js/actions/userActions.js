const fetchUser = () => {
  return {
    type: 'FETCH_USER_FULFILLED',
    payload: {
      name: 'Léopold',
      age: 23,
    }
  }
}

const setUserName = (name) => {
  return {
    type: 'SET_USER_NAME',
    payload: name,
  }
}

const setUserAge = (age) => {
  return {
    type: 'SET_USER_AGE',
    payload: age,
  }
}

export { fetchUser, setUserName, setUserAge };
