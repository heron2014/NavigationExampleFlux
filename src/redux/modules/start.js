const ON_START = 'ON_START';
// Reducer
const DEFAULT_STATE = {
  onStart: true
}

export default function start(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case ON_START:
      return {...state, onStart: true}
    default:
      return state
  }
}
