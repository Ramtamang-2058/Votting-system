import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MainPage from '../aboutcomponents/MainPage'
import Organization from '../aboutcomponents/Organization'
import Lead from '../aboutcomponents/Lead'
import Member from '../aboutcomponents/Member'
import ApplyMember from '../aboutcomponents/ApplyMember'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="h1">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function About() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
          <Tab label="Main Page" {...a11yProps(0)} />
          <Tab label="Organization" {...a11yProps(1)} />
          <Tab label="Leads" {...a11yProps(2)} />
          <Tab label="Members" {...a11yProps(3)} />
          <Tab label="Apply Membership" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} >
        <MainPage/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Organization/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Lead />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Member/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ApplyMember/>
      </TabPanel>
    </div>
  );
}
