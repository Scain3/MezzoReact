

function SearchBar(){
    return(
        <form>
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
