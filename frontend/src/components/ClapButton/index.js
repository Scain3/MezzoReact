import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getClaps } from "../../store/clap"

import clap from "../../images/clap.svg";
import "./clapButton.css";

const ClapButton = ({ storyId }) => {
	const [loaded, setLoaded] = useState(false);
	const claps = useSelector((state) => state.claps.claps)
	const dispatch = useDispatch();
	useEffect(() => {
		(async () => {
			await dispatch(getClaps(storyId))
			await setLoaded(true);
		})();
	}, [])

	return loaded && (
		<button className="clap-button">
			<img className="clap-button-icon" src={clap} alt="clap" />
			<p className="clap-button-clap-count">{claps}</p>
		</button>
	);
};

export default ClapButton;
