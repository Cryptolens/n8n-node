import type { INodeProperties } from 'n8n-workflow';
import { keyCreateDescription } from './create';

const showOnlyForKeys = {
	resource: ['key'],
};

export const keyDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForKeys,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a license key',
				description: 'Create a new Cryptolens key',
				routing: {
					request: {
						method: 'GET',
						url: '/key/CreateKey',
					},
				},
			},
		],
		default: 'create',
	},
	...keyCreateDescription,
];
