import  React,{Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';


class NavComponent extends Component{

    constructor(props){
        super(props);

        this.toggleNav=this.toggleNav.bind(this);
        this.state={
            isNavOpen:false
        }

        
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render(){
        return(
            <React.Fragment>
            <Navbar dark color="info" className=" fixed-top navborder" expand="lg">
                <div className="container">
                    <NavbarBrand href="/"><img src="/Images/Wipro.jpg"  alt="WBS" width="50" height="40" className="wipimg"/>Wipro Book Store</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar >
                        <Nav className="mr-auto ml-4 navsize" navbar>
                            <NavItem className="mr-1">
                                <NavLink className="nav-link" to='/Home'><i className="fa fa-home"></i>Home</NavLink>
                            </NavItem>
                            <NavItem className="mr-1">
                                <NavLink className="nav-link" to='/Add Books'><i class="fa fa-book" aria-hidden="true"></i>Add Books</NavLink>
                            </NavItem>
                            <NavItem className="mr-1">
                                <NavLink className="nav-link" to='/Update Book'><i class="fa fa-pencil-square-o" aria-hidden="true"></i>Update Book</NavLink>
                            </NavItem>
                            <NavItem className="mr-1">
                                <NavLink className="nav-link" to='/Delete Book'><i class="fa fa-trash-o" aria-hidden="true"></i>Delete Book</NavLink>
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