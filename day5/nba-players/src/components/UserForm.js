import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const UserForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [select, setSelect] = useState("");
  // add the rest once working

  return (
    <Form onSubmit={createUser}>
      <FormGroup>
        <Label for="Email">Email</Label>
        <Input
          type="email"
          name="email"
          id="Email"
          placeholder="with a placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="Password">Password</Label>
        <Input
          type="password"
          name="password"
          id="Password"
          placeholder="password placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="Select">Select</Label>
        <Input type="select" name="select" id="Select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="SelectMulti">Select Multiple</Label>
        <Input type="select" name="selectMulti" id="SelectMulti" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="Text">Text Area</Label>
        <Input type="textarea" name="text" id="Text" />
      </FormGroup>
      <FormGroup>
        <Label for="File">File</Label>
        <Input type="file" name="file" id="File" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" /> Option one is this and that—be
            sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" /> Option two can be something
            else and selecting it will deselect option one
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" disabled /> Option three is
            disabled
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" /> Check me out
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default UserForm;
