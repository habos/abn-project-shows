# abn-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Project archecture

### Frameworks

I used the new Vue recommneded `create vue@3` to create a [Vite](https://vitejs.dev/) powered Vue 3 project.  Vite gives a few advantages over Webpack such as an exteremly fast startup and hot-module replacement speed.  I also chose to use the Composable API within Vue 3 to allow for the use of composibles and refs which I utilized greatly in maintaining reactivity.

### Included Libraries

I did not add many libraries to the base template provided by `create vue@3`.  I used axios instead of fetch for the API calls because I am confortable with it.  I also added libraries for the Jest testing including [Vue Test Utils](https://test-utils.vuejs.org/) and all its required dependencies for this project.

### Folder structure

Folder structure is pretty basic.  I organized the components in the components folder by what they are used for and added a tests folder.  Added a composibles folder for the composible and types for the `Recipe` interface.  Everything else is boilerplate for Vue.

### Handling Application State

Application state is handled entirely by the Vue 3 composible.  In it I have a `recipes` variable that will contain all current recipes no matter where you are in the application.

## Features

The homescreen containes a searchbar or dropdowns dependent on which knob you select.  The live search feature allows for a constant refresh of recipes as the input is updated.  When you click on a recipe you will be brough to that recipe's description page.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Test with [Vue Jest](https://github.com/vuejs/vue-jest)

```sh
npm run tests
```
