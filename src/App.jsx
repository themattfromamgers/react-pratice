import React, { Component } from "react";
import Navi from "./Navi.jsx";
import ProductList from "./ProductList";
import CategoryList from "./CategoryList";
import NotFound from "./NotFound.jsx";
import { Row, Container, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Switch, Route } from "react-router-dom";
import CartList from './CartList'
import FormDemo1 from './FormDemo1'
import FormDemo2 from './FormDemo2'
export default class App extends Component {
  state = { cc: "", products: [], cart: [] };
  componentDidMount() {
    this.getProducts();
  }
  chc = (category) => {
    this.setState({ cc: category.ad });
    console.log(category.id);
    this.getProducts(category.id);
  };
  getProducts = (kid) => {
    let url = "http://localhost:3000/calisanlar";

    if (kid) {
      url += "?id=" + kid;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    // newCart.push({product:product, quantity:1})
    this.setState({ cart: newCart });
    // alertify.warning(product.ad + " added to cart")
    alertify.success(product.ad + " added to cart");
    // alertify.notify(product.ad + " added to cart")
  };
  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.ad + " remove to cart");
  };
  render() {
    let titleCATE = "a";
    // let titleProdct = {title: "bea"};

    return (
      <div className="app">
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <CategoryList
                cc={this.state.cc}
                chc={this.chc}
                info={titleCATE}
              />
            </Col>
            <Col xs="9">
              <Switch>
                <Route exact path="/" render={props=>(
                                <ProductList
                                {...props}
                                cart={this.state.cart}
                                addToCart={this.addToCart}
                                products={this.state.products}
                                info={this.state.cc}
                              />
                )} />

                <Route exact path="/cart" render={props=>(
                  <CartList
                  {...props}
                  cart={this.state.cart}
                  removeFromCart={this.removeFromCart}

                  />
                )

                } />
                <Route path="/form1" component={FormDemo1}></Route>
                <Route path="/form2" component={FormDemo2}></Route>
                <Route component={NotFound} />

              </Switch>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
