import React, { useState, useEffect } from "react";

import CommentsSection from "../CommentsSection";
import ClapButton from "../ClapButton";

const LoggedInStory = ({ content, storyId, userId, authorId }) => {
	const [loaded, setLoaded] = useState(false);
	const [isAuthor, setIsAuthor] = useState(false);

	useEffect(() => {
		(async () => {
			if (userId === authorId) {
				await setIsAuthor(true);
			}
			return setLoaded(true);
		})();
	}, [userId, authorId, setIsAuthor])

	return loaded && (
		<>
			<p className="logged-in-story-page-content">{content}</p>
			<div className="logged-in-story-controls">
				<ClapButton isAuthor={isAuthor} storyId={storyId} />
				<CommentsSection storyId={storyId} />
			</div>
		</>
	);
};

export default LoggedInStory;
