import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { postFetchURL } from '../apiComponents/FetchComponent';
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop:theme.spacing(2),
    flexDirection: 'column',

    '& > *': {
      flexGrow: 1,
      margin: theme.spacing(1),

    },
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
    textAlign: 'center'
  },
  languageCss: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  formControl: {

    display:'flex',

  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));


export default function ApplyMember() {
  const classes = useStyles();
  const [province, setProvince] = useState('1');
  const [full_name, setFullname] = useState('');
  const [qualifications, setQualifications] = useState('');
  // const [position, setPosition] = useState('');
  const [primary_contact, setPrimary] = useState('');
  const [secondary_contact, setSecondary] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [provinceError, setProvinceError] = useState(false);
  const [fullNameError, setFullNameError] = useState(false);
  const [qualificationsError, setQualificationsError] = useState(false);
  // const [positionError, setPositionError] = useState(false);
  const [primaryError, setPrimaryError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const handleSubmit = (e) => {
    setProvinceError(false);
    setFullNameError(false);
    setQualificationsError(false);
    setPrimaryError(false);
    // setPositionError(false);
    setEmailError(false);
    setDescriptionError(false);

    e.preventDefault();



    // if (province == '') {
    //   setProvinceError(true);
    // }
    if (full_name == '') {
      setFullNameError(true);
    }
    if (qualifications == '') {
      setQualificationsError(true);
    }
    if (primary_contact == '') {
      setPrimaryError(true);
    }
    // if (position == '') {
    //   setPositionError(true);
    // }
    if (email == '') {
      setEmailError(true);
    }
    if (description == '') {
      setDescriptionError(true);

    }

    if (full_name && qualifications && primary_contact && email && description ) {

      const profilePic = document.getElementById('raised-button-img');
      const resumeFile = document.getElementById('raised-button-file');


      if (!profilePic.files[0]) {
        alert('Please select an image for profile picture!');
      }
      else if (!resumeFile.files[0]) {
        alert('Please select a file for resume!');

      } else {
        var formData = new FormData();
        formData.append('province', province);
        formData.append('full_name', full_name);
        // formData.append('position', position);
        formData.append('email', email);
        formData.append('primary_contact', primary_contact);
        formData.append('secondary_contact', secondary_contact);
        formData.append('qualifications', qualifications);
        formData.append('description', description);
        formData.append('profile_picture', profilePic.files[0]);
        formData.append('resume', resumeFile.files[0]);
        postFetchURL('https://missionoxygenteam.org/about/api/post_members/', formData);
      }
      // else if ()




    } else {


    }



    // setTitleError(false);
    // setDetailsError(false);

    // if (province == '') {
    //   setTitleError(true);
    // }
    // if (province == '') {
    //   setDetailsError(true);
    // }
    // if (province && province) {
    //   console.log(province, province);
    // } 
  }
  const handleChange = (event) => {
    console.log(event.target.value);
    setProvince(event.target.value);
  };

  return (
    <Container size="sm">
      <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" color="primary">
            Application Form
          </Typography>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>

            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel htmlFor="filled-age-native-simple">
                Select Province
              </InputLabel>
              <Select native value={province} onChange={handleChange}>
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
                <option value={"4"}>4</option>
                <option value={"5"}>5</option>
                <option value={"6"}>6</option>
                <option value={"7"}>7</option>
              </Select>
            </FormControl>
            {/* <TextField className={classes.field}
              onChange={(e) => setProvince(e.target.value)}
              label="Province"
              variant="outlined"
              color="secondary"
              fullWidth
              required
              error={provinceError}
            /> */}
            <TextField className={classes.field}
              onChange={(e) => setFullname(e.target.value)}
              label="Full Name"
              variant="outlined"
              color="secondary"
              fullWidth
              required
              error={fullNameError}
            />
            <TextField className={classes.field}
              onChange={(e) => setQualifications(e.target.value)}
              label="Qualifications"
              variant="outlined"
              color="secondary"
              fullWidth
              required
              error={qualificationsError}
            />
            {/* <TextField className={classes.field}
              onChange={(e) => setPosition(e.target.value)}
              label="Position"
              variant="outlined"
              color="secondary"
              fullWidth
              required
              error={positionError}
            /> */}
            <TextField className={classes.field}
              onChange={(e) => setPrimary(e.target.value)}
              label="Contact Primary"
              variant="outlined"
              color="secondary"
              fullWidth
              required
              error={primaryError}
            />
            <TextField className={classes.field}
              onChange={(e) => setSecondary(e.target.value)}
              label="Contact Secondary"
              variant="outlined"
              color="secondary"
              fullWidth
            />
            <TextField className={classes.field}
              onChange={(e) => setEmail(e.target.value)}
              label="Email Address"
              variant="outlined"
              color="secondary"
              fullWidth
              required
              error={emailError}
            />
            <TextField className={classes.field}
              onChange={(e) => setDescription(e.target.value)}
              label="Describe About Yourself"
              variant="outlined"
              color="secondary"
              multiline
              rows={4}
              fullWidth
              required
              error={descriptionError}
            />
            <input
              accept="image/*"
              className={classes.input}
              style={{ display: 'none' }}
              id="raised-button-img"
              type="file"
            />
            <label htmlFor="raised-button-img">
              <Button variant="contained" color="primary" component="span" className={classes.button}>
                Upload Profile Picture
              </Button>
            </label>
            <input
              accept="*"
              className={classes.input}
              style={{ display: 'none' }}
              id="raised-button-file"
              type="file"
            />
            <label htmlFor="raised-button-file">
              <Button variant="contained" color="primary" component="span" className={classes.button}>
                Upload Resume
              </Button>
            </label>

            <Button
              type="submit"
              color="primary"
              variant="contained"
              endIcon={<KeyboardArrowRightIcon />}>
              Submit
            </Button>
          </form>

        </CardContent>

      </Card>

    </Container>


  )
}