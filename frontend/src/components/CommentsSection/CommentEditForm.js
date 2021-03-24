import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { editComment, deleteComment } from "../../store/comments"
import "./commentEditForm.css";

const CommentEditForm = ({ comment, setEditing, storyId }) => {
    const [editedComment, setEditedComment] = useState(comment.comment)
    const commentId = comment.id;
    const dispatch = useDispatch();

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (comment.comment === editedComment) return setEditing(false);
        const body = {
            comment: editedComment,
            storyId
        };
        await dispatch(editComment(body, commentId));
        return setEditing(false);
    };

    const handleDelete = async() => {
        const body = { storyId }
        await dispatch(deleteComment(body, commentId));
        return setEditing(false);
    };

	return (
		<div className="comment-edit-form-container">
			<form onSubmit={handleSubmit}>
				<textarea
                    className="comment-edit-form-textarea"
                    onChange={e => setEditedComment(e.target.value)}
                    value={editedComment}
                />
				<div className="comment-edit-form-controls">
					<button
						className="comment-edit-form-cancel-button"
						title="cancel"
						type="button"
						onClick={() => setEditing(false)}
					>
						<i className="fas fa-times"></i>
					</button>
					<button
						title="save"
						type="submit"
						className="comment-edit-form-save-button"
					>
						<i className="far fa-save"></i>
					</button>
					<button
						className="comment-edit-form-delete-button"
						title="delete"
						type="button"
						onClick={handleDelete}
					>
						<i className="far fa-trash-alt"></i>
					</button>
				</div>
			</form>
		</div>
	);
};

export default CommentEditForm;
