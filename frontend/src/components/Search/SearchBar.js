

function SearchBar(){
    return(
        <form>
            <input
                 className="nav-search__input"
                 placeholder="Search"
                 type="text"
                 name="term"
                 onChange={(e) => setSearch(e.target.value)}
                 value={search}
            />
            <button>
                <i className="fas fa-search fa-lg"></i>
            </button>
        </form>
    )
}

export default SearchBar;
