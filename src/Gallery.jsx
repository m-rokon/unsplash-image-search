import { useGlobalContext } from "./globalContext";

const url = `https://api.unsplash.com/search/photos?client_id=${
    import.meta.env.VITE_API_KEY
}`;
const Gallery = () => {
    const { searchTerm } = useGlobalContext();

    return <h2>Gallery</h2>;
};

export default Gallery;
