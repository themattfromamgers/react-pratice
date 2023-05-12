import React, { Component } from 'react'
import {Table} from 'reactstrap';

export default class CartList extends Component {
  renderCart(){
    return(
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Id</th>
            <th>prodct</th>
            <th>units in stock</th>
            <th>quantity</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.cart.map(cartItem=>(
              <tr key={cartItem.product.id}>
                <td>{cartItem.product.id}</td>
                <td>{cartItem.product.ad}</td>
                <td>{cartItem.product.soyad}</td>
                <td>{cartItem.product.username}</td>
                <td>{cartItem.quantity}</td>
                <td><Button onClick={()=>this.props.removeFromCart(cartItem.product)}>remove from cart</Button></td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    )
  }
  render() {
    return (
      <>
        {this.renderCart()}
      </>
    )
  }
}
