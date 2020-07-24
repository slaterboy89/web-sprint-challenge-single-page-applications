import React from 'react'
import User from "./User"


export default function Confirmation(props){

    return(
    <div>
        <h3>Confirmation Orders</h3>
        {props.user.map((user) => (
            <User user={user} />
        ))}

    </div>
    )
}