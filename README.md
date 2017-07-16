<h1 align="center">TweetSplit</h1>
<p align="center"><a href="https://travis-ci.org/nguyenhuedang/tweet-split"><img src="https://travis-ci.org/nguyenhuedang/tweet-split.svg?branch=master"></a>
</p>

# About the project
Tweet Split is a web application that allow user to split the message into many parts, each part has a maximum character limit (default is 50).

## Live demo & documents

Tweet Split has been hosted by [GitHub Pages](https://pages.github.com/)
- The application: https://nguyenhuedang.github.io/tweet-split/app/
- The API docs & demo: https://nguyenhuedang.github.io/tweet-split/src/docs.html


## The technology stacks

The project is developed under [Polymer library](https://www.polymer-project.org/). The unit of development is components. Every component has it's own template, methods, events and properties. I choose Polymer because the Polymer team provides libraries, tools and patterns to help developers build modern Progressive Web Apps, taking full advantage of cutting-edge platform features like [Web Components](http://webcomponents.org/), [Service Workers](http://www.html5rocks.com/en/tutorials/service-worker/introduction/) and [HTTP/2](https://http2.github.io/).

## Continuous integration

 After each commit, the [Tweet Split Travis](https://travis-ci.org/nguyenhuedang/tweet-split) would be triggers for the following tasks:
 1. Lint the code
 2. Run unit tests
 3. Build the application
 4. Deploy the application and documents to Github Pages

# Develop

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create builds of the application in the `build/` directory, optimized to be served in production. You can then serve the built versions by giving `polymer serve` a folder to serve from:

```
$ polymer serve build/default
```

## Running Tests

```
$ polymer test
```

The application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run Tweet Split's test suite locally.
