import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// Create a router
// Method - 1
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />, // It tells that what it should render
//     children: [ 
//       {
//         path: '',
//         element: <Home /> // On path '/'
//       },
//       {
//         path: 'about', // '/About' Here slash is already included by parent.
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])

// Method - 2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
        loader={githubInfoLoader}
        path='github' 
        element={<Github />} 
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */ /* As we've insert react router, we don't to render <App /> */}
    <RouterProvider router={router} /> {/* It takes a prop. Otherwise it will not work */}
  </React.StrictMode>,
)
