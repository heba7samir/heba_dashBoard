import React, { useEffect, useState } from 'react'
import { Header } from '../header/Header'
import { SideBar } from '../sideBar/SideBar'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Footer } from '../footer/Footer'

export const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {

        if (performance.navigation.type === 1) {

            if (location.pathname !== "/home") {
                navigate("/home");
            }

        }

    }, []);
    return (
        <>
            <Header />

            <div className="flex flex-1 flex-row">
                {/* Main Content */}
                <main className={`flex-1 overflow-y-auto content pt-[110px] transition-all
                duration-300 ease-in-out `}>
                    <Outlet />
                </main>
                {/* Sidebar */}
                <SideBar isOpen={isOpen}
                    setIsOpen={setIsOpen} />

            </div>
            <Footer />
        </>

    )
}
