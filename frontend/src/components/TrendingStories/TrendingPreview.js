import React from 'react';
import './trendingPreview.css'

const TrendingPreview = ({ article, rank }) => {
    const firstName = article.story.User.firstName;
    const lastName = article.story.User.lastName;
    return (
        <div className="trending-preview-container">
            <p>{`0${rank}`}</p>
            <p>{`${firstName} ${lastName}`}</p>
            <p>{article.story.title}</p>
        </div>
    );
};

export default TrendingPreview;
