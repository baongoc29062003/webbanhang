import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {HomePage} from './Component/Home/HomePage'
import store from './store'
import { Provider } from 'react-redux'

function App() {
  

  return (
    <>
    <Provider store ={store} >
    <HomePage></HomePage>
    </Provider>
     
    </>
  )
}

export default App
