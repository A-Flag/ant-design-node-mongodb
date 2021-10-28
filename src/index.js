import React from 'react';
import ReactDOM from 'react-dom';
import{Provider} from 'react-redux'
import decode from 'jwt-decode'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./store";
import { syncInfoAc } from "./pages/Login/store/actionCreators";
const tk = localStorage.getItem('@#@TOKEN');
//解析token
if(tk){
  try{
      store.dispatch(syncInfoAc(decode(tk)));
  }catch{
      localStorage.removeItem('@#@TOKEN')
      window.location.href = '/login'
  }
}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
