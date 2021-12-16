import { useState } from "react";
import { Link } from "react-router-dom";
import { LogoutIcon } from '@heroicons/react/solid'

export interface NavigationBarProps {
    items: Array<{ name: string, to: string }>;
    icons: Array<{ name: string, to: string, icon: any }>;
    onLogout?: () => Promise<void>
}

export function NavigationBar({ items, icons, onLogout }: NavigationBarProps) {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-4 bg-primary">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        {
                            items.map(item => (
                                <Link key={item.to} to={item.to} className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-primary">{item.name}</Link>
                            ))
                        }
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            {
                                icons.map(item => (
                                    <li className="nav-item">
                                        <Link
                                            key={item.to}
                                            title={item.name}
                                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-primary hover:opacity-75"
                                            to={item.to}
                                        >
                                            {
                                                item.icon({ className: "h-5 w-5" })
                                            }
                                        </Link>
                                    </li>
                                ))
                            }
                            {
                                onLogout && (
                                    <li>
                                        <button title="Log Out" onClick={() => onLogout()} className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-primary hover:opacity-75">
                                            <LogoutIcon className="w-5 h-5" />
                                        </button>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}