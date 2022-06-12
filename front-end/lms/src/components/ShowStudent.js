import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './NavBar';
import { Link } from 'react-router-dom';

class ShowStudent extends Component {

    constructor(props) {
        super(props);
        this.state = {students: [], isLoading: true};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('http://localhost:8080/api/student/getAll')
            .then(response => response.json())
            .then(data => this.setState({students: data, isLoading: false}));
    }

    async remove(id) {
        await fetch(`http://localhost:8080/api/student/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedStudents = [...this.state.students].filter(i => i.id !== id);
            this.setState({students: updatedStudents});
        });
    }

    render() {
        const {students, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const studentList = students.map(student => {
            return <tr key={student.regNumber}>
                <td>{student.regNumber}</td>
                <td style={{whiteSpace: 'nowrap'}}>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
                <td>{student.gender}</td>

                <td>
                    <ButtonGroup>
                        <Button size="sm" color="danger" onClick={() => this.remove(student.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>

                    <div>
                        <hr/>
                    </div>
                    <h3>Course Student</h3>
                    <div>
                        <hr/>
                    </div>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="20%">Register Number</th>
                            <th width="20%">First Name</th>
                            <th width="20%">Last Name</th>
                            <th width="20%">Email</th>
                            <th width="20%">Gender</th>
                        </tr>
                        </thead>
                        <tbody>
                        {studentList}
                        </tbody>
                    </Table>
                    <div className="float-right">
                        <Button color="info" tag={Link} to="/students/add">Add New Student</Button>
                    </div>
                </Container>
            </div>
        );
    }
}

export default ShowStudent;