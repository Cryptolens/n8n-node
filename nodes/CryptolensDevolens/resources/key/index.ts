import type { INodeProperties } from 'n8n-workflow';
import { keyAddFeatureDescription } from './addFeature';
import { keyBlockDescription } from './block';
import { keyCreateDescription } from './create';
import { keyExtendLicenseDescription } from './extend';
import { keyRemoveFeatureDescription } from './removeFeature';
import { keyUnblockDescription } from './unblock';

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
				name: 'Add Feature',
				value: 'addFeature',
				action: 'Add a feature to a license',
				description: 'Set a feature flag to true on a key',
				routing: {
					request: {
						method: 'GET',
						url: '/key/AddFeature',
					},
				},
			},
			{
				name: 'Block',
				value: 'block',
				action: 'Block a license',
				description: 'Block an existing Cryptolens key',
				routing: {
					request: {
						method: 'GET',
						url: '/key/BlockKey',
					},
				},
			},
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
			{
				name: 'Remove Feature',
				value: 'removeFeature',
				action: 'Remove a feature from a license',
				description: 'Set a feature flag to false on a key',
				routing: {
					request: {
						method: 'GET',
						url: '/key/RemoveFeature',
					},
				},
			},
			{
				name: 'Unblock',
				value: 'unblock',
				action: 'Unblock a license',
				description: 'Unblock an existing Cryptolens key',
				routing: {
					request: {
						method: 'GET',
						url: '/key/UnblockKey',
					},
				},
			},
		],
		default: 'create',
	},
	...keyAddFeatureDescription,
	...keyRemoveFeatureDescription,
	...keyBlockDescription,
	...keyUnblockDescription,
	...keyCreateDescription,
	...keyExtendLicenseDescription,
];
