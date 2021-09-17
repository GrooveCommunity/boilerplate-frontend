/// <reference types="react-scripts" />

declare module '*.svg' {
  const content: string;
  export default content;
}

declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  devToolsExtension?: () => any;
}
