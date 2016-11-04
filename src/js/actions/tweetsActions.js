import axios from 'axios';

const fetchTweets = () => {
  return (dispatch) => {
    axios.get('http://rest.learncode.academy/api/test123/tweets')
    .then((response) => {
      dispatch({ type: 'FETCH_TWEETS_FULFILLED', payload: response.data });
    })
    .catch((err) => {
      dispatch({ type: 'FETCH_TWEETS_REJECTED', payload: err });
    })
  }
}

const addTweet = (id, text) => {
  return {
    type: 'ADD_TWEET',
    payload: { id, text },
  }
}

const updateTweet = (id, text) => {
  return {
    type: 'UPDATE_TWEET',
    payload: { id, text },
  }
}

const deleteTweet = (id) => {
  return {
    type: 'DELETE_TWEET',
    payload: { id },
  }
}

export { fetchTweets, addTweet, updateTweet, deleteTweet };
