import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';



class updateForm extends React.Component 
{

    render() {
        return (
          <>
         
         <Form onSubmit ={(e) => this.props.update(e)}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name="name"   defaultValue={this.props.dataitem.name} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>price</Form.Label>
    <Form.Control type="text" name="name"   defaultValue={this.props.dataitem.image} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name="name"   defaultValue={this.props.dataitem.price} />
  </Form.Group>

  
  <Button variant="primary" type="submit">
   Save
  </Button>
</Form>

          </>
        )
      }
}

export default updateForm;
