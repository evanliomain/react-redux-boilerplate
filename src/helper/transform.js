
export const linear = (start, end, diff, x) =>
  start - (start - end) * x / diff;
