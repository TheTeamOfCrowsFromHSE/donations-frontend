import React from 'react'
import { isRouteErrorResponse, useRouteError } from "react-router-dom"


export const PluginError = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className='ErrorPage'>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.data?.message}</i>
        </p>
      </div>
    )
  } else {
    return (
      <div className='ErrorPage'>
        <h1>Oops!</h1>
        <p> Something went wrong... </p>
      </div>
    )
  }
}
