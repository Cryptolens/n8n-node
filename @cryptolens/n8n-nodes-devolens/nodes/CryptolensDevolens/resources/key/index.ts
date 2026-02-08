import type { INodeProperties } from 'n8n-workflow';
import { keyCreateDescription } from './create';
import { keyExtendLicenseDescription } from './extend';

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
			{
				name: 'Extend License',
				value: 'extendLicense',
				action: 'Extend a license',
				description: 'Extend an existing Cryptolens key',
				routing: {
					request: {
						method: 'GET',
						url: '/key/ExtendLicense',
					},
				},
			},
		],
		default: 'create',
	},
	...keyCreateDescription,
	...keyExtendLicenseDescription,
];
