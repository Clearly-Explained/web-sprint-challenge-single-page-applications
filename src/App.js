import React, { useState, useEffect } from "react";
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import OrderPizza from './OrderPizza';
import schema from './FormSchema';
import * as yup from 'yup';
import Pizza from './pizza';
import axios from 'axios';


const initialFormValues = {
  name: '',
  email: '',
  address: '',
  specialText: '',
  size: '',
  Bacon: false,
  Pineapple: false,
  Sardines: false,
  Anchovies: false
}

const initialFormErrors = {
  name: '',
  email: '',
  address: '',
  size: '',
  specialText: '',
}

const initialPizzas = []
const initialDisabled = true

const App = () => {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [pizza, setPizza] = useState(initialPizzas)
    const [disabled, setDisabled] = useState(initialDisabled)


  const postNewPizza = newPizza => {
    axios.post(`https://reqres.in/api/orders`, newPizza)
    .then(res => {
      setPizza([res.data,...pizza]);
      setFormValues(initialFormValues)
    }).catch(err => console.error(err))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ""}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      address: formValues.address.trim(),
      specialText: formValues.specialText.trim(),
      size: formValues.size,
      bacon: formValues.Bacon,
      Pineapple: formValues.Pineapple,
      sardines: formValues.Sardines,
      anchovies: formValues.Anchovies,
    }
    postNewPizza(newPizza);
  }

  useEffect(() => {
    // getPizza()
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <>

    <div className ='App'>
    <nav>
      <Link to ='/'>Home</Link>
    </nav>
    <Switch>
    <Route exact path={'/'} >
      <h1>BloomTech Eats</h1>
      <h2>Gourmet pizza from sources you can trust!</h2>
      <Link to='/pizza'>
      <button type='button' id='order-pizza'>Order Now!</button>
      </Link>
      
      </Route>
      <Route path={'/pizza'}>
        <Pizza
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
        />
        {
        pizza.map(pizza => {
          return (
            <OrderPizza key={pizza.id} details={pizza} />
          )
        })
      }
      </Route>
    </Switch>

      </div>
    
  </>
  );
};
export default App;