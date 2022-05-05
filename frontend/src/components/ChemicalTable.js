import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(name, calories, fat, carbs, protein, price) {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
      price,
      history: [
        {
          date: '2020-01-05',
          customerId: '11091700',
          amount: 3,
        },
        {
          date: '2020-01-02',
          customerId: 'Anonymous',
          amount: 1,
        },
      ],
    };
  }
  
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
            {row.name}
          </TableCell>
          <TableCell align="center">{row.calories}</TableCell>
          <TableCell align="center">{row.fat}</TableCell>
          <TableCell align="right">{row.carbs}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Customer</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell align="right">Total price ($)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow) => (
                      <TableRow key={historyRow.date}>
                        <TableCell component="th" scope="row">
                          {historyRow.date}
                        </TableCell>
                        <TableCell>{historyRow.customerId}</TableCell>
                        <TableCell align="right">{historyRow.amount}</TableCell>
                        <TableCell align="right">
                          {Math.round(historyRow.amount * row.price * 100) / 100}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.string.isRequired,
        carbs: PropTypes.string.isRequired,
        fat: PropTypes.string.isRequired,
        history: PropTypes.arrayOf(
        PropTypes.shape({
            amount: PropTypes.number.isRequired,
            customerId: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
        }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        protein: PropTypes.string.isRequired,
    }).isRequired,
};

const rows = [
     createData('Formaldehyde', '200-001-8', '50-00-0', 'Data Generation'),
     createData('Formaldehyde', '200-001-8', '50-00-0', 'Data Generation'),
     createData('Formaldehyde', '200-001-8', '50-00-0', 'Data Generation'),
     createData('Formaldehyde', '200-001-8', '50-00-0', 'Data Generation'),
     createData('Formaldehyde', '200-001-8', '50-00-0', 'Data Generation'),
     createData('Formaldehyde', '200-001-8', '50-00-0', 'Data Generation'),
  ];

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
          {data.map((d) => (
            <Row key={d.name} row={d} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}

export default ChemicalTable;


