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
                <div>
                    <div>{search.title}</div>
                    <div>{search.subtitle}</div>
                    <img src={search.image} alt={search.title}/>
                    <div>{search.content}</div>
                </div>
            ))

            }</div>
    )
}

export default SearchPage;
