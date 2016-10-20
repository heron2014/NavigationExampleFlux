const SELECT_PAGE = 'SELECT_PAGE';

export function selectPage(page) {
  return {
    type: SELECT_PAGE,
    payload: page.title
  };
}


export default function select(state = '', action) {
  switch (action.type) {
  case SELECT_PAGE:
    return action.payload;
  default:
    return state;
  }
}
