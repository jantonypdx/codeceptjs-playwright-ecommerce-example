# codeceptjs-playwright-ecommerce-example

This repository contains web UI automated tests for testing the website: [automationpractice.com](http://automationpractice.com/). This website is an example eCommerce website that is a good target for trying out automated tests.

This repository is built using [CodeceptJS](https://codecept.io/) and [Playwright](https://playwright.dev/).

[Node Task List](https://www.npmjs.com/package/ntl) is also installed to make running scripts defined in package.json easier.

### CodeceptJS and Playwright
[CodeceptJS](https://codecept.io) is an end-to-end testing framework for Node.js. It's useful for developing scenario-driven automated tests. It supports two different types of tests:
* Javascript [Scenario tests](https://codecept.io/basics/#architecture) (see `./tests/*.tests.js` files)
* Text-based [BDD Feature tests](https://codecept.io/bdd/#what-is-behavior-driven-development) (see `./features/*.feature` files)

This gives the flexibility to write both code-based tests for developers and text-based tests for both developers and business roles (i.e. product owners, stakeholders, business analysts).

CodeceptJS supports [many different](https://codecept.io/basics/#architecture) Node.js-based test automation frameworks. [Playwright](https://playwright.dev/) was chosen for its features, speed, and simplicity.

## Installation

1. Clone this repository.
2. Run `npm install`

## Usage

There are seven scripts defined in package.json. You can easily see & run any of these scripts by running Node Task List:  
`npx ntl`
```
⬢  Node Task List
? Select a task to run: (Use arrow keys)
  start
  tests:desktop
  tests:tablet
  tests:mobile
  features:desktop
  features:tablet
❯ features:mobile
```
You can also pass in "-i" or "--info" to Node Task List for full script content:  
`npx ntl -i`
```
⬢  Node Task List
? Select a task to run: (Use arrow keys)
             start › ntl
     tests:desktop › npx codeceptjs run --tests
      tests:tablet › npx codeceptjs run --tests -c codecept.conf.ipad.js
      tests:mobile › npx codeceptjs run --tests -c codecept.conf.iphone.js
  features:desktop › npx codeceptjs run --features
   features:tablet › npx codeceptjs run --features -c codecept.conf.ipad.js
❯  features:mobile › npx codeceptjs run --features -c codecept.conf.iphone.js
```

Scripts with "--tests" argument will run the code-based tests defined in `./tests` subdirectory.  
Scripts with "--features" argument will run the text-based BDD scenarios defined in `./features` subdirectory.

The "-c" argument is used to select different configuration files. By using different configurations, the same tests and features can be run using desktop, tablet, and mobile viewports (using Chrome device emulation).



## License

[MIT](./LICENSE.md)
