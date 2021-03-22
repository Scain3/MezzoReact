import React from "react";
import { useHistory } from "react-router-dom";
import { estimateTime, parseDate } from "../../utils";
import "./trendingPreview.css";

const TrendingPreview = ({ article, rank }) => {
	const history = useHistory();

	const firstName = article.story.User.firstName;
	const lastName = article.story.User.lastName;
	const date = article.story.createdAt;
	const content = article.story.content;

	// TODO: link to PROFILE once feature is implemented

	const redirectToStory = () => history.push(`/story/${article.story.id}`);

	return (
		<div className="trending-preview-container">
			<div className="trending-preview-rank">
				<p>{`0${rank}`}</p>
			</div>
			<div className="trending-preview-details">
				<p className="trending-preview-author">{`${firstName} ${lastName}`}</p>
				<p onClick={redirectToStory} className="trending-preview-title">
					{article.story.title}
				</p>
				<div className="trending-preview-stats">
					<p>{`${parseDate(date)} • ${estimateTime(content)} min read`}</p>
				</div>
			</div>
		</div>
	);
};

export default TrendingPreview;
