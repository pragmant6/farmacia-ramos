import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import Header from './components/Header';
export const MainLayout = () => {
	return (
		<div className='flex w-full h-screen bg-gray-100 flex-col overflow-hidden'>
			<Header />
			<div className='flex w-full h-full flex-row overflow-hidden relative'>
				<div className='flex h-full w-48'>
					<Sidebar />
				</div>
				<div className='flex h-full w-full justify-center '>
					<Outlet />
				</div>
			</div>
		</div>
	);
};
