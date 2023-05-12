import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class ProductList extends Component {

  render() {
    return (
      <div>
        <h2>Seçim : {this.props.info}</h2>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>add</th>
            </tr>
          </thead>
          <tbody>
          {this.props.products.map((product) => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>{product.ad}</td>
              <td>{product.soyad}</td>
              <td>{product.username}</td>
              <Button onClick={()=>this.props.addToCart(product)}color="info">Add lan add</Button>
            </tr>
          ))}
  
          </tbody>
        </Table>
      </div>
    );
  }
}
