import axios from "axios";

const api = axios.create({
  baseURL:'https://jsonplaceholder.typicode.com/',
  
});


api.interceptors.request.use(function (config) {
  console.log(config);
  config.auth = {
    username:'jack@mail.com',
    password:'12345.com'
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Authorization: `Basic ${base64('username' + ':' + 'password')}`

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

      api.get('posts')
      .then(response => dispatch({
        type:'SET_DATA',
        posts:response.data
      })).catch(error => dispatch({
        type:'ERROR',
        error:'Error'
      }));

      
      // axios.get("https://jsonplaceholder.typicode.com/postsssss")
      // .then(response => console.log(response))
      // .catch(error => console.log(error.response));

      // axios.post('https://jsonplaceholder.typicode.com/posts',{name:"John"})
      // .then(response => console.log(response));

      // axios({
      //   method: "post",
      //   url: "https://jsonplaceholder.typicode.com/posts",
      //   headers:{
      //     Authorization:'token'
      //   },
      //   data: {
      //     name:'John'
      //   }
      // })
      //   .then((response) => {
      //     console.log(response);
      //     // dispatch({
      //     //   type: "SET_DATA",
      //     //   posts: response.data,
      //     // });
      //   })
      //   .catch((error) => {
      //     dispatch({
      //       type: "ERROR",
      //       error: 'error',
      //     });
      //   });

      // fetch("https://jsonplaceholder.typicode.com/posts")
      //   .then((response) => {
      //       if(response.ok){
      //           return response.json();
      //       }
      //       throw new Error("Error");
      //   })
      //   .then((json) => {
      //     dispatch({
      //       type: "SET_DATA",
      //       posts: json
      //     });
      //   })
      //   .catch((error) => {
      //     dispatch({
      //       type: "ERROR",
      //       error: error.message
      //     });
      //   });
    }, 3000);
  };
}
