import React from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import { estimateTime, parseDate } from "../../utils";
import './Search.css';

function SearchPage(){
    const history = useHistory();

    const searchInfo = useSelector(state => state.search.story);
    return(
        <div>
            <div>{
                searchInfo && searchInfo.map((search, index) => (
                    <div className="search-landing__container" >
                        <div className="centering-div">
                            <h3 className="search-landing__author">{`${search.User.firstName} ${search.User.lastName}`}</h3>
                            <p className="story-page-stats">
                                {`${parseDate(search.createdAt)}`}{" "}
                                <span className="story-page-stats-spacer">•</span>{" "}
                                {`${estimateTime(search.content)} min read`}
                                <span className="story-page-stats-spacer">
                                    <i className="fas fa-music"></i>
                                </span>{" "}
                            </p>
                            <img className="search-landing__image" src={search.image} alt={search.title}/>
                            <div>
                                <div onClick={()=>history.push(`/story/${search.id}`)} className="search-landing__title">{search.title}</div>
                                <div className="search-landing__subtitle">{search.subtitle}</div>
                                <div className="search-landing__content" onClick={()=>history.push(`/story/${search.id}`)} >Read More...</div>
                            </div>
                        </div>
                        <div className="right-div">

                        </div>
                    </div>
                ))

                }</div>
        </div>
    )
}

export default SearchPage;
