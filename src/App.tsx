import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { MainLayout } from './Layout';
import routerBrowser from './router/index';
import Providers from './Providers/index.context';

function App() {
	return (
		<BrowserRouter>
			<Providers>
				<Routes>
					<Route path='/' element={<MainLayout />}>
						{routerBrowser}
					</Route>
				</Routes>
			</Providers>
		</BrowserRouter>
	);
}

export default App;
