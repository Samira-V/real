
import React, { useState } from 'react'
import { useRoutes } from "react-router-dom";
import routes from './components/Routes';


export default function App() {

  let routers = useRoutes(routes)
  return (
    <>
      {routers}
    </>
  )
}
