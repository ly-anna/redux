export function createStore(rootReducer, initialState) {
  // rootReducer- это функция
  // пользуемся мощью замыканий
  // создаем приватную переменную state

  
  let state = rootReducer(initialState, {type: '__INIT__'})
  const subscribers = []

  return {
    // action === {type: 'INCREMENT'}
    //action это обычный объект у которого есть поле type
    dispatch(action) {
      // в редюсер передаем предыдущее состояние и action
      // редюсер возвращает объект - получаем новое состояние,
      // прогнав его через редюсер
      state = rootReducer(state, action)
      subscribers.forEach(sub => sub())
    },
    subscribe(callback) {
      subscribers.push(callback)
    },
    getState(){ // с помощью геттера получаем текущее состояние
      return state
    }
  }
}