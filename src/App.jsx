import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/home/Home'
import { Course } from './pages/courses/Course'
import { Profile } from './pages/profile/Profile'
import { ThemeModeProvider, ThemeMoodContext } from './ulties/ThemeMood'
import { AllCourses } from './pages/courses/AllCourses'
import  Login  from './pages/login&Reg/Login'
import  Register  from './pages/login&Reg/Register'
import { GuestLayout } from './components/GuestLayout/GuestLayout'
import { WelcomePage } from './pages/welcomePage/WelcomePage'
import { ProtectedRoute } from './pages/ProtectedRoute'

export const App = () => {
  const Routing = createBrowserRouter([
    
     {
      path: "/",
      element: <GuestLayout />,
      children: [
        {
          index: true, element: <WelcomePage/>
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "register",
          element: <Register />
        }
      ]
    },
   
    {
      path: "/", element: <Layout />,
      children: [{
        path:"home", element:
          <ProtectedRoute>
            <Home />
         </ProtectedRoute>
          
      },
        { path: "course", element: <Course /> },
        { path: "allcourses", element: <AllCourses /> },
        { path: "profile", element: <Profile /> },
       
      ]


    }
  ])
  return (
    <RouterProvider router={Routing} />




  )
}
