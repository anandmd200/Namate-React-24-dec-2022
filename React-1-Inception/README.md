# React-1-Inception

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <div id="root">Not Rendered</div>
    
    <!-- 
        The function render will overwrite this js code for same root.
    <script> 
        const heading = document.createElement("h1");
        heading.innerHTML = "Hello JavaScript"
        const jsroot = document.getElementById("root");
        jsroot.appendChild(heading);
    </script>
    -->
    <script>
      const heading1 = React.creatElement("h1",{},"Hello");
      const heading2 = React.creatElement("h1",{},"world");
      const container = React.createElement("div",{className:"heading-container"},[heading1,heading2]);
      
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(container);
    </script>
</body>
</html>
```
#### Note:
- React Overwrite Everything inside root created by ReactDom.
- In above example heading1, heading2 are the react element. And at the end of the day every react element is object.
- In { } we are basically passing react element attributes (id, className, style, etc) as props in react.
- Heading1, heading2 nothing but we are passing it as children .
- The Function render will modify your DOM and it only Overwrite the things. 
***
### What is `Emmet`? 
Basically, most text editors out there allow you to store and re-use commonly used code chunks, called `snippets`. While snippets are a good way to boost your productivity, all implementations have common pitfalls: you have to define the snippet first and you can’t extend them in runtime.
	
`Emmet` takes the snippets idea to a whole new level: you can type CSS-like expressions that can be dynamically parsed, and produce output depending on what you type in the abbreviation. Emmet is developed and optimised for web-developers whose workflow depends on HTML/XML and CSS, but can be used with programming languages too.
***
### Difference b/w a `library` and `framework`? 
`Frameworks` and `libraries` are both code written by someone else that helps you perform some common tasks in a less verbose way.
A framework inverts the control of the program. It tells the developer what they need. A library doesn’t. The programmer calls the library where and when they need it.
The degree of freedom a library or framework gives the developer will dictate how `opinionated` it is.
***	
### What is CDN? why do we use It?
A content delivery network, or content distribution network (CDN), is a geographically distributed network of proxy servers and their data center. The goal is to provide high availability and performance by distributing the service spatially relative to end users.

***	
### Why React know as React?
React was developed for applications (Facebook) that have constantly changing data. Since React is a front-end framework or the “View” in MVC, this means that as the user clicks around and changes the app's data, the view should “react” or change with those user events.
	 
### What is crossorigin in script tag?
[crossorigin](https://www.w3schools.com/tags/att_script_crossorigin.asp#:~:text=The%20crossorigin%20attribute%20sets%20the,or%20scripts)%20from%20another%20domain)
***	
### What is difference between React and ReactDom.
[Medium](https://medium.com/programming-sage/react-vs-react-dom-a0ed3aea9745)
	
`React`: React is a javascript library, designed for building better user interfaces.
	
`React-DOM`: React-DOM is a complimentary library to React which glues React to the browser DOM.
	
React is a core package and react-Dom is used to manipulate the HTML DOM.
	
In a nutshell, Whenever we use component, classes, elements, etc. We’re using React and whenever we use methods like render() or findDOMNode() we’re using React-DOM.
***	
### Why did the React team decide to `split React` into two different libraries `React and React-DOM`?
	
Because `React-DOM` binds the idea of React to a web browser. And ideally, React has nothing to do with a browser or web for that matter. That’s why we’re seeing tools and frameworks like React-Native, React-Three being developed. These tools and frameworks don’t use React-DOM, but they do in fact use the idea behind React.
	
This is what the team had to say when they were splitting these two libraries.
***	
### What is difference between react development.js and react.production.js files via CDN?
development.js are only meant for development, and are not suitable for production. Minified and optimized production versions of React are react.production.js.
***	 
### What is async and defer?
[Async and Defer in Deatail](https://www.josefzacek.cz/blog/whats-the-difference-between-async-vs-defer-attributes/)
