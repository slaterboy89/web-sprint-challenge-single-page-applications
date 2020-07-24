import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from 'react-router-dom';
import Confirmation from './components/Confirmation';
import Form from './components/Form';
import Navigation from './components/Navigation';
import './App.css'
import axios from "axios";
import * as yup from 'yup'

const initialForm = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  cheese: false,
  meatlovers: false,
  canadianbacon: false,
  buffalochicken: false,
  instructions: ''
}

const formSchema = yup.object().shape({
  name: yup.string()
  .min(2, "Must be at least 2 characters long")
  . required("please enter your name")
})

const App = () => {
  const [form, setForm] = useState(initialForm);
  const [ user, setUser ] = useState([])
  const [disable, setDisable] = useState(true)
  const history = useHistory()

  useEffect(() => {
    formSchema.isValid(form)
    .then(valid => setDisable(!valid))
  }, [form])

  const updateForm = (event) => {
    event.persist()
    event.target.type === 'checkbox' 
    ? setForm({ ...form, [event.target.name]: event.target.checked})
    : setForm({ ...form, [event.target.name]: event.target.value });
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('https://reqres.in/api/users', form)
    .then(res => {
      console.log(res.data)
      setUser([ res.data, ...user])
      setForm(initialForm)
      history.push("/")
    })
    .catch(err => console.log(err))
  }
  return (
    <>
      
      <Navigation />
      <Switch>
        <Route path = "/pizza">
          <Form
           form={form}
            updateForm = {updateForm}
             handleSubmit={handleSubmit}
             disable = {disable}
         />
          </Route>
        <Route path="/">
          <Confirmation user={user} />
        </Route>
      </Switch>
    </>
  );
};
export default App;
