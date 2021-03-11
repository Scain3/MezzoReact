// import React, {useState} from "react";
// import {useDispatch} from "react-redux";
// import {fetchProductInfo} from "../../store/search";
// import {useHistory} from "react-router-dom";
import './Search.css';

function SearchBar(){
    // const [search, setSearch] = useState();
    // const dispatch = useDispatch();
    // const history = useHistory();

    return(
        <form className="nav-search__form">
            <input
                 className="nav-search__input"
                 placeholder="Search"
                 type="text"
                 name="term"
            />
            <button>
                <i className="fas fa-search fa-lg"></i>
            </button>
        </form>
    )
}

export default SearchBar;
