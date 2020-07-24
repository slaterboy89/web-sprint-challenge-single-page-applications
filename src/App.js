import React, { useState } from "react";
import { Switch, Route, useHistory } from 'react-router-dom';
import Confirmation from './components/Confirmation';
import Form from './components/Form';
import Navigation from './components/Navigation';
import './App.css'
import Axios from "axios";

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

const App = () => {
  const [form, setForm] = useState(initialForm);
  const [ user, setUser ] = useState()
  const updateForm = (event) => {
    event.persist()
    event.target.type === 'checkbox' 
    ? setForm({ ...form, [event.target.name]: event.target.checked})
    : setForm({ ...form, [event.target.name]: event.target.value });
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post()
  }
  return (
    <>
      
      <Navigation />
      <Switch>
        <Route path = "/pizza">
          <Form form={form} updateForm = {updateForm} />
          </Route>
        <Route path="/">
          <Confirmation user={user} />
        </Route>
      </Switch>
    </>
  );
};
export default App;
