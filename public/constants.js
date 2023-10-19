const breakpoints = {
  sp: "735px",
  tablet: "768px",
  large: "1200px",
  pc: "1201px",
};

export const devices = {
  sp: `max-width: ${breakpoints.sp}`,
  tablet: `min-width: ${breakpoints.tablet}`,
  large: `max-width: ${breakpoints.large}`,
  pc: `min-width: ${breakpoints.pc}`,
};
