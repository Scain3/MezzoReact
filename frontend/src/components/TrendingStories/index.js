import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from "react-redux"
import { getTrendingStories } from "../../store/trending"

const TrendingStories = () => {
    const [loaded, setLoaded] = useState(false);
    const articles = useSelector(state => state.trending.stories);
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            await dispatch(getTrendingStories());
            return setLoaded(true);
        })()
    }, [])

    return loaded && (
        <>
            <p>Trending</p>
            {articles.map(article => (<p>{article.story.title}</p>))}
        </>
    );
};

export default TrendingStories;
