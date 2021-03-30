import React from "react";
import {useSelector} from "react-redux";
import { NavLink } from "react-router-dom";
import {useHistory} from "react-router-dom";
import './Search.css';

function SearchPage(){
    const history = useHistory();

    const searchInfo = useSelector(state => state.search.story);
    return(
        <div>{
            searchInfo && searchInfo.map((search, index) => (
                <div className="search-landing__container" >
                    <div className="centering-div">
                        <div className="search-landing__author">{`${search.User.firstName} ${search.User.lastName}`}</div>
                        <img className="search-landing__image" src={search.image} alt={search.title}/>
                        <div onClick={()=>history.push(`/story/${search.id}`)} className="search-landing__title">{search.title}</div>
                        <div className="search-landing__subtitle">{search.subtitle}</div>
                        <p className="search-landing__content">{search.content}</p>
                    </div>
                </div>
            ))

            }</div>
    )
}

export default SearchPage;
