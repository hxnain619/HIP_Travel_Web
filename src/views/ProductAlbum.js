import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '../components/Button';
import Typography from '../components/Typography';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import { ButtonGroup } from '@material-ui/core';
import { Link } from 'react-router-dom';

import '../assets/style.css';

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: "#fff",
    overflow: 'hidden',
    marginTop: theme.spacing(10),
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(14),
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 55,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing(8),
  },

  //
  // Cards
  //

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },

  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    height: 0,
  },
  cardContent: {
    flexGrow: 1,
  },
  avatar: {
    backgroundColor: "#34c0eb",
  },
});

const cards = [
  {
    title: "ZYPERN",
    subtitle: "die Insel der Aphrodite",
    extrasub: "340 SONNENTAGE IM JAHR",
    price: "ab 199",
    cardimg: "tour_card_zypern.jpg"
  },
  {
    title: "TOSKANA",
    subtitle: "Dolce Vita",
    extrasub: "KÄSE, WEIN & LAND",
    price: "ab 199",
    cardimg: "tour_card_toskana.jpg"
  },
  {
    title: "JORDANIEN",
    subtitle: "Land voller Kontraste",
    extrasub: "8 TAGE, 7 NÄCHTE",
    price: "ab 199",
    cardimg: "tour_card_jordanien.jpg"
  },
  {
    title: "INDIEN",
    subtitle: "Goldenes Dreieck mit GOA.",
    extrasub: "HORIZONTERWEITERND",
    price: "ab 199",
    cardimg: "tour_card_indien.jpg"
  },
  {
    title: "NEW YORK CITY",
    subtitle: "Stadt der Superlative.",
    extrasub: "5 TAGE - 1 STADT",
    price: "ab 199",
    cardimg: "tour_card_nyc.jpg"
  },
  {
    title: "MEET USA",
    subtitle: "Miami, Kreuzfahrt & New York",
    extrasub: "USA KENNENLERNEN",
    price: "ab 199",
    cardimg: "tour_card_usa.jpg"
  },
  {
    title: "CHICAGO & NYC",
    subtitle: "Die ideale Kombination. ",
    extrasub: "KOMBI",
    price: "ab 199",
    cardimg: "tour_card_nyc_chicago.jpg"
  },

];


function ProductAlbum(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
            {cards.map((card, key) => (
              <Grid item key={key} xs={12} sm={6} md={4}>
                <Card id='card' className={classes.card}>
                  <CardHeader
                  style={{height: 100, flexDirection: 'row-reverse'}}
                    avatar={
                      <Avatar aria-label="recipe" 
                      style={{
                        padding: 35,
                        textTransform: 'uppercase',
                        fontWeight: 900,
                        fontSize: '.95rem'

                      }}
                      className={classes.avatar}>
                        {card.price}
                      </Avatar>
                    }
                    title={card.title}
                    subheader={card.subtitle}
                    // action={
                    //   <IconButton aria-label="settings">
                    //     <MoreVertIcon />
                    //   </IconButton>
                    // }
                    
                  />
                  <CardMedia
                    className={classes.cardMedia}
                    //image="https://source.unsplash.com/random"
                    image={process.env.PUBLIC_URL + "/images/cards/" + String(card.cardimg)} 
                    title="Image title"
                  />
                  {/* <CardContent className={classes.cardContent}> */}
                    {/* <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography> */}
                    {/* <Typography>
                    {card.extrasub}
                    </Typography> */}
                  {/* </CardContent> */}
                  <CardActions>
                    <Grid container>
                    <Grid item xs={12} align='center' >
                    <ButtonGroup fullWidth aria-label='full width button group' >
                    <Button size="small" style={{ letterSpacing: 5 }} color="primary">
                      <Link style={{textDecoration : 'none'}} to={`/product${key}`} >Reiseinfos</Link>
                    </Button>
                    </ButtonGroup>
                    </Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
      </Container>
    </section>
  );
}

ProductAlbum.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductAlbum);