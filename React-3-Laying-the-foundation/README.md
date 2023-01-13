# React-3-Laying-the-foundation

### Does `Parcel` removes `console.log()`? 
No, Parcel doesn't remove `console.log()`. For removing `console.log()` from the production build install `babel-plugin-transform-remove-console` plugin 
and configure this plugin in our project.

```bash
npm install babel-plugin-transform-remove-console --save-dev
```

And create a `.babelrc` file and configure:
```
{
  "plugins": [ 
      ["transform-remove-console", 
        { "exclude": [ "error", "warn"] }
      ] ]
}
```

[More About Plugin](https://www.npmjs.com/package/babel-plugin-transform-remove-console)
***
### What is `key` in React? 
When we have the sibling elements then, React need to identify which items in the list are changed, updated, or deleted for modifying Browser DOM.
the key is pass as a `props` in the elements.

```
const heading1 = React.createElement(
   "h1",
   {
     Key: "Unique_Key"
     id: "title",
     className:"heading1",
   },
   "Hello React from Ignite"
);

<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li> (Helps to update BDOM here)
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```
[It Reconciliation Concept behind the seens read about it](https://reactjs.org/docs/reconciliation.html)

#### Note: 
`id` (HTML) & `key`(React) both are different things. `key` is unique for every element.

***
### how does `React.createElement()` Works?
`React.createElement()` is written by the facebook developers and at the end of day it returns an object.

```
`React.createElement()` => object => HTML + update BrowserDOM 
```
But for enterprise application we can't use `react.createElement()` it will meshup our code. we use something know as JSX.

***
### what is JSX?
JSX is a html like syntax it's not pure HTML.It was
developed by Facebook as a way to make it easier for developers to build
user interfaces (UI) using React, a JavaScript library for building user
interfaces.

```
const heading = (
  <h1 className="title" key="myheading">
    Hello world
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

JSX elements can also include JavaScript expressions, using curly braces.
```
const age = 24;
const element = <h1>Rahul is now, {age},year old</h1>;

```
***
### what is  `babel`?
`Babel` is a tool that is commonly used to transpile JSX code into regular
JavaScript. When you write JSX in a React app, you typically write your
code in a file with a .jsx extension. When you run your app, Babel transpiles
the JSX code into regular JavaScript that can be run in a web browser.

```
JSX ->Uses React.createElement() -> object -> HTML + update BDOM
```

#### Note: 
Babel already comes with Parcel there is no need any installation and configuration.
#### 
`Node_module` also have `package-lock.json` to manage the versions of all Node_module package itself.

***
### what is component?
Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

#####
The component name should start with captial letter this normal convention(best practice) not mandantory.

```
*** React-element ***

const heading = (
  <h1 className="title" key="myheading">
    Hello world
  </h1>
);

*** Functional component ***

const Welcome = () => {
  return <h1>Welcome to React world</h1>;
};

*** Component Composition***

const HeaderComponent = function(){
  return (
    <div>
      {heading}                            
      <Welcome />  
      {Welcome()}
      {console.log(1+2)}
      <h1>Hello from Functional component</h1>
      <h2>heading 2</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Welcome />);
root.render(<HeaderComponent />);
```

### `Power of JSX` what if someone able to run JavaScript code in your system.
He will able get more informatiom of your system like, your ip-address, passwords,
and can hack your system. but JSX is secure in this matter.

***
