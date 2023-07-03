export const SearchBar = () => {
    return (
        <>
            <h1 className="heading-2">Explore all the books available</h1>
            <div className="search-wrap">
                <input type="search" name="search" id="search" placeholder="Search Books"></input>
                <button className="btn btn-primary">Search</button>
            </div>
        </>
    )
}