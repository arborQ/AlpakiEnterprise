import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ProductDetails } from '@/pages/product-details';
import { SearchResults } from '@/pages/search-results';
import { LoginPage } from './pages/authorize/login';
import { RegisterPage } from './pages/authorize/register';
import { NotFound } from './pages/NotFound';
import { SideBar } from './SideBar';
import { LoginIcon, UserCircleIcon } from '@heroicons/react/solid'
import { useUserContext } from './context/user-context';
import { lazy, Suspense } from 'react';

type MenuItemCanView = (props: { isAuthorized: boolean }) => boolean;
type MenuItem = { name: string, to: string, show: MenuItemCanView };
type MenuIconItem = { name: string, to: string, icon: any, show: MenuItemCanView };

const ifAuthorized: MenuItemCanView = ({ isAuthorized }) => isAuthorized;
const ifAnonymous: MenuItemCanView = ({ isAuthorized }) => !isAuthorized;

const menuItems: MenuItem[] = [
  { name: 'Products', to: '/search', show: ifAuthorized },
  { name: 'Profile', to: '/authorize/profile', show: ifAuthorized },
  { name: 'Login', to: '/authorize/login', show: ifAnonymous },
  { name: 'Register', to: '/authorize/register', show: ifAnonymous },
  { name: 'Cake', to: '/cake', show: ifAnonymous },
];

const menuIconItems: MenuIconItem[] = [
  { name: 'Login', to: '/authorize/login', icon: LoginIcon, show: ifAnonymous },
  { name: 'Profile', to: '/authorize/profile', icon: UserCircleIcon, show: ifAuthorized }
];

function App() {
  const { userId } = useUserContext();
  const menuItemData = { isAuthorized: !!userId };
  const items = menuItems.filter(item => item.show(menuItemData)).map(item => ({ name: item.name, to: item.to }));
  const iconItems = menuIconItems.filter(item => item.show(menuItemData)).map(item => ({ name: item.name, to: item.to, icon: item.icon }));

  return (
    <Router>
      <SideBar items={items} icons={iconItems}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/product/:id">
              <ProductDetails />
            </Route>
            <Route path="/search">
              <SearchResults />
            </Route>
            <Route path="/authorize/login">
              <LoginPage />
            </Route>
            <Route path="/authorize/register">
              <RegisterPage />
            </Route>

            <Route path="/cake" component={lazy(() => import('./pages/cake/customize'))} />
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </SideBar>
    </Router>
  );
}

export default App;
