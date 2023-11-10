// custom-typed.d.ts
declare module 'typed.js' {
    export interface TypedOptions {
      // Define the expected type definitions here
    }
  
    export class Typed {
      constructor(element: string, options: TypedOptions);
    }
  }
  