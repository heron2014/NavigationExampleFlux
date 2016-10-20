import data from '../data/data.json';
const FETCH_PAGES = 'FETCH_PAGES';

// action creator
export function fetchPages() {
  return {
    type: FETCH_PAGES
  };
}

export default function pages(state = data, action) {
  switch (action.type) {
  case FETCH_PAGES:
    return state;
  default:
    return state;
  }
}
