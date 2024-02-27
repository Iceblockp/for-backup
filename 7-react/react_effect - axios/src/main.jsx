import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DataContextProvider from './components/contexts/DataContext.jsx'
import axios from 'axios'
import { baseUrl } from './config/config.js'

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <DataContextProvider>
      <App/>
    </DataContextProvider>
)

// const str ="hein htet zan";
// const nums = [1,3,2,2];
// console.log(Array.from(str));
// console.log(Array.from(nums, el => el*2));

// console.log(Array.from({length:5}), (_,index) => index);

// console.log(axios);

// axios.get(baseUrl+"/courses").then( (res) => {
//   console.log(res.data);
//   console.log(res.status);
// })


const getCourse = async () => {
  const res = await axios.get(baseUrl + "/courses");
  console.log(res.data);
  console.log(res.status);
}

