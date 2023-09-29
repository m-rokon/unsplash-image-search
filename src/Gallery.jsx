import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "./globalContext";
import axios from "axios";

const url = `https://api.unsplash.com/search/photos?client_id=${
    import.meta.env.VITE_API_KEY
}`;
const Gallery = () => {
    const { searchTerm } = useGlobalContext();

    const response = useQuery({
        queryKey: ["images", searchTerm],
        queryFn: async () => {
            const result = await axios.get(`${url}&query=${searchTerm}`);
            return result.data;
        },
    });

    if (response.isLoading) {
        return (
            <section className="image-container">
                <h2>Loading...</h2>
            </section>
        );
    }

    if (response.isError) {
        return (
            <section className="image-container">
                <h2>There was an error.</h2>
            </section>
        );
    }

    const results = response.data.results;

    if (results.length < 1) {
        return (
            <section className="image-container">
                <h2>Nothing found</h2>
            </section>
        );
    }

    return (
        <section className="image-container">
            {results.map((item) => {
                const url = item?.urls?.regular;
                return (
                    <img
                        src={url}
                        alt={item.alt_description}
                        key={item.id}
                        className="img"
                    />
                );
            })}
        </section>
    );
};

export default Gallery;
