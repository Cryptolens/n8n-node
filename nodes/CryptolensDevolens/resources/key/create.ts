import type { INodeProperties } from 'n8n-workflow';

const showOnlyForKeyCreate = {
	operation: ['create'],
	resource: ['key'],
};

export const keyCreateDescription: INodeProperties[] = [
	{
		displayName: 'Product ID',
		name: 'productId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: showOnlyForKeyCreate,
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
		displayName: 'Period (Days)',
		name: 'period',
		type: 'number',
		default: 30,
		displayOptions: {
			show: showOnlyForKeyCreate,
		},
		description: 'License period in days',
		routing: {
			send: {
				type: 'query',
				property: 'Period',
			},
		},
	},
	{
		displayName: 'Key',
		name: 'key',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForKeyCreate,
		},
		description: 'Optional custom key string',
		routing: {
			send: {
				type: 'query',
				property: 'Key',
			},
		},
	},
	{
		displayName: 'Notes',
		name: 'notes',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForKeyCreate,
		},
		description: 'Optional notes attached to the created license key',
		routing: {
			send: {
				type: 'query',
				property: 'Notes',
			},
		},
	},
	{
		displayName: 'Feature 1',
		name: 'f1',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: showOnlyForKeyCreate,
		},
		routing: {
			send: {
				type: 'query',
				property: 'F1',
			},
		},
	},
	{
		displayName: 'Feature 2',
		name: 'f2',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlyForKeyCreate,
		},
		routing: {
			send: {
				type: 'query',
				property: 'F2',
			},
		},
	},
	{
		displayName: 'Feature 3',
		name: 'f3',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlyForKeyCreate,
		},
		routing: {
			send: {
				type: 'query',
				property: 'F3',
			},
		},
	},
	{
		displayName: 'Feature 4',
		name: 'f4',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlyForKeyCreate,
		},
		routing: {
			send: {
				type: 'query',
				property: 'F4',
			},
		},
	},
	{
		displayName: 'Feature 5',
		name: 'f5',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlyForKeyCreate,
		},
		routing: {
			send: {
				type: 'query',
				property: 'F5',
			},
		},
	},
	{
		displayName: 'Feature 6',
		name: 'f6',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlyForKeyCreate,
		},
		routing: {
			send: {
				type: 'query',
				property: 'F6',
			},
		},
	},
	{
		displayName: 'Feature 7',
		name: 'f7',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlyForKeyCreate,
		},
		routing: {
			send: {
				type: 'query',
				property: 'F7',
			},
		},
	},
	{
		displayName: 'Feature 8',
		name: 'f8',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlyForKeyCreate,
		},
		routing: {
			send: {
				type: 'query',
				property: 'F8',
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
			show: showOnlyForKeyCreate,
		},
		options: [
			{
				displayName: 'Blocked',
				name: 'block',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'query',
						property: 'Block',
					},
				},
			},
			{
				displayName: 'Customer ID',
				name: 'customerId',
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'query',
						property: 'CustomerId',
					},
				},
			},
			{
				displayName: 'Max Number of Machines',
				name: 'maxNoOfMachines',
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'query',
						property: 'MaxNoOfMachines',
					},
				},
			},
			{
				displayName: 'Trial Activation',
				name: 'trialActivation',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'query',
						property: 'TrialActivation',
					},
				},
			},
		],
	},
];
