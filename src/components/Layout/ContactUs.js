import React, { Component } from 'react'
import { Row, Col, Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class ContactUs extends Component {

    render() {

        return(
            <Row style={{'margin-top': '5em'}}>
                
                <Col sm="12" md={{ size: 4, offset: 2 }}>
                    <Jumbotron className="pt-4 pb-4">

                        <h2>Contact Us</h2>
                        <Form>
                            <FormGroup>
                                <Label for="name">Your Name</Label>
                                <Input type="text" name="name" placeholder="Name"/>
                            </FormGroup>

                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" placeholder="What's your email" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="message">Message</Label>
                                <Input type="textarea" name="text" placeholder="What's your questions?"/>
                            </FormGroup>

                            <Button className="w-100">Leave Us A Message</Button>
                        </Form>

                    </Jumbotron>
                </Col>
            </Row>
        )
    }

}

export default ContactUs