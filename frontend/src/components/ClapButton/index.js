import React, { useEffect, useState } from "react";

import clap from "../../images/clap.svg";
import "./clapButton.css";

const ClapButton = () => {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		(async () => {
			await setLoaded(true);
		})();
	}, [])

	return loaded && (
		<button className="clap-button">
			<img className="clap-button-icon" src={clap} alt="clap" />
			<p className="clap-button-clap-count">1k</p>
		</button>
	);
};

export default ClapButton;
