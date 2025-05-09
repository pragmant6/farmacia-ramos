import React, { FC } from 'react';
type MainContainerProps = {
	children: React.ReactNode;
	nameScreen?: string;
	cancelTittle?: boolean;
	iNeedFullLoading?: boolean;
	loadingState?: boolean;
	loadingForTable?: boolean;
	stateLoadingWithMessage?: {
		loading: boolean;
		message: string;
	};
};
export const MainContainer: FC<MainContainerProps> = ({
	cancelTittle,
	nameScreen,
	children,
}) => {
	return (
		<div className='flex w-full h-full relative flex-col overflow-x-hidden overflow-y-hidden '>
			{cancelTittle === false ? (
				<div className='flex w-full h-[5%] justify-start content-center items-center divide-x '>
					<h1 className='text-[18px] font-bold ml-2 font-karla text-3xl'>
						{nameScreen}
					</h1>
				</div>
			) : null}
			<div
				className={
					'flex w-full  relative   ' + (cancelTittle ? 'h-full' : 'h-[95%]  ')
				}>
				{/* {iNeedFullLoading ? (
					<FullLoading
						loadingState={
							loadingState || stateLoadingWithMessage.loading || loadingForTable
						}
						message={stateLoadingWithMessage.message}
					/>
				) : null} */}
				<div className='flex w-full h-full flex-row p-1 border relative'>
					{children}
				</div>
			</div>
			{/* {alertComponent} */}
		</div>
	);
};
