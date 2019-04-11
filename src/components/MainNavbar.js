import React from 'react';
import { connect } from 'react-redux';
import { toggleNav } from '../actions';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container } from 'reactstrap';

import 'bootstrap/dist/js/bootstrap.min';
import 'popper.js/dist/popper.min';
import $ from 'jquery/dist/jquery';


class MainNavbar extends React.Component {

   componentDidMount() {
       
        $("body").scrollspy({ target: '#main-nav', offset: 50 });

        $("#main-nav a").on('click', function (event) {
            if (this.hash !== "") {
              event.preventDefault();
      
              const hash = this.hash;
      
              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 800, function () {
      
                window.location.hash = hash;
              });
            }
          });
       
        
   }



    render() {
        return(
            <div>
                <Navbar fixed='top' dark color="dark" expand="md" id="main-nav">
                    <Container>
                        <NavbarBrand href="/"><i className="fas fa-globe"></i>{" "}Chakatpon Khunthong</NavbarBrand>
                        <NavbarToggler onClick={() => this.props.toggleNav(this.props.navOpen)} />
                        <Collapse isOpen={this.props.navOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink  href="#home">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#explore-head-section">Explore</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#create-head-section">Create</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#share-head-section">Share</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { navOpen: state.navOpen }
}

export default connect(mapStateToProps, { toggleNav })(MainNavbar);
