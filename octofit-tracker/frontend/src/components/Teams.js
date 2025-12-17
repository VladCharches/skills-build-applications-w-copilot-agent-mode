import React, { useEffect, useState } from 'react';

const Teams = () => {
	const [teams, setTeams] = useState([]);
	const codespace = process.env.REACT_APP_CODESPACE_NAME;
	const endpoint = codespace
		? `https://${codespace}-8000.app.github.dev/api/teams/`
		: '/api/teams/';

	useEffect(() => {
		console.log('Fetching teams from:', endpoint);
		fetch(endpoint)
			.then(res => res.json())
			.then(data => {
				const results = data.results || data;
				setTeams(results);
				console.log('Fetched teams:', results);
			});
	}, [endpoint]);

	return (
		<div>
			<h2>Teams</h2>
			<ul className="list-group">
				{teams.map((t, i) => (
					<li className="list-group-item" key={i}>{t.name}</li>
				))}
			</ul>
		</div>
	);
};

export default Teams;
