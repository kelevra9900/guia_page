declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';

declare module '*.scss' {
  const classes: { [key: string]: string};
  export default classes;
}

declare module '@styled-system/theme-get' {
  export function themeGet(path: string, fallback?: any): any;
}
declare module 'react-reveal' {
  export const Fade: React.FC;
}