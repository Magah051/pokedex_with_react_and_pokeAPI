import React from "react";
import Navbar from "../components/Navbar";
import { Chip, Container, Divider, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PokemonTable from "../components/PokemonTable";

export const Profile = ({pokemonData}) => {
    const {name, sprites, moves} = pokemonData;
    return (
        <>
        <Navbar hideSearch />
        <Container maxWidth="md">
            <Paper elevation={3}>
                <Box display="flex" flexDirection="column" alignItems="center" p={5}>
                <Typography variant="h4">{name}</Typography>
                    <Box display="flex" alignItems="center" width="50%">
                        <Box component="img" src={sprites.front_default} width="100%" height="100%"/>
                        <PokemonTable pokemonData={pokemonData}/>
                    </Box>
                    <Box width="100%" marginTop={2}>
                        <Divider>Variações</Divider>
                        <Box component="img" src={sprites.front_female} width="30%" height="30%"/>
                        <Box component="img" src={sprites.front_shiny} width="30%" height="30%"/>
                        <Box component="img" src={sprites.front_shiny_female} width="30%" height="30%"/>
                        <Divider>Ataques</Divider>
                        <Box textAlign="center" marginTop="10px">
                            {moves.map((moveData, key) => (
                                <Chip key={key} sx={{m: "5px"}} label={moveData.move.name} />
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Container>
        </>
    ); 
};