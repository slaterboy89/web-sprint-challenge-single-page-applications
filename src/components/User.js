import React from 'react'


export default function User(props){
    const { name, size, pepperoni, sausage, cheese, meatlovers, canadianbacon, buffalochicken, instructions} = props.user
    return(
    <div>
        <h3>{name}</h3>
        <h4>Size: {size}</h4>
        <h4>Toppings:</h4>
        {pepperoni && <p>Pepperoni</p>}
        {sausage && <p>Sausage</p>}
        {cheese && <p>Cheese</p>}
        {meatlovers && <p>Meat Lovers</p>}
        {canadianbacon && <p>Pepperoni</p>}
        {buffalochicken && <p>Buffalo Chicken</p>}
        <h4>Special Instructions:</h4>
        <p>{instructions}</p>
    </div>
    )
}