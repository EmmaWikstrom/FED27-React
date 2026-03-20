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
            } catch (error) {
                setError("Could not load data");
            } finally {
                setLoading(false)
            }
        };
        fetchCharacters();
    }, []);

    if (loading) return <p>Loading...</p>;

    if (error) return <p>{error}</p>


    return (
        <div>
            <h2>Characters</h2>
            <ul>
                {characters.map((character) => { 
                    <li key={character.name}>{character.name}</li>
                })}
            </ul>
        </div>
    );        
};

export default CharacterList;