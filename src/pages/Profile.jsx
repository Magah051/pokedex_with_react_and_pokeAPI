import React from "react";
import Navbar from "../components/Navbar";
import { Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PokemonTable from "../components/PokemonTable";

export const Profile = ({pokemonData}) => {
    const {name, sprites} = pokemonData;
    return (
        <>
        <Navbar hideSearch />
        <Container maxWidth="md">
            <Paper elevation={3}>
                <Box display="flex" flexDirection="column" alignItems="center" p={5}>
                <Typography variant="h4">{name}</Typography>
                    <Box display="flex" width="100%">
                        <Box component="img" src={sprites.front_default} width="100%" height="100%"/>
                        <PokemonTable pokemonData={pokemonData}/>
                    </Box>
                </Box>
            </Paper>
        </Container>
        </>
    ); 
};