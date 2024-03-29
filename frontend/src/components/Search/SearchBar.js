import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {fetchSearchInfo} from "../../store/search";
import {useHistory} from "react-router-dom";
import './Search.css';

function SearchBar(){
    const [search, setSearch] = useState();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchSearchInfo(search));
        history.push('/search')
    }

    return(
        <form className="nav-search__form" onSubmit={handleSubmit}>
            <input
                 className="nav-search__input"
                 placeholder="Search"
                 type="text"
                 name="term"
                 onChange={(e) => setSearch(e.target.value)}
                 value={search}
            />
            <button>
                <i className="fas fa-search fa-lg search-icon"></i>
            </button>
        </form>
    )
}

export default SearchBar;
