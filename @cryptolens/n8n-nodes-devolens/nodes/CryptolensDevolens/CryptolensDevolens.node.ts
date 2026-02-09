import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { aiDescription } from './resources/ai';
import { keyDescription } from './resources/key';

export class CryptolensDevolens implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Cryptolens Devolens',
		name: 'cryptolensDevolens',
		icon: { light: 'file:cryptolensDevolens.svg', dark: 'file:cryptolensDevolens.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Cryptolens Devolens API',
		defaults: {
			name: 'Cryptolens Devolens',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'cryptolensDevolensApi', required: true }],
		requestDefaults: {
			baseURL: 'https://api.cryptolens.io/api',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Key',
						value: 'key',
					},
					{
						name: 'AI',
						value: 'ai',
					},
				],
				default: 'key',
			},
			...keyDescription,
			...aiDescription,
		],
	};
}
