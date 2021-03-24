import React from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import './Search.css';

function SearchPage(){
    const history = useHistory();

    const searchInfo = useSelector(state => state.search.story);
    return(
        <div>{
            searchInfo && searchInfo.map((search, index) => (
                <div className="search-landing__container">
                    <div className="search-landing__title">{search.title}</div>
                    <div className="search-landing__subtitle">{search.subtitle}</div>
                    <img className="search-landing__image" src={search.image} alt={search.title}/>
                    <p className="search-landing__content">{search.content}</p>
                </div>
            ))

            }</div>
    )
}

export default SearchPage;
