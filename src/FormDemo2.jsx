import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";
export default class FromDemo2 extends Component {
  state = { email: " ", emaill:" ", password: "", city: "", description: "" };
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    let emailValue = this.state.email;
    alertify.success(emailValue + " added to db");
  };
  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
        <FormGroup>
            <Label for="emailsl">Email: </Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="email enter"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="password">password: </Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="password enter"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          

          <FormGroup>
            <Label for="description">description: </Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="description enter"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>

            <Label for="city">City</Label>
            <Input type="select" name="city" id="city" onChange={this.handleChange}>
              <option>Ankara</option>
              <option>Adana</option>
              <option>İstanbul</option>
              <option>Bolu</option>
              <option>İzmir</option>
            </Input>
          </FormGroup>
          <Button type="submit">gönder</Button>
        </Form>
      </>
    );
  }
}
