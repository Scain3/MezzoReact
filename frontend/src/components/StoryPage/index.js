import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getStory } from "../../store/story";
import { parseDate, estimateTime } from "../../utils";
import "./storyPage.css";

const StoryPage = () => {
	const [loaded, setLoaded] = useState(false);
	const story = useSelector((state) => state.story.story);

	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			await dispatch(getStory(id));
			await setLoaded(true);
		})();
	}, [id, dispatch]);

	return (
		loaded && (
			<>
				<div className="story-page-info-container">
					<p className="story-page-title">{story.title}</p>
					<p className="story-page-subtitle">{story.subtitle}</p>
					<div className="story-page-stats-container">
						<p className="story-page-author">{`${story.User.firstName} ${story.User.lastName}`}</p>
						<p className="story-page-stats">
							{`${parseDate(story.createdAt)} • ${estimateTime(story.content)} min read`}
						</p>
					</div>
				</div>
			</>
		)
	);
};

export default StoryPage;
