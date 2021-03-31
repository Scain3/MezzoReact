import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import LoggedInStory from "./LoggedInStory";
import LoggedOutStory from "./LoggedOutStory";

import { getStory } from "../../store/story";
import { parseDate, estimateTime } from "../../utils";
import "./storyPage.css";

const StoryPage = () => {
	const [loaded, setLoaded] = useState(false);
	const story = useSelector((state) => state.story.story);
	const currentUser = useSelector((state) => state.session.user);

	const { id } = useParams();
	const dispatch = useDispatch();

	// TODO: Add favorite button component next to stats when done

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
							{`${parseDate(story.createdAt)}`}{" "}
							<span className="story-page-stats-spacer">•</span>{" "}
							{`${estimateTime(story.content)} min read`}
							<span className="story-page-stats-spacer">
								<i className="fas fa-music"></i>
							</span>{" "}
						</p>
					</div>
				</div>
				<div className="story-page-image-container">
					<img className="story-page-image" src={`${story.image}`} alt="" />
				</div>
				{currentUser ? (
					<LoggedInStory authorId={story.authorId} userId={currentUser.id} content={story.content} storyId={story.id} />
				) : (
					<LoggedOutStory content={story.content} />
				)}
			</>
		)
	);
};

export default StoryPage;
