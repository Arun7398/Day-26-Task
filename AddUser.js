import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function AddUser(props) {

  let [name,setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [batch, setBatch] = useState("");
  let navigate = useNavigate()

  let handleSubmit = () => {
    let newData = {name, email, mobile, batch}
    let data = [...props.data.users]
    data.push(newData)
    props.data.setUsers(data)
    navigate('/dashboard')
  }
  return <>
<div className = 'mx-auto col-10'>
<Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange = {(e)=>{setName(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" onChange = {(e)=>{setEmail(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="Number" placeholder="Enter Mobile Number" onChange = {(e)=>{setMobile(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Batch</Form.Label>
        <Form.Control type="Name" placeholder="Enter Batch Name" onChange = {(e)=>{setBatch(e.target.value)}} />
      </Form.Group>

      
      <Button variant="primary" onClick ={()=>handleSubmit()} >
        Submit
      </Button>
    </Form>
</div>
    </>

}

export default AddUser