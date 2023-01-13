# React-4-FoodOrdering-App

### Config Driven UI? 
A dynamic UI which is changes based on data known as `config driven` UI. See if people on different location (As food odering App) see different data(UI).Basically, contoling UI by some configuration provided by backend API.

### optional Chaining ?


### Define `props` in React?
Passing arguments inside the component is known as `props`. Props is a short hand of properties inside component. `props` as name is not mandatory it is only good proctice used by the community of developers.

```
 <RestaurantCard restaurantList={restaurantList[0]} />

```
#### Can we pass multiple props? 
Yes, You can pass.

```
<RestaurantCard restaurantList={restaurantList[0]} neame="Andrew"/>
```

### what is spread Operator?
The spread `(...)` syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

```
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));

O/P: 6

```

### why we use `map` instead of loop?
`map` is a best way to do functional programming. In industry you will always see map in large scale.

```
 restaurantList.map(Element => <RestaurantCard {...Element.data} />);

 or

 restaurantList.map(Element =>{
    return <RestaurantCard {...Element.data} />
 });

```

### Virtual DOM? 
It is not the only use in React, it is Software Engineering concept. `Virtual Dom` is a same representation of DOM tree in memory and sync with the real DOM using `reconciliation` process.
`Reconciliation` uses `Diff` algorithm to find diff between trees (Real DOM diff Vrtual Dom) and it determines what portion of UI need to be changed or re-render.

### why we need unique key for element? 
Because, diff algorithm easily identifiy that which react element was their and which new one come, where it will be placed in dom tree. This is what makes react fast.
The key only has to be unique among its siblings, not globally unique.

`No key <<<<< Index key << uniques key`

```
<div> <div> <div> <div>    <-----  new <div>  React confuse (where to place it) 

<div key="1"> <div key="2"> <div key="3"> <div key="4">       <----- new <div key="5"> (easily identify and render it)

```

### is JSX is mandantory for React? 
No, you can create the react element using react.createElement(), but it becomes more difficult to mamnage.

### Is ES6 is mandatory for React? 
No, You can use pure javaScript code but ES6 provides more features and functional programming concept like map, filter, reduce spread opeator etc which makes the life more easy.

### {Title} vs <Title /> vs <Title></Title>
- `{Title}` it shows the error: Functions are not valid as a React child. 
- `<Title /> vs <Title></Title>` both works fine.

### What is <React.Fragment></React.Fragment> and <></>?
`<></>` this is a short hand of `<React.Fragment></React.Fragment>` it will return the empty tag to avoiding the extra element div to rap the react element and it allows to return single parent because jsx supports single parent. Fragments let you group a list of children without adding extra nodes to the DOM.

- `key` is the only attribute that can be passed to `Fragment`

### What is config driven UI?
It is a contract between UI and Fronted. and UI is designed such a way that it chnages according to data produced by the backed.
- See if you need show product or services location wise So you can't redesign web site for different city. In order to achive dynamic UI the config driven UI concept is used.  

### What is React Fiber?
React fiber is a ongoing reimplementation of React's core algorithm. To make react more efficient and Fast.
