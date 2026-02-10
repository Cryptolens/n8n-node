# @cryptolens/n8n-nodes-devolens

This is an n8n community node for Cryptolens. It lets you use Cryptolens Web API v3 in your n8n workflows.

[Cryptolens](https://cryptolens.io/) is a software licensing and entitlement platform.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)
[Version history](#version-history)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

### Key
- Create Key (`/key/CreateKey`)
- Extend License (`/key/ExtendLicense`)
- Block Key (`/key/BlockKey`)
- Unblock Key (`/key/UnblockKey`)
- Add Feature (`/key/AddFeature`)
- Remove Feature (`/key/RemoveFeature`)

### AI
- Get Web API Log (`/ai/GetWebAPILog`)

### Product
- Get Products (`/product/GetProducts`)
- Get Keys (`/product/GetKeys`)

## Credentials

Create a Cryptolens Access Token in your Cryptolens account and add it in n8n as the credential type `Cryptolens Devolens API`.

Credential field:
- `Access Token` 
- Source file: [`credentials/CryptolensDevolensApi.credentials.ts`](https://github.com/Cryptolens/n8n-node/blob/main/%40cryptolens/n8n-nodes-devolens/credentials/CryptolensDevolensApi.credentials.ts)

This node sends the token as:
- `token` header
- `token` query parameter

Base URL used by the node:
- `https://api.cryptolens.io/api`

## Compatibility

Built with the n8n community node tooling (`@n8n/node-cli`) and Node API version 1.

Test this node against your target n8n version before production use.

## Usage

1. Add the `Cryptolens Devolens` node to your workflow.
2. Select a resource (`Key`, `AI`, or `Product`).
3. Select an operation.
4. Configure the operation fields.
5. Execute the node.

Notes:
- Most endpoints in this node are `GET` and map fields to query parameters.
- Some operations include an optional method version parameter `v`.

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [Cryptolens Web API v3 docs](https://app.cryptolens.io/docs/api/v3/)
* [Project repository](https://github.com/Cryptolens/n8n-node/tree/main/%40cryptolens/n8n-nodes-devolens)

## Version history

### 0.1.0
- Initial public version.

