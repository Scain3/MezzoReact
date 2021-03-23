import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./commentForm.css";

const CommentForm = ({ storyId }) => {
	const userId = useSelector((state) => state.session.user.id);
	const [comment, setComment] = useState("");
	return (
		<>
			<div className="comment-form-container"></div>
		</>
	);
};

export default CommentForm;
