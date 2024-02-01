import React from 'react'
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Summary from "./Summary";
import Form from "./Form";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/form/:showId",
      element: <Form />
    },
    {
      path: "/summary/:showId",
      element: <Summary />
    },

  ])



  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
