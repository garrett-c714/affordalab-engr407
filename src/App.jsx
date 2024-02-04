import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import About from "./pages/About"
import Shop from "./pages/Shop"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {

    const router = createBrowserRouter([
	{
	    path: "/",
	    element: <About />
	},
	{
	    path: "/shop",
	    element: <Shop />
	}
    ]);

    return (
	<RouterProvider router={router} />
    );
}

export default App
