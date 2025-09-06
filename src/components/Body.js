import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'



const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },{
            path:'/browser',
            element:<Browse/>,
        }
    ]);


  return (
    <div className='min-h-screen bg-gray-50'>
        <div className='mx-auto'>
        <RouterProvider router={appRouter}/>
        </div>
    </div>
  )
}

export default Body
