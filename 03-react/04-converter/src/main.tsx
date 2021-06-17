import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

const App = (): JSX.Element => {
	const [f, handleFahrenheit] = React.useState("");
	const [c, handleCelsius] = React.useState("");

	return (
		<main>
			<input
				type="number"
				value={c}
				onChange={(e) => handleCelsius(((parseInt(e.target.value) * 9 / 5) + 32).toFixed(2))}
				
			/>
			<input
				type="number"
				value={f}
				onChange={(e) => handleFahrenheit(((parseInt(e.target.value) - 32) * 5 / 9).toFixed(2))}
			/>
			
		</main>
	);
};

ReactDOM.render(<App />, appDiv);