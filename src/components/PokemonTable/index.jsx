import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { typeHandle } from '../../utils';

export default function PokemonTable({pokemonData}) {
    const {height, weight, types} = pokemonData;
  return (
    <TableContainer component={Paper} sx={{height: "fit-content", maxWidth:"250px"}}>
      <Table aria-label="a dense table">
        {/* <TableHead>
          <TableRow>
            <TableCell>Altura</TableCell>
            <TableCell>Peso</TableCell>
            <TableCell>Tipo</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
        <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Height
              </TableCell>
              <TableCell component="th" scope="row">
                {height + "cm"}
              </TableCell>
        </TableRow>

        <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
            Weight
              </TableCell>
              <TableCell component="th" scope="row">
                {weight + "g"}
              </TableCell>
        </TableRow>

        <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Tipo
              </TableCell>
              <TableCell component="th" scope="row">
                {typeHandle(types)}
              </TableCell>
        </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
  );
}
