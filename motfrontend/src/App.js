import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Home from './pages/Home';
import About from './pages/About';
import RequestHelp from './pages/RequestHelp';
import Contact from './pages/Contact';
import Navbar from './Navbar';
import NotFound from './pages/404NotFound';
import NewsResources from './pages/NewsResources';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));
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
    
      <BrowserRouter>
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel htmlFor="filled-age-native-simple">
            Select Language
          </InputLabel>
          <Select native value={language} onChange={handleChange}>
            <option value={"en"}>English</option>
            <option value={"np"}>Nepali</option>
          </Select>
      </FormControl>
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
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/newsresources">
            <NewsResources/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        </LanguageContext.Provider>
      </BrowserRouter>
    </>
  );
}

export {App,LanguageContext};

