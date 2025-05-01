import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <div>Some error occurred....</div>
  )
}

export default Error