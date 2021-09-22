// import dependencies
import React, { useState } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import { Box, ThemeProvider, createTheme, Hidden, responsiveFontSizes } from '@material-ui/core';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

//global stylesheet
import './css/style.css';

// page imports
import Homepage from './pages/Homepage';
import About from './pages/About';
import Projects from './pages/Projects';

// component imports
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Menu from './components/Menu';


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

const BodyContainer = styled.div`
  min-height: 90vh;
  height: 100%;
  /* overflow-x: hidden; */
`;


// theme = responsiveFontSizes(theme);

// creating history
const history = createHistory();

function App() {
  const [page, setPage] = useState('/');
  const [open, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(prevState => !prevState);
  }

  const handleSetPage = (event: React.SyntheticEvent) => {
    let target = event.currentTarget as HTMLInputElement;
    setPage(target.id);
  }

  return (
    <div className="App">
      <Router history={history}>
        <Navbar open={open} handleDropDown={handleDropDown} />
        <ThemeProvider theme={theme}>
          <Box display="flex">
            <Hidden mdDown>
              <Sidebar page={page} setPage={handleSetPage}/>
            </Hidden>
            <BodyContainer>
              
                {/*open && (<Hidden lgUp><Dropdown /></Hidden>)*/}
                {open && (<Hidden lgUp><Menu /></Hidden>)}

              <AnimatePresence exitBeforeEnter initial={true}> 
                <Switch>
                  <Route exact path="/" component={Homepage}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/projects" component={Projects}/>
                </Switch>
              </AnimatePresence>
            </BodyContainer>
          </Box>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
