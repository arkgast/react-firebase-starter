# React Firebase Starter

[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/react-firebase-starter)

Sometimes start a new project is hard that's why this project becomes a reality.
No configuration is needed but everything is here so you can improve or change anything you want.

Everything is optimized to bring you and your users the best experience developing and using it.

The project is running at: https://react-firebase-starter-d0953.firebaseapp.com/

## Installation

    $ git clone https://github.com/arkgast/react-firebase-starter
    $ cd react-firebase-starter
    $ yarn || npm install

> To install dependencies **yarn** is recommended to install it just run `npm install yarn -g`

### Develop
    $ npm start

### Deploy
    $ npm run build
    $ firebase deploy

    # Start firebase local server to test if everything is right
    $ firebase serve --port 9000

> In order to deploy you have to change the default project id to your own in `.firebaserc`
in this case the id is **react-firebase-starter-d0953**. Check out this [docs][firebase-hosting]

## Usage

    $ npm run lint   # lint js and scss
    $ npm start      # start dev server
    $ npm start:dash # start dev server with eye candy dashboard
    $ npm run build  # prepare to deploy
    $ npm run deploy # deploy to firebase

## Features
- [x] [React][react]
- [ ] Redux
- [x] React Router v4 (with animated transitions)
- [ ] Firebase authentication
- [ ] Jest
- [x] [Webpack 2][webpack]
- [x] ES6 - Modern Javascript syntax via [babel][babel]
- [x] SASS support
- [x] Autoprefix CSS via [autoprefixer][autoprefixer]
- [x] Pack same CSS media query rules into one via [postcss][postcss]
- [x] Automatic HTML generation
- [x] ES6 and SASS linting via [eslint][eslint] and [stylelint][stylelint]
- [x] Split webpack configuration in development and production
- [x] Cached on startup so make next compilation faster
- [x] Great application [organization][app-organization]

#### Development
- [x] Run local server via [webpack-dev-server][webpack-dev-server]
- [x] Hot reloading via [react-hot-reloader][react-hot-loader] and [HMR][hot-module-replacement]

#### Production
- [x] Provides an offline experience via [offline-plugin][offline-plugin]
- [x] Separate CSS files via [extract-text-webpack-plugin][extract-text]
- [x] Firebase deployment via [firebase][firebase-hosting]
- [x] Code-splitting and async chunk loading
- [x] Compressed assets files

[firebase-hosting]: https://firebase.google.com/docs/hosting/quickstart
[react]: https://facebook.github.io/react
[webpack]: https://webpack.js.org/configuration
[babel]: https://babeljs.io/
[autoprefixer]: https://github.com/postcss/autoprefixer
[postcss]: https://github.com/postcss/postcss-loader
[eslint]: https://eslint.org
[stylelint]: https://github.com/stylelint/stylelint
[webpack-dev-server]: https://github.com/webpack/webpack-dev-server
[react-hot-loader]: https://github.com/gaearon/react-hot-loader
[hot-module-replacement]: https://webpack.js.org/guides/hot-module-replacement
[offline-plugin]: https://github.com/NekR/offline-plugin
[extract-text]: https://github.com/webpack-contrib/extract-text-webpack-plugin
[app-organization]: https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1
