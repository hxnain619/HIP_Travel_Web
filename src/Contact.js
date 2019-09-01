import React from 'react';
import NavBar from './views/NavBar';
import AppFooter from './views/AppFooter';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: "#fff",
    overflow: 'hidden',
    marginTop: theme.spacing(10),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },

}));

function Contact() {
  const classes = useStyles();
  return (
    <React.Fragment>
        <NavBar/>
        <div className={classes.container}>
        <form className={classes.container} noValidate autoComplete="off">
      <Grid container xs={6}>
      <Grid item xs={12} align='center'>
        <h1 style={{ textAlign: 'center', letterSpacing: 8, wordSpacing: 5}}>Contact Us</h1>
        <Divider ></Divider>
      </Grid>
      <TextField
        id="outlined-full-width"
        label="Name"
        className={classes.textField}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-full-width"
        label="Email"
        className={classes.textField}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-full-width"
        label="Phone Number"
        className={classes.textField}
        fullWidth
        margin="normal"
        variant="outlined"
      />
       <TextField
        id="outlined-multiline-flexible outlined-full-width"
        label="Message"
        style={{width: '100%'}}
        multiline
        placeholder="Enter Message ..."
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <Grid item xs={12} align='right'>
       <Button style={{width: window.innerWidth < 700 ? '100%' : '40%',fontSize: 16,fontWeight: 400, padding: '10px'}} variant="outlined" href="#outlined-buttons" className={classes.button}>
        Send &nbsp;&nbsp;&nbsp;<Send />
      </Button>
      </Grid>
      </Grid>
      </form>
      </div>
        <AppFooter />
    </React.Fragment>
  );
}


export default Contact;