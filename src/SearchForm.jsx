const SearchForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const searchText = e.target.elements.search.value;
        if (!e.target.elements.search.value) return;
        console.log(searchText);
    };
    return (
        <section>
            <h2 className="title">Unsplash image...</h2>
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-input search-input"
                    placeholder="cat"
                    name="search"
                />
                <button type="submit" className="btn">
                    Search
                </button>
            </form>
        </section>
    );
};

export default SearchForm;
