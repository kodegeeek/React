

/**
 * Challenge: Project setup 
 * 
 * - Create a "components" folder
 * - Create the following components in seperate files inside the components folder. In each one, just render an "h1"  with the name of the component (e.g. return <h1>Navbar Goes here</h1>):
 * -- Navbar
 * -- Main
 * 
 * -Create an App component outside the components folder (sibling to the index.js file)
 *   - Have App render the Navbar and Main componets
 * - Import and render the App Component inside of index.js using ReactDOM 
 *     -At this point you should have your "Navbar goes here" etc. Showing up in the mini-browser.
 * - Go to Google fonts and get the "Inter" font with weights 400, 600, and 700.
 * Put the links to those fonts ABOVE the style.css link in index.html (Use the "<link/>" elements insteed of the @import or mpm optins for getting the fonts. You may need to do some extra research to figure out how this works if yuo haven't done it before )
 */



import React from "react";
import ReactDOM  from "react-dom";
import App from "./App";




// const React = require("react")
// const ReactDOM = require("react-dom")



// ReactDOM.render(<h1>hello world</h1>, document.getElementById("root"))



ReactDOM.render(<App />, document.getElementById("root"))
