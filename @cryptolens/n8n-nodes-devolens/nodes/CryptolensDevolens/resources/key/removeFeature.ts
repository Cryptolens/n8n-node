import type { INodeProperties } from 'n8n-workflow';

const showOnlyForKeyRemoveFeature = {
	operation: ['removeFeature'],
	resource: ['key'],
};

export const keyRemoveFeatureDescription: INodeProperties[] = [
	{
		displayName: 'Product ID',
		name: 'productId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: showOnlyForKeyRemoveFeature,
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
			show: showOnlyForKeyRemoveFeature,
		},
		description: 'The license key string',
		routing: {
			send: {
				type: 'query',
				property: 'Key',
			},
		},
	},
	{
		displayName: 'Feature',
		name: 'feature',
		type: 'number',
		required: true,
		default: 1,
		typeOptions: {
			minValue: 1,
			maxValue: 8,
		},
		displayOptions: {
			show: showOnlyForKeyRemoveFeature,
		},
		description: 'Feature number to set to false (1 to 8)',
		routing: {
			send: {
				type: 'query',
				property: 'Feature',
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
			show: showOnlyForKeyRemoveFeature,
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
