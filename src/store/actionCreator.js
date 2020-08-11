export function incCount() {
  return {
    type: "INC",
  };
}

export function incCountAsync() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: "INC",
      });
    }, 1000);
  };
}

export function loadPosts() {
  return (dispatch) => {
    dispatch({
      type: "LOAD",
    });
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            if(response.ok){
                return response.json();
            }
            throw new Error("Error");
        })
        .then((json) => {
          dispatch({
            type: "SET_DATA",
            posts: json
          });
        })
        .catch((error) => {
          dispatch({
            type: "ERROR",
            error: error.message
          });
        });
    }, 3000);
  };
}
