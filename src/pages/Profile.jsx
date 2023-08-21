import React from "react";
import Navbar from "../components/Navbar";
import { Container, Divider, Paper, Typography } from "@mui/material";
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
                    <Box width="100%" marginTop={2}>
                        <Divider>Variações</Divider>
                        <Box component="img" src={sprites.front_female} width="30%" height="30%"/>
                        <Box component="img" src={sprites.front_shiny} width="30%" height="30%"/>
                        <Box component="img" src={sprites.front_shiny_female} width="30%" height="30%"/>
                        
                    </Box>
                </Box>
            </Paper>
        </Container>
        </>
    ); 
};