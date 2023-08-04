import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, {useEffect} from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import axios from "axios";

export const Home = () => {
    useEffect(()=>{
        getPokemons()
    }, []);

    const getPokemons = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=50")
        .then((res)=> console.log(res))
        .catch((err) => console.log(err))
    }

    return(
        <div>
            <Navbar/>
            <Container maxWidth="false">
                <Grid container>
                    <Grid item xs={3}>
                        <PokemonCard />
                    </Grid>
                    <Grid item xs={3}>
                        <PokemonCard />
                    </Grid>
                    <Grid item xs={3}>
                        <PokemonCard />
                    </Grid>
                    <Grid item xs={3}>
                        <PokemonCard />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}