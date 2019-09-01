import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Landing';
import ProductSquare from './ProductSquare';
import Contact from './Contact';


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/"  component={Landing} />
            {/* <Route exact path="/tours"  component={Tour} /> */}
            {/* <Route exact path="/angebot"  component={ProductSquare} /> */}
            
            <Route exact path="/product:id"  component={ProductSquare} />
            <Route exact path="/contact"  component={Contact} />
        </Switch>
    );
  };
  
  export default Routes;