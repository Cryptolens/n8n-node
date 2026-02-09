import type { INodeProperties } from 'n8n-workflow';

const showOnlyForProductGetKeys = {
	operation: ['getKeys'],
	resource: ['product'],
};

export const productGetKeysDescription: INodeProperties[] = [
	{
		displayName: 'Product ID',
		name: 'productId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: showOnlyForProductGetKeys,
		},
		description: 'The Cryptolens Product ID',
		routing: {
			send: {
				type: 'query',
				property: 'ProductId',
			},
		},
	},
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		default: 1,
		typeOptions: {
			minValue: 1,
		},
		displayOptions: {
			show: showOnlyForProductGetKeys,
		},
		description: 'Page number (1-based)',
		routing: {
			send: {
				type: 'query',
				property: 'Page',
			},
		},
	},
	{
		displayName: 'Order By',
		name: 'orderBy',
		type: 'string',
		default: 'ID ascending',
		displayOptions: {
			show: showOnlyForProductGetKeys,
		},
		description: 'Ordering, for example "ID ascending" or "F1 descending"',
		routing: {
			send: {
				type: 'query',
				property: 'OrderBy',
			},
		},
	},
	{
		displayName: 'Search Query',
		name: 'searchQuery',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForProductGetKeys,
		},
		description: 'Filter expression, same format as product page search',
		routing: {
			send: {
				type: 'query',
				property: 'SearchQuery',
			},
		},
	},
	{
		displayName: 'Global ID',
		name: 'globalId',
		type: 'number',
		default: 0,
		displayOptions: {
			show: showOnlyForProductGetKeys,
		},
		description: 'Optional global key id for fast lookup',
		routing: {
			send: {
				type: 'query',
				property: 'GlobalId',
			},
		},
	},
	{
		displayName: 'Additional Options',
		name: 'additionalOptions',
		type: 'collection',
		default: {},
		placeholder: 'Add option',
		displayOptions: {
			show: showOnlyForProductGetKeys,
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
