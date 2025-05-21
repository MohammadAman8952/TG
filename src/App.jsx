import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content from './components/Content/Content'
import Header from './components/Header/Header'
import Members from './components/Members/Member'
import { createBrowserRouter, Outlet, Route, RouterProvider } from 'react-router-dom';
import Footer from './components/Footer/Footer'


function App() {
  // const router=createBrowserRouter([
  //   {
  //     path:"/",
  //     element:<Header/>

  //   },
  // ])


  return (
    <>
    {/* <RouterProvider router={router}/> */}

    <Header/>
    {/* <Content/>
    <Members/> */}
    <Outlet/>
    <Footer/>
      
    </>
  )
}

export default App
