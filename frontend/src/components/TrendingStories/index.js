import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from "react-redux"
import { getTrendingStories } from "../../store/trending";

import TrendingPreview from "./TrendingPreview"

const TrendingStories = () => {
    const [loaded, setLoaded] = useState(false);
    const articles = useSelector(state => state.trending.stories);
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            await dispatch(getTrendingStories());
            return setLoaded(true);
        })()
    }, [dispatch])

    return loaded && (
        <>
            <p>Trending</p>
            {articles.map((story, i) => (<TrendingPreview key={i} article={story} rank={i + 1} />))}
        </>
    );
};

export default TrendingStories;
