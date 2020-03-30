export function rootReducer(state, action) {
  //в зависимости от того, какой action меняем наше состояние state
  if (action.type === 'INCREMENT') {
    return state + 1
  } else if (action.type === 'DECREMENT'){
    return state - 1 
  }
  return state
}