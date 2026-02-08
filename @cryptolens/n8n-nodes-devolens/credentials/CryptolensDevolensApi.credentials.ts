import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class CryptolensDevolensApi implements ICredentialType {
	name = 'cryptolensDevolensApi';

	displayName = 'Cryptolens Devolens API';

	// Link to your community node's README
	documentationUrl = 'https://github.com/org/@cryptolens/-devolens?tab=readme-ov-file#credentials';

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
