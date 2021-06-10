import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

console.log("Hello");

const App = (): JSX.Element => <p>Hello React!</p>;

ReactDOM.render(<App />, appDiv);