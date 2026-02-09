import type { INodeProperties } from 'n8n-workflow';
import { aiGetWebApiLogDescription } from './getWebApiLog';

const showOnlyForAi = {
	resource: ['ai'],
};

export const aiDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForAi,
		},
		options: [
			{
				name: 'Get Web API Log',
				value: 'getWebApiLog',
				action: 'Get Web API log events',
				description: 'Get logs of Web API requests',
				routing: {
					request: {
						method: 'GET',
						url: '/ai/GetWebAPILog',
					},
				},
			},
		],
		default: 'getWebApiLog',
	},
	...aiGetWebApiLogDescription,
];
