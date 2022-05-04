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
  const [data, setData] = useState({ hits: [] });

  React.useEffect(async () => {
    const result = await axios(
      'https://hn.algolia.com/api/v1/search?query=redux',
    );

    setData(result.data);
  });

  return <ThemeProvider theme={theme}>
    <div></div>
    <Pricing />
  </ThemeProvider>;
}

export default App;
