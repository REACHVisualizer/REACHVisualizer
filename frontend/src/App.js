import ChemicalTable from "./components/ChemicalTable";
import Pricing from "./pages/Pricing";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F39200'
    }
  }
});

function App() {
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

  // bress a button to fetch https://stackoverflow.com/questions/55647287/how-to-send-request-on-click-react-hooks-way

  return <ThemeProvider theme={theme}>
    <div>
      {
        data.length === 0 ? <div>loading...</div> : data.map(d => <div>my chemical is {d.substance_name}</div>)
      }
    </div>
    <Pricing />
  </ThemeProvider>;
}

export default App;
