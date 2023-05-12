import React, { Component } from 'react'
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem, NavLink} from 'reactstrap'
import CartSummary from './CartSummary';
import {Link} from 'react-router-dom'
export default class Navi extends Component {
    constructor(props){
        super(props);

        this.toggle=this.toggle.bind(this)
        this.state={
            isOpen: false
        }
    }
    toggle() {
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
  render() {
    return (
     <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">react</NavbarBrand>
            <NavbarToggler onClick={this.toggle}></NavbarToggler>
            <Collapse isOpen={this.state.isOpen}></Collapse>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/components/">Comp</NavLink>
                    <Link to="/form1/">form1</Link>
                    <Link to="/form2/">form2</Link>

                </NavItem>
                <NavItem>
                    <NavLink href="/xd">xd</NavLink>
                </NavItem>
                <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart} />
            </Nav>
        </Navbar>
     </div>
    )
  }
}
