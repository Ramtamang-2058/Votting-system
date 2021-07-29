import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { makeStyles, createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Home from './pages/Home';
import About from './pages/About';
import RequestHelp from './pages/RequestHelp';
import ApplyMember from './pages/ApplyMember';
import Navbar from './Navbar';
import NotFound from './pages/404NotFound';
import NewsResources from './pages/NewsResources';
import Footer from './Footer';
import Lead from './aboutcomponents/Lead';
import Member from './aboutcomponents/Member';
import Donation from './pages/Donation';


const useStyles = makeStyles((theme) => ({
  languageCss: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  formControl: {
    margin: theme.spacing(1),
    width: 130,

  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));
const theme = createTheme({
  palette: {
    primary: {
      main: '#0D6199',//#3b6ba5
    },
    secondary: {
      main: '#72a5d3',
    },

  },
});
const LanguageContext = React.createContext();

function App() {
  const classes = useStyles();
  const [language, setLanguage] = React.useState("en");


  const handleChange = (event) => {
    console.log(event.target.value);
    setLanguage(event.target.value);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className={classes.languageCss}>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel htmlFor="filled-age-native-simple">
                Select Language
              </InputLabel>
              <Select native value={language} onChange={handleChange}>
                <option value={"en"}>English</option>
                <option value={"np"}>Nepali</option>
              </Select>
            </FormControl>
          </div>
          <LanguageContext.Provider value={language}>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About pageValue={0} />
              </Route>
              <Route exact path="/request">
                <RequestHelp />
              </Route>
              <Route exact path="/apply">
                <ApplyMember />
              </Route>
              <Route exact path="/newsresources">
                <NewsResources />
              </Route>
              <Route exact path="/donation">
                <Donation />
              </Route>
              <Route exact path="/about/organization">
                <About pageValue={1} />
              </Route>
              <Route exact path="/about/leads">
                <About pageValue={2} />
              </Route>
              <Route exact path="/about/members">
                <About pageValue={3} />
              </Route>
              <Route exact path="/about/contact">
                <About pageValue={4} />
              </Route>
              
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            <Footer />
          </LanguageContext.Provider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export { App, LanguageContext };

