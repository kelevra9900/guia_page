declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';

declare module '*.scss' {
  const classes: { [key: string]: string};
  export default classes;
}