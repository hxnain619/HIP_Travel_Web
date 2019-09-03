import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Cancel from '@material-ui/icons/CancelOutlined';
import TextField from '@material-ui/core/TextField';
import { Grid, Divider, Card } from '@material-ui/core';
import '../assets/collapse.css';

function TabPanel(props) {
    const { children, productDetail, value, index, ...other } = props;
    
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      // width: 500,
    },
    
  }))
  
  export const ProductTab = (props) => {
    var {productDetail, popup, triggerCard} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    
    function handleChange(event, newValue) {
      setValue(newValue);
    }
  
    function handleChangeIndex(index) {
      setValue(index);
    }
    
    return ( <div className={classes.root} style={{marginTop: 10, padding: 10, fontFamily: 'Roboto'}}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Itinerary" {...a11yProps(1)} />
          <Tab label="Dates & Prices" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <p style={{wordSpacing: 5, padding: 20, fontSize: 18}}>{productDetail.overview}</p>
          <div>
          <h3>Itinerary At A Glance </h3>
          <div className='itenary'>
            {productDetail.itinary.map((data, key) => {
              return(<div key={key} className='itenary-container'>
                 <div 
                 className={productDetail.itinary.length === key+1 ? 'itenary-day itenary-day-last' :'itenary-day '}>
                 DAY {data.day}
                 </div>
                 <div 
                 className={productDetail.itinary.length === key+1 ? 'itenary-place itenary-place-last overview' :'itenary-place overview'} >
                  <h6>{data.where}</h6>
              </div>
              </div>)
            })}
          </div>
          </div>
            <button onClick={() => handleChangeIndex(1)} className='orange-btn' >View Full Itinerary</button>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            {productDetail.itinary.map((data, key) => {
              return(<div key={key} className='itenary-container'>
                 <div 
                 className={productDetail.itinary.length === key+1 ? 'itenary-day itenary-day-last' :'itenary-day '}>
                 DAY {data.day}
                 </div>
                 <div style={{display: 'inline-flex' }} >
                 <div 
                 style={{width: window.innerWidth > 700 ? '60%' : '100%'}}
                 className={productDetail.itinary.length === key+1 ? 'itenary-place itenary-place-last' :'itenary-place'} >
                  <h6 style={{    
                    marginTop: 25,
                    marginBottom: 5
                }}>{data.where}</h6>
                  <p style={{
                    fontSize: window.innerWidth < 500 ? 10 : 'inherit'
                  }}>
                  {window.innerWidth < 500 ?
                  <img width='100%' height='100%' style={{paddingBottom: 10}} src={process.env.PUBLIC_URL + "/images/" + String(data.img)} alt='' />
                  : null}      
                  {data.about}</p>
              </div>
            {window.innerWidth > 800 ?
              <div style={{width: '40%', padding: '50px 10px',  paddingBottom: 5, textAlign: 'right'}}>
                <img width='100%' style={{padding: 20}} src={process.env.PUBLIC_URL + "/images/" + String(data.img)} alt='' />
              </div> : null}
              </div>
              </div>)
            })}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <h4>Prices are in USD, per person, based on double occupancy.</h4>
            <div className='wrap-collabsible'>
              {productDetail.dates.map((data, key) => {
              return  <div key={key}>
              <input id={`collapsible${key}`} className="toggle" type="checkbox" />
              <label htmlFor={`collapsible${key}`} className="lbl-toggle">
              <span>{data.start}&nbsp; to &nbsp;{data.end}</span> 
              <p style={{textAlign: 'right'}}><span >{data.availability}</span></p>
              </label>
              <div className="collapsible-content">
              <div className="content-inner center">
                  <div >
                  <table className='collapse-table'>
                  <thead>
                    <tr>
                      <th>Price</th>
                      <th>Availability</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>{data.price}</td>
                      <td>{data.availability}</td>
                    </tr>
                    </tbody>
                  </table>
                  {data.availability !== 'Call for Availability' ?
                    <div>
                    <Divider></Divider>
                    <br />
                    <p>How many people are travelling in your group?</p>
                    <Grid container>
                      <Grid item xs={window.innerWidth > 700 ? 8 : 12} align='left'>
                      <input type='number' placeholder='e.g. 2' style={{width: window.innerWidth < 500 ? '100%' : 'inherit' }} id='grp'   />
                      </Grid>
                      <Grid item xs={window.innerWidth > 700 ? 4 : 12} 
                      style={{width: window.innerWidth < 500 ? '100%' : 'inherit'}} align='right'>
                      <button  style={{marginRight: window.innerWidth < 500 ? 0 : 'inherit' }} className='orange-btn'>Request Booking</button>
                      </Grid>
                    </Grid>
                    </div>
                  :null}
                  </div>

              </div>
              </div>
              </div>
            })}
          </div>
        </TabPanel>
      </SwipeableViews>
      {popup ? 
      <div className='popup-container'>
      <Grid container>
      <Grid item xs={12}>
      <Card>
      <h4 style={{padding: 20}}>Send To Friend <span onClick={() => triggerCard(false)} className='cross-icon' style={{float: 'right'}}><Cancel /></span></h4>
      <Divider></Divider>
      <div className='popup-form'>
      <TextField
        id="standard-required"
        label={window.innerWidth > 700 ? "Your Name" : "Name"}
        className='textField'
        style={{marginRight: 10}}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="standard-required"
        label={window.innerWidth > 700 ? "Recipient's Name" : "Recipient"}
        className='textField'
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="standard-required"
        label="From"
        style={{marginRight: 10}}
        className='textField2'
        margin="normal"
        variant="outlined"
      />
      
      <TextField
        id="standard-required"
        label="To"
        className='textField2'
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="standard-required"
        label="Subject"
        fullWidth
        style={{width: '100%'}}
        className={classes.textField}
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
      <button style={{float: 'right', padding: '10px 50px', marginBottom: 20}} className='orange-btn'>
      Send 
      </button>
      </div>
      </Card>
      </Grid>
      </Grid>
      </div>
      : null}
    </div>)
  }