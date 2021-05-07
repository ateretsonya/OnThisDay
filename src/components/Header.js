import React, {Component} from 'react';
import { Navbar,  Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import '../styling/Header.css';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }


    render(){

        const styleSheet = {
            color: "white"
        }

        const active={
            color:'#FFFFFF', 
            borderBottom: '1px solid #66FCF1', 
            paddingBottom: '4px', 
            font: 'Roboto',
            background:'red',
        
        }

        return (
            


            <Navbar className="color">
                <div className="container">

                
                
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar className="ml-auto">

                    <div class="row justify-content-start">

                        <NavItem>
                            <NavLink className="Nav-link" to='/home' activeClassName='active' activeStyle={active} style={styleSheet}> Home</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className="Nav-link" to='/gallery' activeClassName='active' activeStyle={active} style={styleSheet}>Gallery</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className="Nav-link" to='/submit' activeClassName='active' activeStyle={active} style={styleSheet}>Submit</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className="Nav-link"  to='/about' activeClassName='active' activeStyle={active} style={styleSheet}> About</NavLink>
                        </NavItem>
                        </div>   
                    </Nav>
                </Collapse>
                </div>
            </Navbar>
            
        );
    }
}

export default Header;
