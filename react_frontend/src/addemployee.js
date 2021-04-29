import React from 'react';
import axios from 'axios';
export default class adduser extends React.Component {
    state = {
        name:'',
        age:0,
        gender:'',
        phone:''
    }
    handleChange = event => {
        
        this.setState({[event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const user = {
            name: this.state.name,
            age: this.state.age,
            gender: this.state.gender,
            phone: this.state.phone
        };
        axios.post(`http://localhost:4000/add_employee`, { user })
        .then(res => {
            alert('Data saved\nName: '+user.name+'\nAge: '+user.age+'\nGender: '+user.gender+'\nphone: '+user.phone)
            window.location.reload();
        })
    }
    render() {
        return ( 
            <div className='container'>
                <span className='heading'>Enter Details</span>
                <form onSubmit = { this.handleSubmit } >
                    <label>Name: </label><input type = "text" name = "name" onChange = { this.handleChange }/><br></br>
                    <label>Age: </label><input type = "number" name = "age" min='0' onChange = { this.handleChange }/><br></br>
                    <label>Gender: </label><select name="gender" onChange = { this.handleChange }>
                        <option value="" selected disabled hidden>select</option>
                        <option value="Male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        </select><br></br>
                    <label>Phone: </label><input type = "text" name = "phone" onChange = { this.handleChange }/> <br></br>
                    <button type = "submit" > Add employee</button> 
                </form > 
            </div>
        )
    }

}