import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTrendingStories } from "../../store/trending";

import TrendingPreview from "./TrendingPreview";

import "./trendingStories.css";

const TrendingStories = () => {
	const [loaded, setLoaded] = useState(false);
	const articles = useSelector((state) => state.trending.stories);
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			await dispatch(getTrendingStories());
			return setLoaded(true);
		})();
	}, [dispatch]);

	return (
		loaded && (
			<>
				<div className="trending-stories-header">
					<span className="trending-stories-icon">
						<i className="far fa-arrow-alt-circle-up"></i>
					</span>
					<p>TRENDING ON MEZZO</p>
				</div>
				<div className="trending-stories-container">
					{articles.map((story, i) => (
						<TrendingPreview key={i} article={story} rank={i + 1} />
					))}
				</div>
			</>
		)
	);
};

export default TrendingStories;
