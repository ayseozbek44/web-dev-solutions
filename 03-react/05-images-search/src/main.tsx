import * as React from "react";
import { useState } from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

// From https://www.designwizard.com/blog/design-trends/colour-combination.
const themes: string[][] = [
	["#5F4B8B", "#E69A8D"],
	["#00203F", "#ADEFD1"],
	["#606060", "#D6ED17"],
	["#2C5F2D", "#97BC62"],
	["#00539C", "#EEA47F"],
	["#101820", "#FEE715"],
	["#101820", "#F2AA4C"],
	["#2BAE66", "#FCF6F5"],
	["#990011", "#FCF6F5"],
];

const IMG_URL = "https://pixabay.com/api/";

interface Img {
	webformatURL:string;
}

const App = (): JSX.Element => {
	const [images, setImages] = useState<Img[] | null>(null);
	const [value, setValue] = useState<string>('');

    const handleChange =(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

	const fetchImages = async (value: string) => {
		const url = new URL(IMG_URL);
		url.searchParams.append("key", "22072031-b43ed275c2fcd12c6331efa40");
		url.searchParams.append("q", value);
		console.log(url.toString());

		const response = await fetch(url.toString());
		const json = await response.json();
		setImages(json.hits);
		console.log(json);
	//	images.src = URL.createObjectURL(fetchImages)
	};

   

	return (
		<main>
                    <section  className="searchimg">
                        <label><h2>Image Search: </h2></label>
                        <input
                            className="inputStyle"
                            type="search"
                            id="search"
                            onChange={handleChange}
                            placeholder="Please write any word"
                        />
                       <button onClick={() => fetchImages(value)}>Find images</button> 
                    </section>
                    <section>
                        <div>
                            {images === null ? "" : images.map(image =><img key={image.webformatURL} src={image.webformatURL}></img>)}
                        </div>
                    </section>
                </main>
	);
};

ReactDOM.render(<App />, appDiv);