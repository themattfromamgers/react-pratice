import React, { Component } from "react";
import {Link} from 'react-router-dom';
import {
  UncontrolledDropdown,
  Badge,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
  NavItem,
} from "reactstrap";

export default class CartSummary extends Component {
  renderSummart() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <Link to="cart">go to cart</Link>
        <DropdownToggle nav caret>
          Options - {this.props.cart.length}
        </DropdownToggle>
        
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.id}>
              <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>X</Badge>
              {cartItem.product.ad}
              <Badge color="info">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}
        </DropdownMenu>
        <DropdownItem dividar />
          
        <DropdownItem></DropdownItem>
        
      </UncontrolledDropdown>


    );
  }
  renderEmptyCart() {
    return(
        <NavItem>
        <NavLink>Empty Cart</NavLink>
    </NavItem>
    )
  }
  render() {
    return <div>{this.props.cart.length>0?this.renderSummart() : this.renderEmptyCart()} </div>;
  }
}
