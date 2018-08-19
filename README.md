# LF Commerce

<p>
  <img src="https://img.shields.io/badge/React-16.4.2-blue.svg">
  <img src="https://img.shields.io/badge/Redux-4.0.0-purple.svg?colorB=764abc">
  <img src="https://img.shields.io/badge/Nodejs-8.10.0-green.svg?colorB=90c53f">
  <img src="https://img.shields.io/badge/Express-4.16.3-black.svg?colorB=47535e">
</p>

The goal of this project is to develop an open source ecommerce system written in ReactJS + ExpressJS. LF Commerce will provide a Plug-And-Play experience to users with minimal programming background. 

![Alt Screenshot](./screenshot.png "Screenshot")


## Installation

**Yarn**
```console
yarn install
```

**NPM**

```console
npm install
```


## How to run this?

**Yarn**

```console
yarn start
```

**NPM**

```console
npm start
```

## Unit Test

For every main directory (components, containers etc.), there should be a \_\_tests\_\_ directory for all unit test cases.
```console
yarn test [test_directory]
```


## How to contribute to this project?

Your contribution is appreicated. However, there is way of working to follow when you contributing to this project for better project management.

### 1. Always work on your own feature or bugfix branch.

You will need to follow the naming convention if it's a new feature:
**feature/xxx-xxx-xx**

or **bugfix/xxx-xxx-xx** if it's a bug fixing branch.

### #2. Always send your PR to **master** branch.

You should always BRANCH OUT from **master** branch and send PR back to **master** when it's ready for review.

### 3. Always run eslint

Before creating a PR, you should run:
```console
yarn eslint
```
to make sure all formatting or other issues have been properly fixed.

...
TBC

## License
LF Commerce is [Apache-2.0 licensed.](https://github.com/ccwukong/lfcommerce/blob/master/LICENSE)
