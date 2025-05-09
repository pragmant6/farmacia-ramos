import { Button } from 'primereact/button';
import { Column } from 'primereact/column';

import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { useEffect, useState } from 'react';
import { ProductService } from './ProductService';
import { CustomTable, MainContainer } from '../../components';
import { IProduct } from '../../Interfaces/Dtos';

export const ProductScreen = () => {
	const [products, setProducts] = useState<IProduct[]>([]);

	useEffect(() => {
		ProductService.getProducts().then((data) => setProducts(data));
	}, []);

	const formatCurrency = (value: number) => {
		return value.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
		});
	};

	// const imageBodyTemplate = (product: IProduct) => {
	// 	return (
	// 		<img
	// 			src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
	// 			alt={product.image}
	// 			className='w-2 shadow-2 border-round'
	// 		/>
	// 	);
	// };

	const priceBodyTemplate = (product: IProduct) => {
		return formatCurrency(product.price);
	};

	const ratingBodyTemplate = (product: IProduct) => {
		return <Rating value={product.rating} readOnly cancel={false} />;
	};

	const statusBodyTemplate = (product: IProduct) => {
		return (
			<Tag
				value={product.inventoryStatus}
				severity={getSeverity(product)}></Tag>
		);
	};

	const getSeverity = (product: IProduct) => {
		switch (product.inventoryStatus) {
			case 'INSTOCK':
				return 'success';

			case 'LOWSTOCK':
				return 'warning';

			case 'OUTOFSTOCK':
				return 'danger';

			default:
				return null;
		}
	};
	const header = (
		<div className='flex flex-wrap align-items-center justify-content-between gap-2'>
			<span className='text-xl text-900 font-bold'>Products</span>
			<Button icon='pi pi-refresh' rounded raised />
		</div>
	);

	return (
		<MainContainer>
			<CustomTable
				className='!flex !flex-col !w-full !h-full !relative !bg-transparent'
				tableStyle={{
					height: '100% !important',
					minHeight: '100% !important',
					background: 'none',
					backgroundColor: 'none',
				}}
				value={products}
				tableClassName='!overflow-scroll !flex-col !absolute inset-0'
				rowClassName='hover:!bg-[#3b82f6] !border-r !border-secondary-PCS004'
				paginatorClassName='!border-t !border-border !justify-start !text-xs !top-0 flex bg-withe'
				paginatorTemplate='CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'
				currentPageReportTemplate='Total de registros {totalRecords}'
				responsiveLayout='scroll'
				header={header}>
				<Column field='name' header='Name'></Column>
				{/* <Column header='Image' body={imageBodyTemplate}></Column> */}
				<Column field='price' header='Price' body={priceBodyTemplate}></Column>
				<Column field='category' header='Category'></Column>
				<Column
					field='rating'
					header='Reviews'
					body={ratingBodyTemplate}></Column>
				<Column header='Status' body={statusBodyTemplate}></Column>
			</CustomTable>
		</MainContainer>
	);
};
