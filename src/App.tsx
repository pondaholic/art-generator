import React, { FC, useState } from 'react';
import axios from 'axios';
import ArtCard from './components/Card';

//styling
import './App.css';

interface Art {
	technique: string;
	primaryimageurl: string;
}

const Painting: FC = () => {
	const number: number = Math.floor(Math.random() * 10);
	const [painting, setPainting] = useState({} as Art);

	const handleClick = () => {
		const fetchPainting = async () => {
			const results = await axios(
				`https://api.harvardartmuseums.org/object?apikey=${process.env.REACT_APP_API_KEY}`
			).then((res) => {
				return res.data.records[number];
			});

			setPainting(results);
		};
		fetchPainting();
	};

	return (
		<>
			<button onClick={() => handleClick()}>Click</button>
			{!!painting && (
				<ArtCard
					caption={painting.technique}
					imageUrl={painting.primaryimageurl}
				/>
			)}
		</>
	);
};

export default Painting;
