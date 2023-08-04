import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import axios from "axios";
import { Api } from "@mui/icons-material";

export const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(()=>{
        getPokemons()
    }, []);

    const getPokemons = () => {
        var endpoints = []
        for (var i = 1; i<50;i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
        }
    var response = axios.all(endpoints.map((endpoint)=>axios.get(endpoint))).then((res) => setPokemons(res));
    };

    const pokemonFilter = (name) =>{
        var filteredPokemons = [];
        if (name===""){
            getPokemons();
        }
        for (var i in pokemons) {
            if (pokemons[i].data.name.includes(name)){
                filteredPokemons.push(pokemons[i]);
            }
        }
        setPokemons(filteredPokemons);
    };

    return(
        <div>
            <Navbar pokemonFilter={pokemonFilter}/>
            <Container maxWidth="false">
                <Grid container>
                    {pokemons.map((pokemon, key)=> (
                    <Grid item xs={2} key={key}>
                        <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default}/>
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}