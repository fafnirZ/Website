// import dependencies
import React, { useState } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import { Box, ThemeProvider, createTheme, Hidden, responsiveFontSizes } from '@material-ui/core';
import { AnimatePresence } from 'framer-motion';

//global stylesheet
import './css/style.css';

// page imports
import Homepage from './pages/Homepage';
import About from './pages/About';
import Projects from './pages/Projects';

// component imports
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';


// theme declaration
let theme = createTheme({
  palette: {
    // for buttons
    primary: {
      main: "#60C697"
    },
    secondary: {
      main: "#FFFFFF"
    } 
  }, 
});

theme.typography.h5 = {
  ...theme.typography.h5,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem'
  }
}

theme.typography.body1 = {
  ...theme.typography.body1,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem'
  }
}

// theme = responsiveFontSizes(theme);

// creating history
const history = createHistory();

function App() {
  const [page, setPage] = useState('/');

  const handleSetPage = (event: React.SyntheticEvent) => {
    let target = event.currentTarget as HTMLInputElement;
    setPage(target.id);
  }

  return (
    <div className="App">
      <Router history={history}>
        <Navbar />
        <ThemeProvider theme={theme}>
          <Box display="flex">
            <Hidden mdDown>
              <Sidebar page={page} setPage={handleSetPage}/>
            </Hidden>
            <Box minHeight="90vh">
              <AnimatePresence exitBeforeEnter initial={true}> 
                <Switch>
                  <Route exact path="/" component={Homepage}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/projects" component={Projects}/>
                </Switch>
              </AnimatePresence>
            </Box>
          </Box>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
