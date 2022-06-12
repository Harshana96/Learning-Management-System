import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Alert, Button, Container, Form, FormGroup, Input, Label} from 'reactstrap';
import AppNavbar from './NavBar';

class AddStudent extends Component {

    emptyItem = {
        regNumber: '',
        firstName: '',
        lastName: '',
        email: '',
        gender:''

    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.regNum !== 'new') {
            const student = await (await fetch(`http://localhost:8080/api/student/${this.props.match.params.regNum}`)).json();
            this.setState({item: student});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('http://localhost:8080/api/student/add' + '', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push("/")
    }

    render() {
        const {item} = this.state;
        const title = <h2>{'Add Student'}</h2>;

        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="regNumber">Registration Number</Label>
                        <Input type="text" name="regNumber" id="regNumber" value={item.regNumber || ''}
                               onChange={this.handleChange} autoComplete="regNum"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input type="text" name="firstName" id="firstName" value={item.firstName || ''}
                               onChange={this.handleChange} autoComplete="firstName"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input type="text" name="lastName" id="lastName" value={item.lastName || ''}
                               onChange={this.handleChange} autoComplete="lastName"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="department">Email</Label>
                        <Input type="text" name="email" id="email" value={item.email || ''}
                               onChange={this.handleChange} autoComplete="email"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="gender">Gender</Label>
                        <Input type="text" name="gender" id="gender" value={item.gender || ''}
                               onChange={this.handleChange} autoComplete="gender"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/students">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default AddStudent;