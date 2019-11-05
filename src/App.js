import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import api from './api';

// export const fetchPosts = () => {
//   return async dispatch => {
//       const {data} = await jsonPlaceHolder.get('/posts');
//       dispatch({
//           type: 'FETCH_POSTS',
//           payload: data
//       });
//   };
// }; 

function App() {
  const getCountries = async () => {
    const  {data} = await api.get('/api/data/countries')
    console.log(data);
  }

  useEffect(()=> {
    getCountries()
  }, [])

  return (
    <div className="App">
      hola q tal
      {process.env.NODE_ENV}
    </div>
  );
}

export default App;
