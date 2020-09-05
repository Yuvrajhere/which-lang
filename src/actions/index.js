import axios from "axios";

export const handleSubmit = inputText => (dispatch) => {
  dispatch({ 
    type: "SET_IS_LOADING",
    payload: inputText
  });

  const encoded = encodeURI(inputText.toLowerCase());

  axios
    .get(`http://api.languagelayer.com/detect?access_key=bb087098dcc5fc5d5e247addfad7a15f&query=${encoded}`)
    .then(res => {
      console.log(res.data);
      if(res.data.success) {
        dispatch({
          type: "SET_RESULT",
          payload: res.data.results,
        });
      } else {
        dispatch({
          type: "SET_ERROR",
          payload: "unsuccessful attempt",
        });
      }
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: "SET_ERROR",
        payload: err.Error,
      });
    })
}