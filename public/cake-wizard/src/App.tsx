import logo from "./logo.svg";
import "./App.css";
import { LoginIcon, UserCircleIcon } from "@heroicons/react/solid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useUserContext } from "./context/auth0-context";
import { SideBar } from "./SideBar";
import { NotFound } from "./pages/NotFound";
import { LoginPage } from "./pages/authorize/login";

type MenuItemCanView = (props: { isAuthorized: boolean }) => boolean;
type MenuItem = { name: string; to: string; show: MenuItemCanView };
type MenuIconItem = {
  name: string;
  to: string;
  icon: any;
  show: MenuItemCanView;
};

const ifAuthorized: MenuItemCanView = ({ isAuthorized }) => isAuthorized;
const ifAnonymous: MenuItemCanView = ({ isAuthorized }) => !isAuthorized;

const menuItems: MenuItem[] = [
  { name: "Products", to: "/search", show: ifAuthorized },
  { name: "Profile", to: "/authorize/profile", show: ifAuthorized },
  { name: "Login", to: "/authorize/login", show: ifAnonymous },
  { name: "Register", to: "/authorize/register", show: ifAnonymous },
  { name: "Cake", to: "/cake", show: ifAnonymous },
];

const menuIconItems: MenuIconItem[] = [
  { name: "Login", to: "/authorize/login", icon: LoginIcon, show: ifAnonymous },
  {
    name: "Profile",
    to: "/authorize/profile",
    icon: UserCircleIcon,
    show: ifAuthorized,
  },
];

function App() {
  const { userId } = useUserContext();
  const menuItemData = { isAuthorized: !!userId };
  const items = menuItems
    .filter((item) => item.show(menuItemData))
    .map((item) => ({ name: item.name, to: item.to }));
  const iconItems = menuIconItems
    .filter((item) => item.show(menuItemData))
    .map((item) => ({ name: item.name, to: item.to, icon: item.icon }));

  return (
    <SideBar items={items} icons={iconItems}>
      <Routes>
        <Route path="/authorize/login" element={<LoginPage />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </SideBar>
  );
}

export default App;
