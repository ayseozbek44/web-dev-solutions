import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

interface UserForm {
    firstname: string;
    lastname: string;
    age: number;
}

const App = () =>{

	return (
		<main>
		<div>
		<input
				type="text"
				placeholder="Please write Your First Name"
				//value={}
				
				
			/>
			</div>	
			<br/>
			<input
				type="text"
				placeholder="Please write Your Last Name"
				//value={}
				
				
			/>
			<br/>
			<input
				type="text"
				placeholder="Please write Your Age"
				
				
			/>
			<br/>
			<input
				type="submit"
				value="Send"
				
				
			/>
			
		</main>
	);
};

ReactDOM.render(<App />, appDiv);