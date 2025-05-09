import React, { useState, ReactNode, CSSProperties } from 'react';
import { DataTable, DataTableSortMeta } from 'primereact/datatable';

// import {
// 	DEFAULT_PAGE,
// 	ROWS_PER_PAGE,
// 	GRID_PAGES,
// } from './../../utils/constants/table/index';

type SortMeta = {
	field: string;
	order: 1 | 0 | -1;
};

type CustomTableProps = {
	children: ReactNode;
	style?: CSSProperties;
	header?: ReactNode;
	sortField?: string;
	sort?: SortMeta[]; // for multi-sort mode
	//setSort: (value: SortMeta[]) => void;
	doubleClick?: (data: any) => void;
	//tableClassName?: string;
	height?: string;
	rows?: number;
	id?: string;
	[key: string]: any; // allow extra props to be passed to DataTable
};

export const CustomTable: React.FC<CustomTableProps> = ({
	children,
	style = { height: 'calc(100vh - 106px)', width: 'calc(100vw - 92px)' },
	header,
	sort,
	//setSort,
	doubleClick = () => {},
	//tableClassName = '!text-xs ',
	height = 'h-9',
	rows = 25,
	id,
	...props
}) => {
	const [first] = useState(0);
	const [rowsNumber] = useState(rows);
	const [showMenu, setShowMenu] = useState(false);

	const h = showMenu ? ' h-auto ' : ' h-5 ';

	return (
		<div className='flex w-full h-full flex-col relative'>
			{header !== undefined && (
				<>
					<div
						className={`hidden lg:flex xl:flex 2xl:flex w-full py-1 pl-1 ${height}`}>
						{header}
					</div>
					<div
						className={
							`flex flex-col lg:hidden xl:hidden 2xl:hidden w-full h-full py-1 pl-1 border` +
							h
						}>
						{!showMenu ? (
							<div
								onClick={() => setShowMenu(!showMenu)}
								className='flex w-full justify-end content-start items-center'>
								<p className='!text-primary-ShadowPCP004 mr-2 flex !text-2xl justify-center content-center items-center hover:!text-secondary-PCS002'>
									<span className='icon-menu'></span>
								</p>
							</div>
						) : (
							<div className='flex lg:hidden xl:hidden 2xl:hidden w-full h-full py-1 pl-1 border flex-row'>
								<div className='flex h-full flex-grow'>{header}</div>
								<div
									onClick={() => setShowMenu(!showMenu)}
									className='flex justify-end content-start items-center'>
									<p className='!text-primary-ShadowPCP004 mr-2 flex !text-2xl justify-center content-center items-center hover:!text-secondary-PCS002'>
										<span className='icon-menu'></span>
									</p>
								</div>
							</div>
						)}
					</div>
				</>
			)}
			<div className='flex w-full h-full pt-1 pl-1'>
				<div className='flex w-full h-full relative'>
					<DataTable
						first={first}
						rows={rowsNumber}
						paginatorClassName='!border-t !border-border !justify-start !text-xs'
						id={id ?? 'testId'}
						removableSort
						paginatorTemplate='CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'
						rowsPerPageOptions={[25, 50, 75, 100]}
						resizableColumns
						// sortField={sort[0]?.field}
						// sortOrder={sort[0]?.order}
						columnResizeMode='fit'
						paginator
						scrollable
						scrollHeight='flex'
						//scrollDirection='both'
						stripedRows
						tableClassName='!absolute !top-0 !left-0 !right-0 !bottom-0'
						className='flex w-full h-full relative !font-karla !text-[14px]'
						//rowClassName='hover:!bg-[#3b82f6] !border-r !border-secondary-PCS004'
						size='small'
						onRowDoubleClick={(e) => {
							if (doubleClick) {
								doubleClick(e.data);
							}
						}}
						//onSort={(e) => setSort(e.multiSortMeta)}
						multiSortMeta={sort}
						sortMode='multiple'
						currentPageReportTemplate='Total de registros {totalRecords}'
						style={style}
						{...props}>
						{children}
					</DataTable>
				</div>
			</div>
		</div>
	);
};
