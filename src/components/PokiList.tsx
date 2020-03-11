import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ApiObject {
    name: string;
    url: string;
}
interface ApiResult {
    results: ApiObject[];
}

const PokemonList: React.FC = () => {
    const [responseData, setResponseData] = useState<ApiObject[]>([]);
    const handleClick = () => {
        axios.get<ApiResult>("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
                console.log(response)
                setResponseData(response.data.results)
            })
    }

    return (
        <div className="App">
            <button className="button" onClick={handleClick}>FetchPokemon</button>
            <div>
                {responseData.map((pokemon, i) => (
                    <p key={i}>{pokemon.name}</p>
                ))}
            </div>
        </div>
    )
}
export default PokemonList;