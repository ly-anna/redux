// import { createStore } from './createStore'
import { createStore } from 'redux'
import './styles.css'
import { rootReducer } from './redux/rootReducer'
import { increment, decrement } from './redux/actions'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

// тут мы rootReduser не вызываем, а передаем как референс
const store = createStore(rootReducer, 0)


addBtn.addEventListener('click', () => {
  store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
  setTimeout(() => {
    store.dispatch(increment())
  }, 2000)
})

store.subscribe(() => {
  const state = store.getState()

  counter.textContent = state
})

store.dispatch({ type: 'INIT_APPLICATION' })

themeBtn.addEventListener('click', () => {
  // document.body.classList.toggle('dark')
})



// render()