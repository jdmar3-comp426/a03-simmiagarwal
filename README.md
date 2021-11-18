[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6042444&assignment_repo_type=AssignmentRepo)
# a03 We can learn to function in this environment

In this assignment, you will implement JavaScript functions according to a specification and manipulate object and array data.

While writing HTML and CSS is necessary for making websites, the technolgy that does a lot of the behind-the-curtain work is JavaScript. It is the backbone of every modern web framework and is a necessity for makng interactive web pages.

This assignment, however, wont be using a web browser at all. When we want to execute JavaScript outside of the browser environment we use Node.js. This makes writing JavaScript like writing any other programming language.

The purpose of this assignment is to get you comfortable and familiar with writing functions in JavaScript. For a basic example that we will walk through together live, see mod03.

# Setup

Find the assignment link on Sakai or Piazza. After you’ve accepted the assignment from the link and cloned the repo: run the `npm install` command with no other arguments.

You do not need to run `npm init` because the repo already has a `package.json` file and a list of packages that will install.

## Why can’t we just run the files normally?

JavaScript that runs in the browser follows a slightly different standard than JavaScript on your computer. This has been a point of conflict in the past, but now most things are shifting towards the browser standard.

One of the main differences is how importing and exporting is handled.

> es6 modules and the `import` and `export` keywords are the standard. The specification is written by the ECMA TC39 (technical committee in charge of the language standards).
> However, it’s (in relative terms) recent and since JavaScript didn’t support modules prior to it, workarounds were developed. These include CommonJS (NodeJS modules) and AMD (RequireJS modules).
> On Node, CommonJS is going strong and there’s a bit of a conflict regarding the “migration” to the standard, so there you likely don’t get to choose.
> However, if you use JavaScript modules on browsers, you probably have a build step that bundles up your modules with something like Webpack or Browserify (at least until module loading is handled across the all relevant browsers). There you should definitely go for the standard es6 modules and it’s considered best practice.
> reddit post about this topic

Because of this difference and the fact that this is a web development course, we are going to be using es6 import export syntax. To use es6 style import and exports we require the use of the esm package. Here is a stackoverflow post about the topic. Feel free to google around.

## How to run your code!

All of the starting files where you will place your code have been provided for you inside the `a03-$YOURGITHUBUSERNAME` directory. If you wish to separate your code into separate files or make helper functions feel free to do so but it should not be necessary for this assignment.

You can open a terminal and run `node` and your script.

> Normally when you want to run a `.js` file you just use the command line and call `node FileName.js`. But because the es6 import and export syntax is experimental in node, we need to use a package called ESM. For us, the user, the only difference is that we now run our node command as follows: `node -r esm FileName.js`. ESM will not be required in later versions of node.


## Import / Export Example

- Import Documentation
- Export Documentation

Have a look at `mod03` if you haven’t already. It covers a very basic example for exporting and importing JavaScript functions.

In that example, we wrote the following scripts (or similar).

`helloworld.js`

```
export function helloWorld(message) {  
  console.log('Hello World,', message);  
}
```

`main.js`

```
import {helloWorld} from "./helloworld";  

helloWorld('and exit.');
```

When we run the `main.js` script, we should see the output below.

```
$ node -r esm main.js
Hello World, and exit.
```

# Time to Code

Here are the MDN section on:

- functions,
- arrays, and
- objects.

Reading this isn’t required but will give you the tools and knowledge to complete the assignment. The later section on advanced functions will have problems that are already solved by the language, so knowing what JavaScript can do is very helpful.

You may also want to look at the w3c schools JavaScript tutorial, which has similarly helpful and useful examples that you can work through.

Below are two ways to write functions that output ‘Basic Functions’ as a string when called. Note the export keyword is used here so they can be imported into a different file. This is how the autograder will check your work.

```
// Defined with the function keyword  
export function hello1() {  
  return "Basic Functions";  
}  
  
// Defined with an arrow function  
export const hello2 = () => {  
  return "Basic Functions";  
};  
  
// Calling both functions  
hello1();  
hello2();
```

The following files need to have their function definitions filled out:

1. `mild_1.js`
2. `mild_2.js`
3. `medium_1.js`
4. `medium_2.js`
5. `medium_3.js`
6. `spicy_9.js`

If you find yourself writing a lot of code on `medium_*.js`:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

__NB__: This assignment is very involved and will likely take longer than any of the others so far. Do not worry. You’ll get through it. Just work through the function definitions one-by-one, use the available references, and come to Piazza with questions if you need to.