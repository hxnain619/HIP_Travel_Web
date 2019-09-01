import React from 'react';
import NavBar from './views/NavBar';
import AppFooter from './views/AppFooter';
import ProductCTA from './views/ProductCTA';
import ProductHero from './views/ProductHero';
import ProductSmokingHero from './views/ProductSmokingHero';
import ProductAlbum from './views/ProductAlbum';


function Landing() {
  return (
    <React.Fragment>
        <NavBar/>
        {/* <ProductHero /> */}
        <ProductAlbum /> 
        <ProductCTA/>
        <ProductSmokingHero/>
        <AppFooter />
    </React.Fragment>
  );
}


// export default withRoot(Landing);
export default Landing;