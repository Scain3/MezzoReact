import React from 'react';
import './trendingPreview.css'

const TrendingPreview = ({ article, rank }) => {
    const firstName = article.story.User.firstName;
    const lastName = article.story.User.lastName;
    return (
        <div className="trending-preview-container">
            <div className="trending-preview-rank">
                <p>{`0${rank}`}</p>
            </div>
            <div className="trending-preview-details-container">
                <p>{`${firstName} ${lastName}`}</p>
                <p>{article.story.title}</p>
            </div>
        </div>
    );
};

export default TrendingPreview;
