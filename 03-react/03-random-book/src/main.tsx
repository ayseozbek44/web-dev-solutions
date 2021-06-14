import * as React from "react";
import * as ReactDOM from "react-dom";

const books: string[] = [
	"Anna Karenina",
	"To Kill a Mockingbird",
	"The Great Gatsby",
	"One Hundred Years of Solitude",
	"A Passage to India",
	"Invisible Man",
	"Don Quixote",
	"Beloved",
	"Mrs. Dalloway",
	"Things Fall Apart",
	"Jane Eyre",
	"The Color Purple",
];


const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

const getRandomBook= () =>
{
    return books[Math.floor(Math.random()*books.length)];
}
const App = () => {
	const [randomTitle, setTitle] = React.useState(getRandomBook());

	return (
		<main>
			<p>{randomTitle}</p>
			<button onClick={() => setTitle(getRandomBook())}>
				Change Title
			</button>
		</main>
	);
};

ReactDOM.render(<App />, appDiv);