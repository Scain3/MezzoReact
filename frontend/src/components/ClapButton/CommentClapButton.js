import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getCommentClaps, clapComment } from "../../store/clap"

import clap from "../../images/clap.svg";
import "./commentClapButton.css"

const CommentClapButton = ({ commentId, userId, isAuthor }) => {
    const [loaded, setLoaded] = useState(false);
    const [claps, setClaps] = useState(null);
    const dispatch = useDispatch();

    // Used local state for this implementation
    useEffect(() => {
        (async () => {
            const clapCount = await dispatch(getCommentClaps(commentId));
            await setClaps(clapCount);
            await setLoaded(true);
        })();
    }, [dispatch, commentId]);

    const handleClick = async () => {
        const clapCount = await dispatch(clapComment(commentId, userId));
        return setClaps(clapCount);
    };

    // If user is the author of the comment, return a dummy button
    // allows you to see your own clap count, but not clap your own comment
    if (isAuthor) return (
			loaded && (
				<>
					<button className="comment-clap-button-disabled">
						<img className="comment-clap-button-icon" src={clap} alt="clap" />
						<p className="comment-clap-button-clap-count">{claps}</p>
					</button>
				</>
			)
		);

    // Returns the fully functional button
    return loaded && (
			<>
				<button onClick={handleClick} className="comment-clap-button">
					<img className="comment-clap-button-icon" src={clap} alt="clap" />
                    <p className="comment-clap-button-clap-count">{claps}</p>
				</button>
			</>
	);
};

export default CommentClapButton;
