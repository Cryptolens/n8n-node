import type { INodeProperties } from 'n8n-workflow';

const showOnlyForProductGetProducts = {
	operation: ['getProducts'],
	resource: ['product'],
};

export const productGetProductsDescription: INodeProperties[] = [
	{
		displayName: 'Additional Options',
		name: 'additionalOptions',
		type: 'collection',
		default: {},
		placeholder: 'Add option',
		displayOptions: {
			show: showOnlyForProductGetProducts,
		},
		options: [
			{
				displayName: 'Version',
				name: 'version',
				type: 'number',
				default: 1,
				description: 'Method version (v), defaults to 1',
				routing: {
					send: {
						type: 'query',
						property: 'v',
					},
				},
			},
		],
	},
];
