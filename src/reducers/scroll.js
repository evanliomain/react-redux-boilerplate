import { linear } from '../helper/transform';

const topMax  = 250,
      topMin  = 50,
      topDiff = topMax - topMin;

export const scroll = (
  state = { scroll : 0 },
  action
) => {
  switch (action.type) {
  case 'SCROLL_CHANGE':
    return {
      ...state,
      scroll : action.scroll,
      ...getHeaderScroll(state, action.scroll)
    };

  case 'RELOAD':
    return {
      state,
      ...getHeaderScroll(state, state.scroll)
    };

  default:
    return {
      state,
      ...getHeaderScroll(state, state.scroll)
    };
  }
};

function getHeaderScroll(state, position) {
  if (topDiff < position) {
    return state;
  }

  return {
    headerTranslate            : -1 * position,
    headerLogoScale            : linear(1, 0.2, topDiff, position),
    headerLogoWrapperWidth     : linear(250, 50, topDiff, position),
    headerLogoWrapperTranslate : linear(55, 70, topDiff, position),
    headerTitleScale           : linear(1, 0.4, topDiff, position)
  };
}
