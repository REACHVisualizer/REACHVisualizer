import React from 'react';
import MUIDataTable from "mui-datatables";
import ExpandButton from '../components/ExpandButton';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Accordian from '../components/Accordian';

const muiCache = createCache({
  key: 'mui-datatables',
  prepend: true,
});


  function Example() {
    const columns = [
      {
        name: 'Id',
        options: {
          filter: false,
          display: false,
        },
      },
      {
        name: 'Substance Name',
        options: {
          filter: true,
        },
      },
      {
        name: 'EC Number',
        options: {
          filter: true,
        },
      },
      {
        name: 'CAS Number',
        options: {
          filter: true,
        },
      },
    ];

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

    //data needs to be array of arrays, convert array of objects to array of arrays
    var data2 = data.map( Object.values );
    console.log(data2);

    //const dataToAccordian = () => {data2};

    const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: 'standard',
      expandableRows: true,
      expandableRowsHeader: false,
      expandableRowsOnClick: true,
      renderExpandableRow: (rowData, rowMeta) => {
        const colSpan = rowData.length + 1;
        return (
          <TableRow>
            {/* <TableCell colSpan={colSpan}>Custom expandable row option. Data: {JSON.stringify(rowData)}</TableCell> */}
            <TableCell colSpan={colSpan}><Accordian dataToAccordian={rowData}/></TableCell>
          </TableRow>
          
        );
      },
      onRowExpansionChange: (curExpanded, allExpanded, rowsExpanded) =>
        console.log(curExpanded, allExpanded, rowsExpanded),
    };

    const theme = createTheme({
      overrides: {
        MUIDataTableSelectCell: {
          expandDisabled: {
            // Soft hide the button.
            visibility: 'hidden',
          },
        },
      },
    });

    const components = {
      ExpandButton: function(props) {
        return <ExpandButton {...props} />;
      },
    };

    return (
      <CacheProvider value={muiCache}>
        <ThemeProvider theme={theme}>
          <MUIDataTable
            title={'Chemical Universe'}
            data={data2}
            columns={columns}
            options={options}
            components={components}
          />
        </ThemeProvider>
      </CacheProvider>
    );
  }


export default Example;