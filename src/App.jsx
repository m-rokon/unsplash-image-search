import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";
import Gallery from "./Gallery";

function App() {
    return (
        <main className="container">
            <ThemeToggle />
            <SearchForm />
            <Gallery />
        </main>
    );
}

export default App;
