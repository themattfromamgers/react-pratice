import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  // constructor(props) {
  // super(props);
  state = { categories: [] };
  // }

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/calisanlar")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  chc = (category) => {
    this.setState({ cc: category.ad });
  };
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <h3>{this.state.counter}</h3>

        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              active={ category.ad===this.props.cc?true:false }
              onClick={() => this.props.chc(category)}
              key={category.id}
            >
              {category.ad}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.props.cc}</h4>
      </div>
    );
  }
}
