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

const IMG_URL = "https://pixabay.com/api/?key=22081611-d950e1e36121f30b40dcd83d6&q=yellow+flowers&image_type=photo";

interface Img {
	title:string;
}

const App = (): JSX.Element => {
	const [images, setImages] = useState<Img | null>(null);
	const [value, setValue] = useState<string>('');

    const handleChange =(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

	const fetchImages = async (value: string) => {
		const response = await fetch(IMG_URL+value+'');
		const json = await response.json();
		setImages(json);
		console.log(json);
	//	images.src = URL.createObjectURL(fetchImages)
	};

    // const url = new URL("https://api.example.com");
   // url.searchParams.append("q", "Hello World");
 //   url.searchParams.append("sort", "year");
  //  console.log(url.toString());

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
                            <img src="{images}" alt=""></img>
                        </div>
                    </section>
                </main>
	);
};

ReactDOM.render(<App />, appDiv);