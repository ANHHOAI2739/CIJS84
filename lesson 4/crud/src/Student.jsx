import React from 'react';
import { Button } from 'reactstrap';

const Student = (props) => {
    const handleDeleteStudent = () => {
        console.log('props.id: ', props.id);
        props.onDelete(props.id);
    };
    const handleUpdateStudent = () => {
        const student = {
            id: props.id,
            firstName: props.firstName,
            lastName: props.lastName,
            userName: props.userName,
        };
        props.onUpdate(student);
    }
    return (
        <tr>
            <th scope='row'>{props.id}</th>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.userName}</td>
            <td>
                <span style={{ marginRight: '10px' }}>
                    <Button color='secondary' onClick={handleUpdateStudent}>Update</Button>
                </span>
                <Button color='danger' onClick={handleDeleteStudent}>
                    Delete
                </Button>
            </td>
        </tr>
    );
};

export default Student;
