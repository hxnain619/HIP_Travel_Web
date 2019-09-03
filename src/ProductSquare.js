import React from 'react';
import NavBar from './views/NavBar';
import AppFooter from './views/AppFooter';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import { Divider } from '@material-ui/core';
import { ProductTab } from './views/ProductTabs';
import './assets/style.css';
import { Slideshow } from './components/Slideshow';
import { Products } from './productData';


const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: "#fff",
    overflow: 'hidden',
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
})

const images = ['everglades.jpg', 'key_west.jpg'];

class ProductSquare extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
      popup: false,
      resized: false
    }
  }

  

  popupCard = (show) => {
      this.setState({ popup: show})
  }

  render() {
    var {product, popup} = this.state;
    
  return (
    <React.Fragment>
        <NavBar/>
      {popup ? <div className='popup-form-bg'></div> : null }
        {product ? 
        <div style={{marginTop: 100}}>
        <h6 style={{ color: 'orange',letterSpacing: 20,border: '1px solid orange', textAlign: 'center', margin: 10, padding: 10 }}>{product.title}</h6>
          }
          {Slideshow(product.itempage.slideshow)}
        </div>
      : null}
      <div style={{
        padding: 20,
        paddingBottom: 30
      }}>
      <Grid container>
      <Grid item xs={window.innerWidth > 800 ? 8 :12} >
      {product ? 
    <div>
    <h6 style={{letterSpacing: 10}}>{product.display_card.subtitle}</h6>
    <h1 style={{letterSpacing: 5}}>{product.title}</h1>
    <Divider></Divider>
    <div style={{
      padding: 20,
      paddingLeft: 0
    }}>
    <h4 style={{ letterSpacing: 3 }}>
    {product.display_card.extrasub} &nbsp;&nbsp;&nbsp;
    <span style={{
      color: 'gray',
      padding: 10,
      paddingLeft: 0
    }}>{product.display_card.price}</span></h4>
    <button className='orange-btn'>
      Download journey PDF
    </button>
    <button onClick={() => this.setState({ popup: true })} style={{padding: '15px 36px'}} className='orange-btn'>
        Send To a Friend
    </button>
    </div>
  </div>
:
      <Grid container spacing={4} align='center'>
      <h5>Not Found!!</h5>
      </Grid>}
      </Grid>
     
    <Grid item xs={window.innerWidth > 800 ? 4 : 12}>
      <div style={{
        border: '1px solid #616161',
        marginLeft: 20,
        paddingBottom: 10,
      }}>
      <h5 style={{padding: 25, textTransform: 'capitalize'}}>Included with {product.title}</h5>
        <Divider></Divider>
        <div style={{padding: 20, fontSize: 12, textTransform: 'capitalize',  letterSpacing: 1, wordSpacing: 3, color: '#616161'}}>
        {product.itempage.included.map((data, key) => {
            return <p key={key}>{data+'.'}</p>
        })}
        </div>
      </div>
      </Grid>
    </Grid>
      </div>
        <ProductTab popup={popup} triggerCard={this.popupCard} productDetail={product.itempage}  />
        <AppFooter />
    </React.Fragment>
  );
 }
 componentWillMount() {
  
  Products.map((product) => {
    return product.id === parseInt(this.props.match.params.id) ?
    
      this.setState({ product })
    : null;
   })
   window.onresize = () => {
     this.setState({ resized: true })
  }
 }
 
}

export default withStyles(styles)(ProductSquare);