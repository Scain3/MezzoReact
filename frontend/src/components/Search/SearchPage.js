import React from "react";
import {useSelector} from "react-redux";
import { NavLink } from "react-router-dom";
// import {useHistory} from "react-router-dom";
import './Search.css';

function SearchPage(){
    // const history = useHistory();

    const searchInfo = useSelector(state => state.search.story);
    return(
        <div>{
            searchInfo && searchInfo.map((search, index) => (
                <div className="search-landing__container" >
                    <div>
                        <div>{`${search.User.firstName} ${search.User.lastName}`}</div>
                        <NavLink to={`/story/${search.id}`} className="search-landing__title">{search.title}</NavLink>
                        <div className="search-landing__subtitle">{search.subtitle}</div>
                        <img className="search-landing__image" src={search.image} alt={search.title}/>
                        <p className="search-landing__content">{search.content}</p>
                    </div>
                </div>
            ))

            }</div>
    )
}

export default SearchPage;
