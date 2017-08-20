# React Firebase Starter

The project is running at:

https://react-firebase-starter-d0953.firebaseapp.com/

## Installation

    $ git clone https://github.com/arkgast/react-firebase-starter
    $ cd react-firebase-starter
    $ yarn

### Develop
    $ npm start

### Deploy
    $ npm run build
    $ firebase deploy

    # Start firebase local server to test if everything is right
    $ firebase serve --port 9000

> In order to deploy you have to change the default project id to your own in `.firebaserc`
in this case the id is **react-firebase-starter-d0953**. Check out this [docs][firebase-hosting]

## Features
- [x] [React][react]
- [ ] Redux
- [ ] React Router v4
- [ ] Firebase
- [ ] Jest
- [x] [Webpack 2][webpack]
- [x] ES6 - Modern Javascript syntax via [babel][babel]
- [x] SASS support
- [x] Modern CSS syntax via [postcss][postcss]
- [x] Pack same CSS media query rules into one via [postcss][postcss]
- [x] Automatic HTML generation
- [x] ES6 and SASS linting via [eslint][eslint] and [stylelint][stylelint]
- [x] Split webpack configuration in development and production

#### Development
- [x] Develop via [webpack-dev-server][webpack-dev-server]
- [x] Hot reloading via [react-hot-reloader][react-hot-loader] and [HMR][hot-module-replacement]

#### Production
- [x] Provides an offline experience via [offline-plugin][offline-plugin]
- [x] Separate CSS files
- [x] Firebase deployment
- [x] Code-splitting and async chunk loading
- [x] Compressed assets files

## Commands
    $ npm run lint   # lint js and scss
    $ npm start      # start dev server
    $ npm start:dash # start dev server with eye candy dashboard
    $ npm run build  # prepare to deploy
    $ npm run deploy # deploy to firebase

[firebase-hosting]: https://firebase.google.com/docs/hosting/quickstart
[react]: https://facebook.github.io/react
[webpack]: https://webpack.js.org/configuration
[babel]: https://babeljs.io/
[postcss]: https://github.com/postcss/postcss-loader
[eslint]: https://eslint.org
[stylelint]: https://github.com/stylelint/stylelint
[webpack-dev-server]: https://github.com/webpack/webpack-dev-server
[react-hot-loader]: https://github.com/gaearon/react-hot-loader
[hot-module-replacement]: https://webpack.js.org/guides/hot-module-replacement
[offline-plugin]: https://github.com/NekR/offline-plugin
