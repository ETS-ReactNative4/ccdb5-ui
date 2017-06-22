# Consumer Complaint Database - 5.0

[![Build Status](https://travis-ci.org/cfpb/ccdb5-ui.svg?branch=master)](https://travis-ci.org/cfpb/ccdb5-ui)
[![Coverage Status](https://coveralls.io/repos/github/cfpb/ccdb5-ui/badge.svg?branch=master)](https://coveralls.io/github/cfpb/ccdb5-ui?branch=master)

**Description**:  _Put a meaningful, short, plain-language description of what
this project is trying to accomplish and why it matters.
Describe the problem(s) this project solves.
Describe how this software can improve the lives of its audience._

#### Technology Stack
This application is written in JavaScript and [Less](http://lesscss.org) within
the [React](https://facebook.github.io/react/) framework.  It uses
[Webpack](http://webpack.github.io/docs/) at runtime to manage module loading.

The code is written with the [ES6](http://es6-features.org/) feature set
of JavaScript. Backwards compatibility is achieved by compiling the script with
[Babel](https://babeljs.io/) prior to using it within the browser.

Unit testing of the application is performed within
[Jest](https://facebook.github.io/jest/) with
[Enzyme](http://airbnb.io/enzyme/index.html) providing support for event testing.

[npm](https://www.npmjs.com/) is used to manage the build/test/deploy cycle.

The `ccdb5_ui` (note the underscore) directory contains a thin [Django](https://www.djangoproject.com/) 
implementation that allows it to be used as a plugin for
[CFPB's public website](https://github.com/cfpb/cfgov-refresh).

#### Status
This is so pre-alpha it is omega

#### Screenshot
TODO

## Dependencies

This application depends on the following third-party components:

1. [Capital Framework](https://cfpb.github.io/capital-framework/) - CFPB standard styling and controls
1. [History](https://github.com/reacttraining/history) - Integrating the address bar with the application

## Installation

Detailed instructions on how to install, configure, and get the project running
are in the [INSTALL](INSTALL.md) document.

## Configuration

Please see the subsection Configuring in [INSTALL](INSTALL.md#configuring)

## Usage

#### Developing code
To run the app in development mode:

```bash
npm start
```

Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

Enter `Control-C` to exit development mode

#### Build deployment package
To build the app for production to the build folder:

```bash
npm run build
```

It bundles React in production mode and optimizes the build for the
best performance.

## How to test the software

#### Unit testing
To launch the test runner in interactive watch/test mode:

```bash
npm test
```

Enter `Control-C` to exit interactive watch mode

#### Browser Testing

`TODO`

## Known issues

The [Issue Tracker](https://github.com/cfpb/ccdb5-ui/issues) contains the most
up to date status of issues or bugs with this repository.

## Getting help

If you have questions, concerns, bug reports, etc, please file an issue in this
repository's [Issue Tracker](https://github.com/cfpb/ccdb5-ui/issues).

## Getting involved

[CONTRIBUTING](CONTRIBUTING.md).

----

## Open source licensing info
1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)


----

## Links that were helpful

#### React-Redux
https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree
https://medium.com/lexical-labs-engineering/redux-best-practices-64d59775802e
https://medium.com/@kylpo/redux-best-practices-eef55a20cc72
https://github.com/markerikson/react-redux-links/blob/master/tips-and-best-practices.md
https://getstream.io/blog/react-redux-best-practices-gotchas/
https://tech.affirm.com/redux-patterns-and-anti-patterns-7d80ef3d53bc

