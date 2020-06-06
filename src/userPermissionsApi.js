const { URL, URLSearchParams } = require('url');

const ArgumentRequiredError = require('./argumentRequiredError');
class UserPermissionsApi {
  constructor(client) {
    this.client = client;
  }

  async authorizeUser(userId, resourceUri, permission) {
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new ArgumentRequiredError('userId', 'Required parameter userId was null or undefined when calling authorizeUser.');
    }
    // verify required parameter 'resourceUri' is not null or undefined
    if (resourceUri === null || resourceUri === undefined) {
      throw new ArgumentRequiredError('resourceUri', 'Required parameter resourceUri was null or undefined when calling authorizeUser.');
    }
    // verify required parameter 'permission' is not null or undefined
    if (permission === null || permission === undefined) {
      throw new ArgumentRequiredError('permission', 'Required parameter permission was null or undefined when calling authorizeUser.');
    }
    const url = `/v1/users/${encodeURIComponent(String(userId))}/resources/${encodeURIComponent(String(resourceUri))}/permissions/${encodeURIComponent(String(permission))}`;
    const response = await this.client.get(url);
    return response;
  }

  async disableUserToken(userId, tokenId) {
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new ArgumentRequiredError('userId', 'Required parameter userId was null or undefined when calling disableUserToken.');
    }
    // verify required parameter 'tokenId' is not null or undefined
    if (tokenId === null || tokenId === undefined) {
      throw new ArgumentRequiredError('tokenId', 'Required parameter tokenId was null or undefined when calling disableUserToken.');
    }
    const url = `/v1/users/${encodeURIComponent(String(userId))}/tokens/${encodeURIComponent(String(tokenId))}`;
    await this.client.delete(url);
  }

  async getUserPermissionsForResource(userId, resourceUri) {
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new ArgumentRequiredError('userId', 'Required parameter userId was null or undefined when calling getUserPermissionsForResource.');
    }
    // verify required parameter 'resourceUri' is not null or undefined
    if (resourceUri === null || resourceUri === undefined) {
      throw new ArgumentRequiredError('resourceUri', 'Required parameter resourceUri was null or undefined when calling getUserPermissionsForResource.');
    }

    const url = `/v1/users/${encodeURIComponent(String(userId))}/resources/${encodeURIComponent(String(resourceUri))}/permissions`;
    const response = await this.client.get(url);
    return response;
  }

  async getUserResources(userId, resourceUri, limit, cursor) {
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new ArgumentRequiredError('userId', 'Required parameter userId was null or undefined when calling getUserResources.');
    }

    const url = new URL(`${this.client.baseUrl}/v1/users/${encodeURIComponent(String(userId))}/resources`);
    url.search = new URLSearchParams({ resourceUri, limit, cursor }).toString();

    const response = await this.client.get(url);
    return response;
  }

  async requestUserToken(body, userId) {
    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new ArgumentRequiredError('body', 'Required parameter body was null or undefined when calling requestUserToken.');
    }
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new ArgumentRequiredError('userId', 'Required parameter userId was null or undefined when calling requestUserToken.');
    }
    const url = `/v1/users/${encodeURIComponent(String(userId))}/tokens`;
    const response = await this.client.post(url, body);
    return response;
  }
}

module.exports = UserPermissionsApi;