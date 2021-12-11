import { Link, NavLink } from "react-router-dom";
import Logo from '../src/images/lama.svg';

export interface SideBarProps {
    items: Array<{ name: string, to: string }>;
    icons: Array<{ name: string, to: string, icon: any }>;
    onLogout?: () => Promise<void>
    children: any;
}


export function SideBar(props: SideBarProps) {
    const { items, children } = props;
    return (
        <div className="w-full flex">
            <div className="flex flex-col w-32 h-screen sticky top-0 md:w-64 lex-shrink-0 bg-light bg-opacity-75 border-r shadow-lg hover:shadow-2xl  transition duration-150">
                <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between ">
                    <Link to="/" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
                        <img alt="Alpaki Logo" src={Logo} className="w-20 h-20" />
                    </Link>
                </div>
                <nav className="flex-grow md:block pr-4 pb-4 md:pb-0 md:overflow-y-auto">
                    {
                        items.map(item => (
                            <NavLink activeClassName="bg-primary text-primary" key={item.to} to={item.to} className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-r-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                                {item.name}
                            </NavLink >
                        ))
                    }
                </nav>
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    );
}