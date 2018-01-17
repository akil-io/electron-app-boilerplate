# Lateset Electron React Application starter kit
_Electron, React, Redux, Webpack -- Modern and up-to-date

### Main features
* Latest React, Redux, and Webpack 3
* Uses ES6 natively without babel transpilation thanks to modern Electron environments
* Minified with babel-minify
* Uses react-router-dom (React Router v4) with connected-react-router to sync with Redux (uni-directional, use react-router directly)
* SASS using CSS Modules

### To get started:
* Run `npm install`

##### Development
* Run `npm run build` for rebuild sources.
* Run `npm run dev` to start Electron.

###### One Shot
* Run `npm run package` to have webpack compile your application into `dist/bundle.js` and `dist/index.html`, and then an electron-packager run will be triggered for the current platform/arch, outputting to `builds/`
