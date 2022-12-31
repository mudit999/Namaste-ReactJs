/***
 * 
 * Reference links
 * https://parceljs.org/features/development/
 * https://www.npmjs.com/package/browserslist
 * https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z
 * https://github.com/browserslist/browserslist#query-composition
 * 
*/

/***
 * 
 * Parcel provide us
 * 
 * Created server for us
 * HMR - Hot Module Reloading
 * File Watcher Algorithm - C++
 * Bundling
 * Minify / Minification on build environment
 * Cleaning our code
 * Dev $ production build
 * Super Fast build algorithm
 * Image optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * Port number
 * Consistent Hashing algorithm
 * Zero config
 * 
 */

/****
 * Transitive dependency
 * browserslist 
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", {}, "heading 1");
const heading2 = React.createElement("h1", {}, "heading 2");
const div1 = React.createElement("div", {hello : "World"}, [heading1, heading2]);
//                                                          Children - heading1, heading~2

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