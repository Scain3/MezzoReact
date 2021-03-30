import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getClaps, clapStory } from "../../store/clap"

import clap from "../../images/clap.svg";
import "./clapButton.css";

const ClapButton = ({ storyId }) => {
	const [loaded, setLoaded] = useState(false);
	const claps = useSelector((state) => state.claps.claps);
	const userId = useSelector((state) => state.session.user.id);
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			await dispatch(getClaps(storyId))
			await setLoaded(true);
		})();
	}, [dispatch, storyId]);

	const handleClick = async () => {
		await dispatch(clapStory(storyId, userId));
	};

	return loaded && (
		<button onClick={handleClick} className="clap-button">
			<img className="clap-button-icon" src={clap} alt="clap" />
			<p className="clap-button-clap-count">{claps}</p>
		</button>
	);
};

export default ClapButton;
