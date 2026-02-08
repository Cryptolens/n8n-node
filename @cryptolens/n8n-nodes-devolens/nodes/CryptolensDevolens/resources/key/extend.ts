import type { INodeProperties } from 'n8n-workflow';

const showOnlyForKeyExtendLicense = {
	operation: ['extendLicense'],
	resource: ['key'],
};

export const keyExtendLicenseDescription: INodeProperties[] = [
	{
		displayName: 'Product ID',
		name: 'productId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: showOnlyForKeyExtendLicense,
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
			show: showOnlyForKeyExtendLicense,
		},
		description: 'The license key string to extend',
		routing: {
			send: {
				type: 'query',
				property: 'Key',
			},
		},
	},
	{
		displayName: 'Number of Days',
		name: 'noOfDays',
		type: 'number',
		default: 0,
		displayOptions: {
			show: showOnlyForKeyExtendLicense,
		},
		description: 'How many days to extend (negative value reduces expiration)',
		routing: {
			send: {
				type: 'query',
				property: 'NoOfDays',
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
			show: showOnlyForKeyExtendLicense,
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
