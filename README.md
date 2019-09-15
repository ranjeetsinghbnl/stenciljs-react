# Stencil component in React App


This is a step by step guide, how we can use a stencil component in a React app. For more details you can also check the official [Framework integration guide](https://stenciljs.com/docs/react).

This project is created with [Create React App](https://github.com/facebook/create-react-app).

## Similar guides
I have created another framework integration guide to use stencil components

* [Stencil components in Vue](https://github.com/ranjeetsinghbnl/stenciljs-vue)
* [Stencil components in Angular](https://github.com/ranjeetsinghbnl/stenciljs-angular)
* [Stencil components in javascript](https://github.com/ranjeetsinghbnl/stenciljs-javascript)

In order to use the custom element library within the React app, the application must be modified to define the custom elements. This can all be done within the `index.js` file.

This example use the stencil component from the following project

* [Product & Cart showcase example](https://github.com/ranjeetsinghbnl/product-mgmt-stenciljs)

## Table of contents
* [Add the component to the dependencies](#add-the-component-to-the-dependencies )
* [Import the component](#import-the-components)
* [Consume the component](#consume-the-component)
* [Using component](#using-component)

## Add the component to the dependencies
Add the component to the app dependencies in `package.json`

```json
// package.json

"dependencies": {
  ...
  "@ranjeetsinghbnl/product-mgmt-stenciljs": "0.0.1"
}
```
or
Install it `npm install @ranjeetsinghbnl/product-mgmt-stenciljs`

## Import the component
import the component in the `main.js` file

```javascript
import {
  applyPolyfills,
  defineCustomElements as defineProductMgmtExp
} from '@ranjeetsinghbnl/product-mgmt-stenciljs/loader';
```

## Consume the component
Bind the custom elements to the window object

```javascript
applyPolyfills().then(() => {
  defineProductMgmtExp(window);
});
```

## Using component
Now The components should then be available in any of the React component

You can use it

```html
<mf-product-view></mf-product-view>
```

```html
<mf-product-cart></mf-product-cart>
```

To know more about the components. Please check the [Product & Cart showcase example](https://github.com/ranjeetsinghbnl/product-mgmt-stenciljs)


**Note: I have include the bootstrap 4 css to give style to the stencil components. Because they are open to design changes. Their is no style added to components i have used in the showcase**


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
