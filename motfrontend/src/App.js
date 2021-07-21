import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { makeStyles,createTheme } from "@material-ui/core/styles";
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


const useStyles = makeStyles((theme) => ({
  languageCss:{
    display:'flex',
    justifyContent:'flex-end',
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
      main: '#3b6ba5',
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
            <About />
          </Route>
           <Route exact path="/request">
            <RequestHelp />
          </Route>
          <Route exact path="/apply">
            <ApplyMember />
          </Route>
          <Route exact path="/newsresources">
            <NewsResources/>
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

export {App,LanguageContext};

