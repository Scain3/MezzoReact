import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTrendingStories } from "../../store/trending";


const Feed = () => {
    // temporary
    const feedArticles = useSelector((state) => state.trending.stories)
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            await dispatch(getTrendingStories());
            return setLoaded(true);
        })();
    }, [dispatch]);

    return (
            <>
                <h1>This is the feed</h1>

                {articles.map((article) => (

                    <div className="feed-container">
                        <div className="feed-preview-container">
                            <div className="feed-details">
                                <p>{`${article.User.firstName} ${article.User.lastName}`}</p>
                                <h3>{article.title}</h3>
                                <p>{article.subtitle}</p>
                                <div>
                                    <p>{article.createdAt}</p>
                                    <p>{article.content}</p>
                                </div>
                            </div>

                            <img></img>
                        </div>
                    </div>

                ))}
            </>
    )
}

export default Feed;
