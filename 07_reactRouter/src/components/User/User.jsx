import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams();
    return (
        <div className='text-center p-40 text-5xl'>User:{id}</div>
    )
}

export default User
