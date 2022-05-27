//import ChemicalTable from "./components/ChemicalTable";
import Pricing from "./pages/Pricing";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F39200'
    },
    red: {
      main: '#E61E42'
    },
  }
});

function App() {
  return <ThemeProvider theme={theme}>
    <Pricing />
  </ThemeProvider>;
}

export default App;
