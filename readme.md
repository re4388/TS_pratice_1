
## Learn TS

## setup for the project
1. `npm i -g typescript`  (if you don't have ts installed globally)
2. `tsc --V` to check version
3. in root, use `tsc index.ts` to transpile
4. use `tsconfig.json` to setup watch, transpile target
5. note: we usually need `DOM` api and `ES2017` js to let TS to transpile your code, so we set lib, add if anything else you need.
6. use `npm i -D @types/lodash` to get `lodash` TS code intelligent
7. if u set watch, type `tsc` then u get auto-compile
8. just use `node index.js` to run code
9. If you want to use ES moduel import & export, check below Urigo repo


## reference resources
1. [TypeScript - The Basics - YouTube](https://www.youtube.com/watch?v=ahCwqrYpIuM)
2. [Urigo/typescript-node-es-modules-example: Latest Typescript and Node - as bare-bone as possible example app](https://github.com/Urigo/typescript-node-es-modules-example)

## more resources
1. Deep Dive https://github.com/basarat/typescript-book
2. TypeScript Docs https://www.typescriptlang.org/
