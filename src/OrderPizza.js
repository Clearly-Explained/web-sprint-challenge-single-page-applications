import React from 'react'

function OrderPizza({ details }) {
  if (!details) {
    return <h3>Working fetching your pizza&apos;s details...</h3>
  }

  return (
    <div className='pizza container'>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Address: {details.address}</p>
      <p>Size: {details.size}</p>

      {
        !!details.pizzas && !!details.pizzas.length &&
        <div>
          Pizzas:
          <ul>
            {details.pizza.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default OrderPizza