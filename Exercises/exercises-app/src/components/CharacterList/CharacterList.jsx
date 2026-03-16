import { useState, useEffect } from "react";

const CharacterList = () => {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch(`https://swapi.info/api/people`);
                const data = await response.json();
                setCharacters(data);
                setLoading(false);
            } catch (error) {
                setError("Could not load data");
                setLoading(false)
            }
        };
        fetchCharacters();
    }, []);

    return (
        <div>
            <h2>Characters</h2>
        </div>
    );        
};

export default CharacterList;