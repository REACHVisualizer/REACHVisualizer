import * as React from 'react';
import AppBar from '@mui/material/AppBar';
//import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import MUIChemicalTable from '../components/MUIChemicalTable';
import NavTabs from '../components/NavTabs';
//import Chip from '@mui/material/Chip';




function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        REACH Visualizer
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Interesting feature',
      'Random feature',
      'Team feature',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

function PricingContent() {
  
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="button" noWrap sx={{ flexGrow: 1 }}>
              <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
}}>
          <ArrowForwardIcon fontSize="small" color="primary"/>&nbsp;REACH Visualizer
          </div>
          </Typography>
          <nav>
            <NavTabs/>
          </nav>         
        </Toolbar>
      </AppBar>
      {/* Hero unit */} 
      <Container maxWidth="lg" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h3"
          variant="h4"
          align="left"
          color="text.primary"
          gutterBottom
        >
          Discover Chemical Regulations
        </Typography>
        <Typography variant="button" align="left" color="text.secondary" component="p">
          Search Name, CAS or EC Number
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="lg" component="main">
        {/* <ChemicalTable /> */}
        <MUIChemicalTable />
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        background="black"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="subtitle1" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}