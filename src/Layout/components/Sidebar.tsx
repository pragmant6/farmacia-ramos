import { useLayout } from '../../Context/Layout/LayoutContext';
import { SidebarOptions } from '../../router/sidebar';
export const Sidebar = () => {
	const { goTo } = useLayout();
	return (
		<div className='flex w-full h-full relative flex-col'>
			<div className='flex w-full h-14 bg-green-400'></div>
			<div className='flex w-full h-full flex-row overflow-hidden relative'>
				<div className='flex h-full w-full bg-red-400 flex-col'>
					{SidebarOptions.map((item) => {
						return (
							<div
								onClick={() => goTo(item.path)}
								key={item.id}
								className='flex border w-full h-12 justify-start items-center content-center p-2 cursor-pointer'>
								{item.name}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
