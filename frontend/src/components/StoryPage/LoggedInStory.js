import React from "react";

import CommentsSection from "../CommentsSection";

const LoggedInStory = ({ content, storyId }) => {

	return (
		<>
			<p className="logged-in-story-page-content">{content}</p>
			<CommentsSection storyId={storyId} />
		</>
	);
};

export default LoggedInStory;
