import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class CryptolensDevolensApi implements ICredentialType {
	name = 'cryptolensDevolensApi';

	displayName = 'Cryptolens Devolens API';

	icon: Icon = {
		light: 'file:../nodes/CryptolensDevolens/cryptolensDevolens.svg',
		dark: 'file:../nodes/CryptolensDevolens/cryptolensDevolens.dark.svg',
	};

	// Link to your community node's README
	documentationUrl =
		'https://github.com/Cryptolens/n8n-node/blob/main/%40cryptolens/n8n-nodes-devolens/README.md#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'token',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				token: '={{$credentials.token}}',
			},
			qs: {
				token: '={{$credentials.token}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.cryptolens.io/api',
			url: '/key/CreateKey',
			method: 'GET',
		},
	};
}
