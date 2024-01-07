import React, { useState } from 'react'

const User = (props) => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(2);
  return (
    <div className="user-card">
        <h1>Count: {count}</h1>
        <h1>Count: {count2}</h1>
        <h2>Name: {props.name}</h2>
        <h3>Location: Ranchi</h3>
        <h4>Contact: 7004224958</h4>
    </div>
  )
}

export default User