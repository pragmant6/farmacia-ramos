import { Route } from 'react-router-dom';
import {
	CatalogScreen,
	HomeScreen,
	OrdersScreen,
	ProductScreen,
} from '../Screens';

const routerBrowser = [
	{
		path: '', // 👈 esto sirve como "index route"
		name: 'Home',
		element: <HomeScreen />,
	},
	{
		path: 'products',
		name: 'Products',
		element: <ProductScreen />,
	},
	{
		path: 'catalogs',
		name: 'Catalogs',
		element: <CatalogScreen />,
	},
	{
		path: 'orders',
		name: 'Orders',
		element: <OrdersScreen />,
	},
];

const Routes = routerBrowser.map((route) => {
	return <Route key={route.name} path={route.path} element={route.element} />;
});

export default Routes;
