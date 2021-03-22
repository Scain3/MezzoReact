import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getComments } from "../../store/comments";

import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { CommentModal } from "../../context/Modal"
import "./commentsSection.css";

const CommentsSectionContent = ({ storyId }) => {
	const [loaded, setLoaded] = useState(false);
	const comments = useSelector((state) => state.comments.comments);
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			await dispatch(getComments(storyId));
			return setLoaded(true);
		})();
	}, [dispatch, storyId]);

	return (
		loaded && (
			<div className="comments-section-container">
				<div className="comments-section-content">
					<CommentForm />
					<div className="comments-section-comments-container">
						{comments.map((comment, i) => (
							<Comment key={i} comment={comment} />
						))}
					</div>
				</div>
			</div>
		)
	);
};

const CommentsSection = ({ storyId }) => {
		const [openModal, setOpenModal] = useState(false);

		const onClose = () => setOpenModal(!openModal);

		return (
			<>
				<button onClick={onClose}>Reply</button>
				{openModal && (
					<CommentModal onClose={onClose}>
						<CommentsSectionContent storyId={storyId} />
					</CommentModal>
				)}
			</>
		);
};

export default CommentsSection;
