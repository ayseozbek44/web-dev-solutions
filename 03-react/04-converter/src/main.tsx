import * as React from "react";
import * as ReactDOM from "react-dom";

const celsiusInput = document.getElementById("celsius");
const fahrenheitInput =
	document.getElementById("fahrenheit");


if (!(celsiusInput instanceof HTMLInputElement)) {
	throw new Error("No input with id 'celsius' found");
}
if (!(fahrenheitInput instanceof HTMLInputElement)) {
	throw new Error("No input with id 'fahrenheit' found");
}

const fahrenheitToCelsius = (fahrenheit: number) =>
	((fahrenheit - 32) * 5) / 9;

 
const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

const App = (): JSX.Element => {
	const [f, handleFahrenheit] = React.useState(null);
	const [c, handleCelsius] = React.useState(null);

	return (
		<main>
			<input
				type="number"
				value={f}
				onChange={(e) => handleFahrenheit((e.target.value * 9 / 5) + 32).toFixed(2)}
			/>
			<input
				type="number"
				value={c}
				onChange={(e) => handleCelsius((e.target.value - 32) * 5 / 9).toFixed(2)}
			/>
			
		</main>
	);
};

ReactDOM.render(<App />, appDiv);