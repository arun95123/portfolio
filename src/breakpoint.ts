export enum Breakpoint {
    sm = 375,
    md = 576,
    lg = 768,
    xl = 1024,
    xxl = 1200,
  }
  export enum BreakpointMax {
    xs = Breakpoint.sm - 0.02,
    sm = Breakpoint.md - 0.02,
    md = Breakpoint.lg - 0.02,
    lg = Breakpoint.xl - 0.02,
    xl = Breakpoint.xxl - 0.02,
  }
  
  export const mq = {
    sm: `@media (min-width: ${Breakpoint.sm}px)`,
    md: `@media (min-width: ${Breakpoint.md}px)`,
    lg: `@media (min-width: ${Breakpoint.lg}px)`,
    xl: `@media (min-width: ${Breakpoint.xl}px)`, // Header transitions to desktop version at this breakpoint
    xxl: `@media (min-width: ${Breakpoint.xxl}px)`,
  } as const;
  
  // Do not use these media queries in components within ComCom; these are to be used only in external apps still relying on max-width breakpoints
  export const mqd = {
    xs: `@media (max-width: ${BreakpointMax.xs}px)`,
    sm: `@media (max-width: ${BreakpointMax.sm}px)`,
    md: `@media (max-width: ${BreakpointMax.md}px)`,
    lg: `@media (max-width: ${BreakpointMax.lg}px)`, // Header transitions to desktop version at this breakpoint
    xl: `@media (max-width: ${BreakpointMax.xl}px)`,
  } as const;
  