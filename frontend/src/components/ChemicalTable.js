import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

  
  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.substance_name}
          </TableCell>
          <TableCell align="center">{row.ec_number}</TableCell>
          <TableCell align="center">{row.cas_number}</TableCell>
          <TableCell align="right"><Chip label="Data Generation" color="success" variant="outlined" /></TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
              Substance Information
              <Table size="medium" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Restriction List</TableCell>
                    <TableCell align="left">Entry 99</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                </TableBody>
              </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }


function ChemicalTable(){
  const [data, setData] = React.useState([]);
  React.useEffect(
    () => {
      const fetchData = async () => {
        const result = await fetch(
          'http://localhost:3001/chemical'
        );
        const json = await result.json();
        setData(json);
      }
      fetchData();
    }, [setData]);
    console.log(data);


    return(
        <TableContainer>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="left">Substance Name</TableCell>
            <TableCell align="center">EC Number</TableCell>
            <TableCell align="center">CAS Number</TableCell>
            <TableCell align="right">Chemical Universe Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <Row key={row.substance_name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}

export default ChemicalTable;


