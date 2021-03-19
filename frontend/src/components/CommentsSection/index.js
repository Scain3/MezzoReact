import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getComments } from "../../store/comments";

import Comment from "./Comment";
import CommentForm from "./CommentForm";
import "./commentsSection.css";

const CommentsSection = ({ storyId }) => {
	const [loaded, setLoaded] = useState(false);
	const comments = useSelector((state) => state.comments.comments);
	const dispatch = useDispatch();

	// TODO: Add this component in a left-side modal, ala medium

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

export default CommentsSection;
