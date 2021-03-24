import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getComments } from "../../store/comments";

import { countComments } from "../../utils";

import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { CommentModal } from "../../context/Modal";
import "./commentsSection.css";

const CommentsSectionContent = ({ storyId, comments, onClose }) => {
	return (
		<div className="comments-section-container">
			<div className="comments-section-content">
				<div className="comments-section-header">
					{countComments(comments)}
					<button title="close" className="comments-section-close-button" onClick={onClose}>
						<i className="fas fa-times"></i>
					</button>
				</div>
				<CommentForm storyId={storyId} />
				<div className="comments-section-comments-container">
					{comments.map((comment, i) => (
						<Comment storyId={storyId} key={i} comment={comment} />
					))}
				</div>
			</div>
		</div>
	);
};

const CommentsSection = ({ storyId }) => {
	const [openModal, setOpenModal] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const comments = useSelector((state) => state.comments.comments);
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			await dispatch(getComments(storyId));
			return setLoaded(true);
		})();
	}, [dispatch, storyId]);

	const onClose = () => setOpenModal(!openModal);

	return (
		loaded && (
			<>
				<button
					title="Reply"
					className="comments-modal-button"
					onClick={onClose}
				>
					<i className="far fa-comment"></i>{" "}
					<span className="comments-modal-button-stats">Comment ({comments.length})</span>
				</button>
				{openModal && (
					<CommentModal onClose={onClose}>
						<CommentsSectionContent storyId={storyId} comments={comments} onClose={onClose} />
					</CommentModal>
				)}
			</>
		)
	);
};

export default CommentsSection;
