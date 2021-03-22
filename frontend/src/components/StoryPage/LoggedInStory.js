import React from "react";

import CommentsSection from "../CommentsSection";

const LoggedInStory = ({ content, storyId }) => {
	return (
		<>
			<p className="logged-in-story-page-content">{content}</p>
			<div className="logged-in-story-controls">
				<CommentsSection storyId={storyId} />
			</div>
		</>
	);
};

export default LoggedInStory;
