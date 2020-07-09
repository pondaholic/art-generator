import React, { FC, useState } from 'react';
import axios from 'axios';

//styling
import './App.css';

const Painting: FC = () => {
	const [paintings, setPaintings] = useState([]);

	const handleClick = () => {
		const fetchPainting = async () => {
			const results = await axios(
				`https://api.harvardartmuseums.org/object?apikey=${process.env.REACT_APP_API_KEY}`
			).then((res) => {
				console.log(res.data);
				return res.data.records;
			});

			setPaintings(results);
		};
		fetchPainting();
	};

	return (
		<>
			<button onClick={() => handleClick()}>Click</button>
		</>
	);
};

export default Painting;
