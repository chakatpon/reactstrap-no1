import React from 'react';

import MainNavbar from '../components/MainNavbar';
import Home from './Home';
import Explore from './Explore';
import Create from './Create';
import Share from './Share';
import Footer from './Footer';
import Contact from './Contact';

class App extends React.Component {
    render() {
        return(
            <div>
              <MainNavbar/>
              <Home/>
              <Explore/>
              <Create/>
              <Share/>
              <Footer/>
              <Contact/>
            </div>
        );
    }
}

export default App;