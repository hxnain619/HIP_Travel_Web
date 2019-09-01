import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  title: {
    fontSize: 24,
  },

  placeholder: toolbarStyles(theme).root,

  
  toolbar: {
   
    boxShadow: 'none',
    background: '#fff6e0'
  },

  button: {
    margin: theme.spacing(2),
    
  },

  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
 
  },

  rightLink: {
    fontSize: 20,
    color: "black",
    // marginLeft: theme.spacing(3),
   
  },

  
});

function NavBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
         
          <RouterLink to="/">
            <img
              alt="Logo"
              src={process.env.PUBLIC_URL + "/images/logo.png"} 
            />
          </RouterLink>
  
          {/* <div className={classes.right}>
            <RouterLink to="/login" style={{ textDecoration: 'none' }}>
              <Button variant="outlined"  className={clsx(classes.rightLink, classes.button)}>
                {'Tours'}
              </Button>
            </RouterLink>
          </div> */}

          <div className={classes.right}>
            <RouterLink to="/angebot" style={{ textDecoration: 'none' }}>
              <Button variant="outlined"  className={clsx(classes.rightLink, classes.button)}>
                {'Angebote'}
              </Button>
            </RouterLink>
          </div>
          
        </Toolbar>
      </AppBar>
      
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);