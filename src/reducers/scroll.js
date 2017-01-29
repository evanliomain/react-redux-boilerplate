
export const scroll = (
  state = { scroll : 0 },
  action
) => {
  switch (action.type) {
  case 'SCROLL_CHANGE':
    return {
      ...state,
      scroll : action.scroll
    };

  case 'RELOAD':
    return state;

  default:
    return state;
  }
}
