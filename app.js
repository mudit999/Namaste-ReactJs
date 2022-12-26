const heading1 = React.createElement("h1", {}, "heading 1");
const heading2 = React.createElement("h1", {}, "heading 2");
const div1 = React.createElement("div", {}, [heading1, heading2]);

// creating element with React -> h1
const heading = React.createElement("h1", {style :{
    backgroundColor : "green",
    color: "white",
},
    className : "hello"
}, "Namaste from React.js");
// {} all the tag attributes from here 

console.log(heading); // It is an Object

// create root element and passing the root
// we are injecting react inside root
const root = ReactDOM.createRoot(document.getElementById("root"));

// render: modifying the DOM
// passing a react element inside the root
// render method is basically injecting heading inside DOM
root.render([div1,heading]);