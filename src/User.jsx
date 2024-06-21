import React from 'react'

const User = ({ name, marks }) => {
    return (
        <>
            <h2>User Component </h2>
            <h4>Your Name :{name}</h4>
            <h4>Your Marks : {marks}</h4>
        </>
    )
}

export default User
