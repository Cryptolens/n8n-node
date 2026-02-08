import type { INodeProperties } from 'n8n-workflow';

const showOnlyForKeyBlock = {
	operation: ['block'],
	resource: ['key'],
};

export const keyBlockDescription: INodeProperties[] = [
	{
		displayName: 'Product ID',
		name: 'productId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: showOnlyForKeyBlock,
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
		displayName: 'Key',
		name: 'key',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForKeyBlock,
		},
		description: 'The license key string to block',
		routing: {
			send: {
				type: 'query',
				property: 'Key',
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
			show: showOnlyForKeyBlock,
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
