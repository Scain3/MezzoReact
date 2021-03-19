import React, { useState } from "react";

import CommentsSection from "../CommentsSection";
import { CommentModal } from "../../context/Modal";

const LoggedInStory = ({ content, storyId }) => {
	const [openModal, setOpenModal] = useState(false);

	const onClose = () => setOpenModal(!openModal);

	return (
		<>
			<p className="logged-in-story-page-content">{content}</p>
			<button onClick={onClose}>Reply</button>
			{openModal && (
				<CommentModal onClose={onClose}>
					<CommentsSection storyId={storyId} />
				</CommentModal>
			)}
		</>
	);
};

export default LoggedInStory;
