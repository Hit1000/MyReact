import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import {Login, Profile} from './components/'


function App() {

  return (
    <>
    <div>hello</div>
    <UserContextProvider>  
        <Login />
        <Profile />
    </UserContextProvider>
    </>
  )
}

export default App
