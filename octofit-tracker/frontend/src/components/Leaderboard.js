import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
	const [entries, setEntries] = useState([]);
	const codespace = process.env.REACT_APP_CODESPACE_NAME;
	const endpoint = codespace
		? `https://${codespace}-8000.app.github.dev/api/leaderboard/`
		: '/api/leaderboard/';

	useEffect(() => {
		console.log('Fetching leaderboard from:', endpoint);
		fetch(endpoint)
			.then(res => res.json())
			.then(data => {
				const results = data.results || data;
				setEntries(results);
				console.log('Fetched leaderboard:', results);
			});
	}, [endpoint]);

	return (
		<div>
			<h2>Leaderboard</h2>
			<ul className="list-group">
				{entries.map((e, i) => (
					<li className="list-group-item" key={i}>User: {e.user}, Score: {e.score}</li>
				))}
			</ul>
		</div>
	);
};

export default Leaderboard;
