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


class MainNavbar extends React.Component {

   componentDidMount() {
       console.log("this.props : ");
       console.log(this.props.navOpen);
   }

    render() {
        console.log(this.props)
        return(
            <div>
                <Navbar fixed='top' dark color="dark" expand="md" id="main-nav">
                    <Container>
                        <NavbarBrand href="/">Chakatpon Khunthong</NavbarBrand>
                        <NavbarToggler onClick={() => this.props.toggleNav(!this.props.navOpen)} />
                        <Collapse isOpen={this.props.navOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="">Explore</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="">Create</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="">Share</NavLink>
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
