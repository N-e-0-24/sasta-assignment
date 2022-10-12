import React, { useEffect, useState } from "react";
import axios from "axios";
import './Home.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Home() {
    const [stockData, setStockData] = useState();

    useEffect(() => {
        fetchdata();
      });
 
      const fetchdata = async () => {
        try {
          await axios.get('https://finnhub.io/api/v1/search?&token=cd38nlaad3i5rnptp4i0cd38nlaad3i5rnptp4ig').then(function (response) {
            console.log(response.data.result);
            setStockData(JSON.stringify(response.data.result))
          });
        } catch (e) {
          console.log(e);
        }
      };

  return (
    
    <div className="Home">
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stockData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.displaySymbol}</TableCell>
              <TableCell align="right">{row.symbol}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
  }

export default Home
