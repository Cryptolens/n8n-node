import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAiGetWebApiLog = {
	operation: ['getWebApiLog'],
	resource: ['ai'],
};

export const aiGetWebApiLogDescription: INodeProperties[] = [
	{
		displayName: 'Product ID',
		name: 'productId',
		type: 'number',
		default: 0,
		displayOptions: {
			show: showOnlyForAiGetWebApiLog,
		},
		description: 'Optional filter by product ID',
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
		default: '',
		displayOptions: {
			show: showOnlyForAiGetWebApiLog,
		},
		description: 'Optional filter by key string (requires Product ID)',
		routing: {
			send: {
				type: 'query',
				property: 'Key',
			},
		},
	},
	{
		displayName: 'Machine Code',
		name: 'machineCode',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForAiGetWebApiLog,
		},
		description: 'Optional filter by exact machine code (case sensitive)',
		routing: {
			send: {
				type: 'query',
				property: 'MachineCode',
			},
		},
	},
	{
		displayName: 'Friendly Name',
		name: 'friendlyName',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForAiGetWebApiLog,
		},
		description: 'Optional filter by friendly name (contains, case insensitive)',
		routing: {
			send: {
				type: 'query',
				property: 'FriendlyName',
			},
		},
	},
	{
		displayName: 'States',
		name: 'states',
		type: 'string',
		default: '',
		placeholder: '[3010,2010]',
		displayOptions: {
			show: showOnlyForAiGetWebApiLog,
		},
		description: 'Optional list of states as JSON array string',
		routing: {
			send: {
				type: 'query',
				property: 'States',
			},
		},
	},
	{
		displayName: 'Time Filter',
		name: 'time',
		type: 'string',
		default: '',
		placeholder: '{"gt":1742208215}',
		displayOptions: {
			show: showOnlyForAiGetWebApiLog,
		},
		description: 'Optional JSON string with gt/gte/lt/lte Unix timestamp filters',
		routing: {
			send: {
				type: 'query',
				property: 'Time',
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		typeOptions: {
			minValue: 1,
			maxValue: 1000,
		},
		displayOptions: {
			show: showOnlyForAiGetWebApiLog,
		},
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'query',
				property: 'Limit',
			},
		},
	},
	{
		displayName: 'Starting After',
		name: 'startingAfter',
		type: 'number',
		default: 0,
		displayOptions: {
			show: showOnlyForAiGetWebApiLog,
		},
		description: 'Cursor to return events after this ID (or time if time filter is used)',
		routing: {
			send: {
				type: 'query',
				property: 'StartingAfter',
			},
		},
	},
	{
		displayName: 'Ending Before',
		name: 'endingBefore',
		type: 'number',
		default: 0,
		displayOptions: {
			show: showOnlyForAiGetWebApiLog,
		},
		description: 'Cursor to return events before this ID (or time if time filter is used)',
		routing: {
			send: {
				type: 'query',
				property: 'EndingBefore',
			},
		},
	},
	{
		displayName: 'Order By',
		name: 'orderBy',
		type: 'string',
		default: '',
		placeholder: 'ID descending',
		displayOptions: {
			show: showOnlyForAiGetWebApiLog,
		},
		description: 'Optional ordering, e.g. "ID descending" or "Time ascending"',
		routing: {
			send: {
				type: 'query',
				property: 'OrderBy',
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
			show: showOnlyForAiGetWebApiLog,
		},
		options: [
			{
				displayName: 'Anomaly Classification',
				name: 'anomalyClassification',
				type: 'boolean',
				default: false,
				description: 'Whether to include anomaly classification fields in response',
				routing: {
					send: {
						type: 'query',
						property: 'AnomalyClassification',
					},
				},
			},
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
