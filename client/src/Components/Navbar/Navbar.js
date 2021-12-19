import  React,{Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';

class NavComponent extends Component{

    constructor(){
        super();

        this.toggleNav=this.toggleNav.bind(this);
        this.state={
            isNavOpen: false,
            activeItem:'home'
        }
    }
    
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        let { activeItem } = this.state;
        return(
            <React.Fragment>
            <Navbar light className="fixed-top navborder" expand="lg" style={{ background:'white'}}>
                <div className="container">
                        <NavbarBrand href="/" style={{display:'flex', alignItems:'center'}}>
                            <FontAwesomeIcon icon={faBookReader} size="lg" border style={{ background: 'linear-gradient(silver, #00bcd4)', borderRadius:'50%', width:'65px', color:'white',borderColor:'white' }} />
                            &nbsp;&nbsp;
                            <h4 style={{fontFamily:'cursive', fontWeight:'bold'}}>Book Store</h4>
                        </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar >
                            <Nav className="ml-auto navsize" navbar style={{ fontWeight: 'bold' }}>
                                <NavItem className="mr-1" >
                                    <NavLink className="nav-link" to='/Home' onClick={() => this.setState({ activeItem: 'home' })} >
                                        H<span style={{ borderBottom: activeItem==='home' && '3px solid #00bcd4' }}>om</span>e
                                    </NavLink>
                            </NavItem>
                            <NavItem className="mr-1">
                                    <NavLink className="nav-link" to='/Add Books' onClick={() => this.setState({ activeItem: 'addbooks' })}>
                                        Ad<span style={{ borderBottom:activeItem==='addbooks' && '3px solid #00bcd4'}}>d Boo</span>ks
                                    </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            </React.Fragment>
        );
    }
}

export default NavComponent;