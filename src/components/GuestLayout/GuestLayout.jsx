import React, { useEffect, useState } from 'react'
import { Header } from '../header/Header'
import { SideBar } from '../sideBar/SideBar'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Footer } from '../footer/Footer'
import { GuestHeader } from '../GuestHeader/GuestHeader'

export const GuestLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {

        if (performance.navigation.type === 1) {

            if (
                location.pathname === "/login" ||
                location.pathname === "/register"
            ) {
                navigate("/");
            }
        }

    }, []
    );
   
  return (
      <>
          <GuestHeader />
          
          
              <div className={`content pt-[110px]  transition-all
                              duration-300 ease-in-out `}>
                            <Outlet />
                        </div>
        
          <Footer />
     </>
       
  )
}
