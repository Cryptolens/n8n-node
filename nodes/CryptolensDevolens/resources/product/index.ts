import type { INodeProperties } from 'n8n-workflow';
import { productGetKeysDescription } from './getKeys';
import { productGetProductsDescription } from './getProducts';

const showOnlyForProducts = {
	resource: ['product'],
};

export const productDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForProducts,
		},
		options: [
			{
				name: 'Get Keys',
				value: 'getKeys',
				action: 'Get keys',
				description: 'Get license keys for a product',
				routing: {
					request: {
						method: 'GET',
						url: '/product/GetKeys',
					},
				},
			},
			{
				name: 'Get Products',
				value: 'getProducts',
				action: 'Get products',
				description: 'Get all products',
				routing: {
					request: {
						method: 'GET',
						url: '/product/GetProducts',
					},
				},
			},
		],
		default: 'getProducts',
	},
	...productGetKeysDescription,
	...productGetProductsDescription,
];
