import React, { useContext,useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {fetchURL} from '../apiComponents/FetchComponent';
import { LanguageContext } from '../App';
const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
  },
  media: {
    
     height: "200px",
     width:"200px"
    
  },
   container: {
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-around',
    '& > *': {
      margin: theme.spacing(1),

    },

  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

}));

export default function Member() {
   let language=useContext(LanguageContext);
  const [loading, setloading] = useState(true);
  const [dataIndex, setdataIndex] = useState(0);
  const [allMembers, setallMembers] = useState({results:[]});
  
  useEffect(() => {
    const getData=async()=>{
      let {data,loading,dataIndex} = await fetchURL(`http://localhost:8000/about/api/get_team_members/${language}/`);
      setallMembers(data);
      setdataIndex(dataIndex);
      setloading(loading);
    }
    getData();
    
  }, [language]);
  
  const classes = useStyles();
  let expandCount=[];
  if(dataIndex){
    
    for (let i = 0; i <= dataIndex; i++) {
        expandCount.push(false);
    }

  }

  const [expanded, setExpanded] = React.useState(expandCount);


   

  const handleExpandClick = (id) => {
    let newExpand = [...expanded];
    newExpand[id]= !newExpand[id];
    setExpanded(newExpand);
  };

  return (
    <div className={classes.container}>
      {loading && <Typography variant="body2" color="textSecondary" component="p">
                  Loading...
                </Typography>}
      {allMembers &&
        allMembers.results.map((member,index)=>{
          
          
          

          return(
            <Card className={classes.root} key={member.id}>
              
              <CardMedia
                className={classes.media}
                image={member.profile_picture}
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Name : {member.full_name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Position : {member.position}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Contacts : {member.primary_contact}({member.secondary_contact})
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded[index],
                  })}
                  onClick={()=>handleExpandClick(index)}
                  aria-expanded={expanded[index]}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                <CardContent>
            
                  <Typography paragraph>
                    Province : {member.province}
                  </Typography>
                  <Typography paragraph>
                    Qualifications : {member.qualifications}
                  </Typography>
                  <Typography paragraph>
                    Description : {member.description}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          );
        })
      }

    </div>
  );
}
