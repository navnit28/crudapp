import {Typography, Button,Input, InputLabel, FormControl, FormGroup } from "@material-ui/core";
import react,{useState} from 'react';
import {addUser} from '../Service/api'
const initialValues ={
    name:'',
    username:'',
    email:'',
    phone:''
}
const AddUser = () => {
    const [user,setUser] =useState(initialValues);
    const {name,username,email,phone}=user;
    const onValueChange=(e)=>{
        setUser({...user,[e.target.name] : e.target.value})
    }
    const addUserDetails = async()=>{
        await addUser(user);
    }
    return (
        <FormGroup>
            <Typography>Add New Cricketer</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name'/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username'/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email'/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone'/>
            </FormControl>
            <Button variant='contained' onClick={() => addUserDetails()}>Add user</Button>
        </FormGroup>
    )
}
export default AddUser;