import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import { store } from './app/store'

function App() {


  return (
    <Provider store={store}>
      <div>redux</div>
      <AddTodo />
      <Todos />
    </Provider>
  )
}

export default App
