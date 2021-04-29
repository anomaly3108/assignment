import React from 'react'
import axios from 'axios';
export default class PersonList extends React.Component {
    state = {
        employee: []
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/get_employee`)
            .then(res => {
                const employee = res.data;
                this.setState({ employee });
            })
    }

    render() {
        return ( 
            <div className='container'>
                <span className='heading'>Employee Details</span>
                <table width="100%"> 
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Phone</th>
                    </tr>
                    {this.state.employee.map(person =>
                    <tr>
                        <td> { person.name } </td> 
                        <td> { person.age } </td> 
                        <td> { person.gender } </td> 
                        <td> { person.phone } </td> 
                    </tr>
                    )
                    } 
                </table>
            </div>
        )
    }

}