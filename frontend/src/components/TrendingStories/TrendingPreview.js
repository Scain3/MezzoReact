import React from 'react';
import './trendingPreview.css'

const TrendingPreview = ({ article, rank }) => {
    const firstName = article.story.User.firstName;
    const lastName = article.story.User.lastName;
    return (
        <div className="trending-preview-container">
            <p>{rank}</p>
            <p>{article.story.title}</p>
            <p>{`${firstName} ${lastName}`}</p>
        </div>
    );
};

export default TrendingPreview;
