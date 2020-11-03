import 'materialize-css/dist/css/materialize.min.css'
import reduxThunk from 'redux-thunk'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'


import reducers from "./reducers"

const store = createStore(() =>  [], {},applyMiddleware(reduxThunk))
ReactDOM.render(
    <Provider store ={store}><App /></Provider>,
    document.querySelector('#root')
)
