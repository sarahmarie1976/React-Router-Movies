import React from 'react';
import { Link, NavLink} from 'react-router-dom';

const SavedList = (props) => (
	<div className="saved-list">
		<h3>Saved Movies:</h3>
		{props.list.map((movie) => (
			<NavLink to={'/movie-list/:id'} activeClassName='saved-active' >
				<span className="saved-movie">{movie.title}</span>
			</NavLink>
		))}

		<Link to={`/`}>
			<div className="home-button">Home</div>
		</Link>
	</div>
);

export default SavedList;
