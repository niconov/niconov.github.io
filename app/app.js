import { createStore } from 'redux'

/**
 * Это редюсер - чистая функция в формате(state, action) => state.
 * Это описывает то, как действие преобразовывает состояние в следующее состояние
 *
 * Формат состояния зависит от вас: это может быть примитивом,
 * массивом, объектом
 * или даже структурой данных Immutable.js.
 * Важно только одно, вы не должны изменять объект состояния
 * напрямую, а возвращать
 * новый объект, если состояние изменилось
 *
 * В этом примере мы используем `switch` и строки, но вы можете
 * использовать хелпер, который следует другому соглашению
 * (например, function maps), если это имеет смысл для вашего
 * проекта.
 */
function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

// Создаем хранилище Redux которое хранит состояние вашего приложения.
// Его API - { subscribe, dispatch, getState }.
let store = createStore(counter)

// Вы можете подписаться на обновления вручную или использовать биндинги к вашему view layer.
store.subscribe(() =>
  console.log(store.getState())
)

// Единственный способ изменить внутреннее состояние - это вызвать действие
// Действия могут быть сериализированы, залогированы или сохранены и далее воспроизведены.
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1

window.onload = function () {
}
