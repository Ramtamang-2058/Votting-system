import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import waveImg from "../org.png";
import { fetchURL } from '../apiComponents/FetchComponent';
import { LanguageContext } from '../App';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    display: 'flex',

    '& > *': {
      margin: theme.spacing(1),

    },
  },
  media: {
    height: "200px"
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    '& > *': {
      margin: theme.spacing(1),

    },

  },
}));

export default function Organization() {
  let language = useContext(LanguageContext);
  const [loading, setloading] = useState(true);
  const [allMembers, setallMembers] = useState({ results: [] });

  useEffect(() => {
    const getData = async () => {
      let { data, loading } = await fetchURL(`https://missionoxygenteam.org/about/api/get_organization/${language}/`);
      setallMembers(data);
      setloading(loading);
      console.log(data);
      console.log(loading);
    }
    getData();

  }, [language]);

  const classes = useStyles();


  return (
    <div className={classes.container}>
      {loading && <Typography variant="body2" color="textSecondary" component="p">
        Loading...
      </Typography>}
      {allMembers &&
        allMembers.results.map((member, index) => {

          return (
            <Card className={classes.root} key={member.id} >
              <CardActionArea onClick={() => window.open('https://' + member.contact_website, '_blank')}>
                <CardMedia
                  className={classes.media}
                  image={member.logo}
                  title="Logo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {member.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {member.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          )
        })}

    </div>
  );
}
