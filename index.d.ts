export interface AuthressSettings {
  baseUrl: string;
}

export interface ArgumentRequiredError {

}

export interface Response<ResponseType> {
  /** Response data object on successful request */
  data: ResponseType;

  /** Response headers */
  headers: object;

  /** HTTP response status code for success responses */
  status: number;
}

/**
 * The access record which links users to roles.
 * @export
 * @interface AccessRecord
 */
export interface AccessRecord {
  /**
   * Unique identifier for the record, can be specified on record creation.
   * @type {string}
   * @memberof AccessRecord
   */
  recordId?: string;
  /**
   * A helpful name for this record
   * @type {string}
   * @memberof AccessRecord
   */
  name: string;
  /**
   * More details about this record
   * @type {string}
   * @memberof AccessRecord
   */
  description?: string;
  /**
   * Current status of the access record.
   * @type {string}
   * @memberof AccessRecord
   */
  status?: AccessRecord.StatusEnum;
  /**
   *
   * @type {V1recordsAccount}
   * @memberof AccessRecord
   */
  account: V1recordsAccount;
  /**
   * The list of users this record applies to
   * @type {Array<V1recordsUsers>}
   * @memberof AccessRecord
   */
  users: Array<V1recordsUsers>;
  /**
   * The list of admin that can edit this record even if they do not have global record edit permissions.
   * @type {Array<V1recordsUsers>}
   * @memberof AccessRecord
   */
  admins?: Array<V1recordsUsers>;
  /**
   * A list of statements which match roles to resources. Users in this record have all statements apply to them
   * @type {Array<V1usersuserIdtokensStatements>}
   * @memberof AccessRecord
   */
  statements: Array<V1usersuserIdtokensStatements>;
  /**
   *
   * @type {V1recordsLinks}
   * @memberof AccessRecord
   */
  links: V1recordsLinks;
}

/**
 * @export
 * @namespace AccessRecord
 */
export namespace AccessRecord {
    /**
     * @export
     * @enum {string}
     */
    export enum StatusEnum {
        ACTIVE = <any> 'ACTIVE',
        DELETED = <any> 'DELETED'
    }
}
/**
 * A collection of access records
 * @export
 * @interface AccessRecordCollection
 */
export interface AccessRecordCollection {
    /**
     *
     * @type {AccessRecordCollectionRecords}
     * @memberof AccessRecordCollection
     */
    records: AccessRecordCollectionRecords;
    /**
     *
     * @type {ResourcePermissionCollectionLinks}
     * @memberof AccessRecordCollection
     */
    links: ResourcePermissionCollectionLinks;
}
/**
 * The access record which links users to roles.
 * @export
 * @interface AccessRecordCollectionRecords
 */
export interface AccessRecordCollectionRecords {
    /**
     * Unique identifier for the record, can be specified on record creation.
     * @type {string}
     * @memberof AccessRecordCollectionRecords
     */
    recordId?: string;
    /**
     * A helpful name for this record
     * @type {string}
     * @memberof AccessRecordCollectionRecords
     */
    name: string;
    /**
     * More details about this record
     * @type {string}
     * @memberof AccessRecordCollectionRecords
     */
    description?: string;
    /**
     * Current status of the access record.
     * @type {string}
     * @memberof AccessRecordCollectionRecords
     */
    status?: AccessRecordCollectionRecords.StatusEnum;
    /**
     *
     * @type {V1recordsAccount}
     * @memberof AccessRecordCollectionRecords
     */
    account: V1recordsAccount;
    /**
     * The list of users this record applies to
     * @type {Array<V1recordsUsers>}
     * @memberof AccessRecordCollectionRecords
     */
    users: Array<V1recordsUsers>;
    /**
     * The list of admin that can edit this record even if they do not have global record edit permissions.
     * @type {Array<V1recordsUsers>}
     * @memberof AccessRecordCollectionRecords
     */
    admins?: Array<V1recordsUsers>;
    /**
     * A list of statements which match roles to resources. Users in this record have all statements apply to them
     * @type {Array<V1usersuserIdtokensStatements>}
     * @memberof AccessRecordCollectionRecords
     */
    statements: Array<V1usersuserIdtokensStatements>;
    /**
     *
     * @type {V1recordsLinks}
     * @memberof AccessRecordCollectionRecords
     */
    links: V1recordsLinks;
}

/**
 * @export
 * @namespace AccessRecordCollectionRecords
 */
export namespace AccessRecordCollectionRecords {
    /**
     * @export
     * @enum {string}
     */
    export enum StatusEnum {
        ACTIVE = <any> 'ACTIVE',
        DELETED = <any> 'DELETED'
    }
}
/**
 *
 * @export
 * @interface Account
 */
export interface Account {
    /**
     *
     * @type {string}
     * @memberof Account
     */
    accountId: string;
    /**
     *
     * @type {Date}
     * @memberof Account
     */
    createdTime: Date;
    /**
     * The top authress sub domain specific for this account to be used with this API.
     * @type {string}
     * @memberof Account
     */
    domain: string;
    /**
     *
     * @type {any}
     * @memberof Account
     */
    company: any;
    /**
     *
     * @type {V1recordsLinks}
     * @memberof Account
     */
    links: V1recordsLinks;
}
/**
 *
 * @export
 * @interface AccountCollection
 */
export interface AccountCollection {
    /**
     *
     * @type {AccountCollectionAccounts}
     * @memberof AccountCollection
     */
    accounts: AccountCollectionAccounts;
}
/**
 *
 * @export
 * @interface AccountCollectionAccounts
 */
export interface AccountCollectionAccounts {
    /**
     *
     * @type {string}
     * @memberof AccountCollectionAccounts
     */
    accountId: string;
    /**
     *
     * @type {Date}
     * @memberof AccountCollectionAccounts
     */
    createdTime: Date;
    /**
     * The top authress sub domain specific for this account to be used with this API.
     * @type {string}
     * @memberof AccountCollectionAccounts
     */
    domain: string;
    /**
     *
     * @type {any}
     * @memberof AccountCollectionAccounts
     */
    company: any;
    /**
     *
     * @type {V1recordsLinks}
     * @memberof AccountCollectionAccounts
     */
    links: V1recordsLinks;
}

/**
 * @export
 * @namespace AccessRecord
 */
export namespace AccessRecord {
    /**
     * @export
     * @enum {string}
     */
    export enum StatusEnum {
        ACTIVE = <any> 'ACTIVE',
        DELETED = <any> 'DELETED'
    }
}
/**
 *
 * @export
 * @interface ClaimRequest
 */
export interface ClaimRequest {
    /**
     * The parent resource to add a child resource to. The resource must have a resource configuration that add the permission CLAIM for this to work.
     * @type {string}
     * @memberof ClaimRequest
     */
    collectionResource: string;
    /**
     * The child resource the user is requesting Admin ownership over.
     * @type {string}
     * @memberof ClaimRequest
     */
    resourceId: string;
}

/**
 *
 * @export
 * @interface ClaimRequest
 */
export interface ClaimRequest {
    /**
     * The parent resource to add a child resource to. The resource must have a resource configuration that add the permission CLAIM for this to work.
     * @type {string}
     * @memberof ClaimRequest
     */
    collectionResource: string;
    /**
     * The child resource the user is requesting Admin ownership over.
     * @type {string}
     * @memberof ClaimRequest
     */
    resourceId: string;
}
/**
 *
 * @export
 * @interface ClaimResponse
 */
export interface ClaimResponse {
}
/**
 * A client configuration.
 * @export
 * @interface Client
 */
export interface Client {
    /**
     * The unique id of the client.
     * @type {string}
     * @memberof Client
     */
    clientId: string;
    /**
     *
     * @type {Date}
     * @memberof Client
     */
    createdTime: Date;
    /**
     * The name of the client
     * @type {string}
     * @memberof Client
     */
    name?: string;
    /**
     *
     * @type {V1clientsOptions}
     * @memberof Client
     */
    options?: V1clientsOptions;
}
/**
 * A client configuration.
 * @export
 * @interface ClientAccessKey
 */
export interface ClientAccessKey {
    /**
     * The unique id of the client.
     * @type {string}
     * @memberof ClientAccessKey
     */
    keyId?: string;
    /**
     * The unique id of the client.
     * @type {string}
     * @memberof ClientAccessKey
     */
    clientId: string;
    /**
     *
     * @type {Date}
     * @memberof ClientAccessKey
     */
    generationDate?: Date;
    /**
     * An encoded access key which contains identifying information for client access token creation. For direct use with the Authress SDKs, not meant to be decoded. Must be saved on created, as it will never be returned from the API ever again. Authress only saved the corresponding public key to verify private access keys.
     * @type {string}
     * @memberof ClientAccessKey
     */
    accessKey?: string;
}
/**
 * The collection of a list of clients
 * @export
 * @interface ClientCollection
 */
export interface ClientCollection {
    /**
     * A list of clients
     * @type {Array<ClientCollectionClients>}
     * @memberof ClientCollection
     */
    clients: Array<ClientCollectionClients>;
    /**
     *
     * @type {ResourcePermissionCollectionLinks}
     * @memberof ClientCollection
     */
    links: ResourcePermissionCollectionLinks;
}
/**
 * A client configuration.
 * @export
 * @interface ClientCollectionClients
 */
export interface ClientCollectionClients {
    /**
     * The unique id of the client.
     * @type {string}
     * @memberof ClientCollectionClients
     */
    clientId: string;
    /**
     *
     * @type {Date}
     * @memberof ClientCollectionClients
     */
    createdTime: Date;
    /**
     * The name of the client
     * @type {string}
     * @memberof ClientCollectionClients
     */
    name?: string;
    /**
     *
     * @type {V1clientsOptions}
     * @memberof ClientCollectionClients
     */
    options?: V1clientsOptions;
}
/**
 * The identifying information which uniquely links a JWT OIDC token to an identity provider
 * @export
 * @interface Identity
 */
export interface Identity {
    /**
     * The issuer of the JWT token. This can be any OIDC compliant provider.
     * @type {string}
     * @memberof Identity
     */
    issuer: string;
    /**
     * The audience of the JWT token. This can be either an audience for your entire app, or one particular audience for it. If there is more than one audience, multiple identities can be created.
     * @type {string}
     * @memberof Identity
     */
    audience: string;
}
/**
 *
 * @export
 * @interface IdentityCollection
 */
export interface IdentityCollection {
    /**
     *
     * @type {Array<IdentityCollectionIdentities>}
     * @memberof IdentityCollection
     */
    identities: Array<IdentityCollectionIdentities>;
}
/**
 * The identifying information which uniquely links a JWT OIDC token to an identity provider
 * @export
 * @interface IdentityCollectionIdentities
 */
export interface IdentityCollectionIdentities {
    /**
     * The issuer of the JWT token. This can be any OIDC compliant provider.
     * @type {string}
     * @memberof IdentityCollectionIdentities
     */
    issuer: string;
    /**
     * The audience of the JWT token. This can be either an audience for your entire app, or one particular audience for it. If there is more than one audience, multiple identities can be created.
     * @type {string}
     * @memberof IdentityCollectionIdentities
     */
    audience: string;
}
/**
 * Request to link an identity provider's audience and your app's audience with Authress.
 * @export
 * @interface IdentityRequest
 */
export interface IdentityRequest {
    /**
     * A valid JWT OIDC compliant token which will still pass authentication requests to the identity provider. Must contain a unique audience and issuer.
     * @type {string}
     * @memberof IdentityRequest
     */
    jwt: string;
    /**
     * If the `jwt` token contains more than one valid audience, then the single audience that should associated with Authress. If more than one audience is preferred, repeat this call with each one.
     * @type {string}
     * @memberof IdentityRequest
     */
    preferredAudience?: string;
}
/**
 * A collect of permissions that the user has to a resource.
 * @export
 * @interface UserResources
 */
export interface UserResources {
    /**
     *
     * @type {V1usersuserIdresourcesresourceUrimetadataAccount}
     * @memberof UserResources
     */
    account?: V1usersuserIdresourcesresourceUrimetadataAccount;
    /**
     *
     * @type {string}
     * @memberof UserResources
     */
    userId: string;
    /**
     * A list of the resources the user has some permission to.
     * @type {Array<UserResourcesResources>}
     * @memberof UserResources
     */
    resources?: Array<UserResourcesResources>;
    /**
     *
     * @type {ResourcePermissionCollectionLinks}
     * @memberof UserResources
     */
    links: ResourcePermissionCollectionLinks;
}

/**
 * The collection of a list of clients
 * @export
 * @interface ServiceClientCollection
 */
export interface ServiceClientCollection {
    /**
     * A list of clients
     * @type {Array<ClientCollectionClients>}
     * @memberof ServiceClientCollection
     */
    clients: Array<ClientCollectionClients>;
    /**
     *
     * @type {ResourcePermissionCollectionLinks}
     * @memberof ServiceClientCollection
     */
    links: ResourcePermissionCollectionLinks;
}
/**
 * A client configuration.
 * @export
 * @interface ServiceClient
 */
export interface ServiceClient {
    /**
     * The unique id of the client.
     * @type {string}
     * @memberof ServiceClient
     */
    clientId: string;
    /**
     *
     * @type {Date}
     * @memberof ServiceClient
     */
    createdTime: Date;
    /**
     * The name of the client
     * @type {string}
     * @memberof ServiceClient
     */
    name?: string;
    /**
     *
     * @type {V1clientsOptions}
     * @memberof ServiceClient
     */
    options?: V1clientsOptions;
}
/**
 * A client configuration.
 * @export
 * @interface AccessKeyResponse
 */
export interface AccessKeyResponse {
    /**
     * The unique id of the client.
     * @type {string}
     * @memberof AccessKeyResponse
     */
    keyId?: string;
    /**
     * The unique id of the client.
     * @type {string}
     * @memberof AccessKeyResponse
     */
    clientId: string;
    /**
     *
     * @type {Date}
     * @memberof AccessKeyResponse
     */
    generationDate?: Date;
    /**
     * An encoded access key which contains identifying information for client access token creation. For direct use with the Authress SDKs, not meant to be decoded. Must be saved on created, as it will never be returned from the API ever again. Authress only saved the corresponding public key to verify private access keys.
     * @type {string}
     * @memberof AccessKeyResponse
     */
    accessKey?: string;
}
/**
 * A collect of permissions that the user has to a resource.
 * @export
 * @interface UserPermissions
 */
export interface UserPermissions {
    /**
     *
     * @type {V1usersuserIdresourcesresourceUrimetadataAccount}
     * @memberof UserPermissions
     */
    account?: V1usersuserIdresourcesresourceUrimetadataAccount;
    /**
     *
     * @type {string}
     * @memberof UserPermissions
     */
    userId: string;
    /**
     * A list of the permissions
     * @type {Array<V1rolesroleIdPermissions>}
     * @memberof UserPermissions
     */
    permissions: Array<V1rolesroleIdPermissions>;
}
/**
 * A JWT token with represents the user.
 * @export
 * @interface UserToken
 */
export interface UserToken {
    /**
     *
     * @type {V1usersuserIdresourcesresourceUrimetadataAccount}
     * @memberof UserToken
     */
    account?: V1usersuserIdresourcesresourceUrimetadataAccount;
    /**
     *
     * @type {string}
     * @memberof UserToken
     */
    userId: string;
    /**
     * The unique identifier for the token
     * @type {string}
     * @memberof UserToken
     */
    tokenId: string;
    /**
     * The access token
     * @type {string}
     * @memberof UserToken
     */
    token: string;
    /**
     *
     * @type {UserTokenLinks}
     * @memberof UserToken
     */
    links?: UserTokenLinks;
}

/**
 *
 * @export
 * @interface ResourcePermissions
 */
export interface ResourcePermissions {
    /**
     *
     * @type {Array<V1resourcesresourceUriPermissions>}
     * @memberof ResourcePermissions
     */
    permissions: Array<V1resourcesresourceUriPermissions>;
}

/**
 * The access record which links users to roles.
 * @export
 * @interface AccessRecord
 */
export interface AccessRecord {
    /**
     * Unique identifier for the record, can be specified on record creation.
     * @type {string}
     * @memberof AccessRecord
     */
    recordId?: string;
    /**
     * A helpful name for this record
     * @type {string}
     * @memberof AccessRecord
     */
    name: string;
    /**
     * More details about this record
     * @type {string}
     * @memberof AccessRecord
     */
    description?: string;
    /**
     * Current status of the access record.
     * @type {string}
     * @memberof AccessRecord
     */
    status?: AccessRecord.StatusEnum;
    /**
     *
     * @type {V1recordsAccount}
     * @memberof AccessRecord
     */
    account: V1recordsAccount;
    /**
     * The list of users this record applies to
     * @type {Array<V1recordsUsers>}
     * @memberof AccessRecord
     */
    users: Array<V1recordsUsers>;
    /**
     * The list of admin that can edit this record even if they do not have global record edit permissions.
     * @type {Array<V1recordsUsers>}
     * @memberof AccessRecord
     */
    admins?: Array<V1recordsUsers>;
    /**
     * A list of statements which match roles to resources. Users in this record have all statements apply to them
     * @type {Array<V1usersuserIdtokensStatements>}
     * @memberof AccessRecord
     */
    statements: Array<V1usersuserIdtokensStatements>;
    /**
     *
     * @type {V1recordsLinks}
     * @memberof AccessRecord
     */
    links: V1recordsLinks;
}

/**
 * @export
 * @namespace AccessRecord
 */
export namespace AccessRecord {
    /**
     * @export
     * @enum {string}
     */
    export enum StatusEnum {
        ACTIVE = <any> 'ACTIVE',
        DELETED = <any> 'DELETED'
    }
}
/**
 * The role which contains a list of permissions.
 * @export
 * @interface Role
 */
export interface Role {
    /**
     * Unique identifier for the role, can be specified on creation, and used by records to map to permissions.
     * @type {string}
     * @memberof Role
     */
    roleId: string;
    /**
     * A helpful name for this role
     * @type {string}
     * @memberof Role
     */
    name: string;
    /**
     * A description for when to the user as well as additional information.
     * @type {string}
     * @memberof Role
     */
    description?: string;
    /**
     * A list of the permissions
     * @type {Array<V1rolesroleIdPermissions>}
     * @memberof Role
     */
    permissions: Array<V1rolesroleIdPermissions>;
}

/**
 * A url linking object that complies to application/links+json RFC. Either is an IANA approved link relation or has a custom rel specified.
 * @export
 * @interface Link
 */
export interface Link {
    /**
     * The absolute url pointing to the reference resource.
     * @type {string}
     * @memberof Link
     */
    href: string;
    /**
     * Optional property indicating the type of link if it is not a default IANA approved global link relation.
     * @type {string}
     * @memberof Link
     */
    rel?: string;
}
/**
 * Metadata and additional properties relevant.
 * @export
 * @interface MetadataObject
 */
export interface MetadataObject {
    /**
     *
     * @type {V1usersuserIdresourcesresourceUrimetadataAccount}
     * @memberof MetadataObject
     */
    account?: V1usersuserIdresourcesresourceUrimetadataAccount;
    /**
     *
     * @type {string}
     * @memberof MetadataObject
     */
    userId: string;
    /**
     * A JSON object limited to 10KB. The owner identified by the sub will always have access to read and update this data. Service clients may have access if the related property on the client is set. Access is restricted to authorized users.
     * @type {object}
     * @memberof MetadataObject
     */
    metadata: object;
}
/**
 * The collective action and associate grants on a permission
 * @export
 * @interface PermissionObject
 */
export interface PermissionObject {
    /**
     * The action the permission grants, can be scoped using `:` and parent actions imply child permissions, action:* or action implies action:sub-action. This property is case-insensitive, it will always be cast to lowercase before comparing actions to user permissions.
     * @type {string}
     * @memberof PermissionObject
     */
    action: string;
    /**
     * Does this permission grant the user the ability to execute the action?
     * @type {boolean}
     * @memberof PermissionObject
     */
    allow: boolean;
    /**
     * Allows the user to give the permission to others without being able to execute the action.
     * @type {boolean}
     * @memberof PermissionObject
     */
    grant: boolean;
    /**
     * Allows delegating or granting the permission to others without being able to execute tha action.
     * @type {boolean}
     * @memberof PermissionObject
     */
    delegate: boolean;
}
/**
 * A collect of permissions that the user has to a resource.
 * @export
 * @interface PermissionResponse
 */
export interface PermissionResponse {
    /**
     *
     * @type {V1usersuserIdresourcesresourceUrimetadataAccount}
     * @memberof PermissionResponse
     */
    account?: V1usersuserIdresourcesresourceUrimetadataAccount;
    /**
     *
     * @type {string}
     * @memberof PermissionResponse
     */
    userId: string;
    /**
     * A list of the permissions
     * @type {Array<V1rolesroleIdPermissions>}
     * @memberof PermissionResponse
     */
    permissions: Array<V1rolesroleIdPermissions>;
}
/**
 *
 * @export
 * @interface ResourcePermission
 */
export interface ResourcePermission {
    /**
     *
     * @type {Array<V1resourcesresourceUriPermissions>}
     * @memberof ResourcePermission
     */
    permissions: Array<V1resourcesresourceUriPermissions>;
}
/**
 * A collection of resource permissions that have been defined.
 * @export
 * @interface ResourcePermissionCollection
 */
export interface ResourcePermissionCollection {
    /**
     *
     * @type {ResourcePermissionCollectionResources}
     * @memberof ResourcePermissionCollection
     */
    resources: ResourcePermissionCollectionResources;
    /**
     *
     * @type {ResourcePermissionCollectionLinks}
     * @memberof ResourcePermissionCollection
     */
    links: ResourcePermissionCollectionLinks;
}
/**
 *
 * @export
 * @interface ResourcePermissionCollectionLinks
 */
export interface ResourcePermissionCollectionLinks {
    /**
     *
     * @type {V1recordsLinksSelf}
     * @memberof ResourcePermissionCollectionLinks
     */
    self: V1recordsLinksSelf;
    /**
     *
     * @type {ResourcePermissionCollectionLinksNext}
     * @memberof ResourcePermissionCollectionLinks
     */
    next?: ResourcePermissionCollectionLinksNext;
}
/**
 * A link pointing to the next page in the collection if it exists. If there is no next page this property will not exist.
 * @export
 * @interface ResourcePermissionCollectionLinksNext
 */
export interface ResourcePermissionCollectionLinksNext {
    /**
     * The absolute url pointing to the reference resource.
     * @type {string}
     * @memberof ResourcePermissionCollectionLinksNext
     */
    href: string;
    /**
     * Optional property indicating the type of link if it is not a default IANA approved global link relation.
     * @type {string}
     * @memberof ResourcePermissionCollectionLinksNext
     */
    rel?: string;
}
/**
 *
 * @export
 * @interface ResourcePermissionCollectionResources
 */
export interface ResourcePermissionCollectionResources {
    /**
     *
     * @type {Array<V1resourcesresourceUriPermissions>}
     * @memberof ResourcePermissionCollectionResources
     */
    permissions: Array<V1resourcesresourceUriPermissions>;
}

/**
 *
 * @export
 * @interface Statement
 */
export interface Statement {
    /**
     *
     * @type {Array<string>}
     * @memberof Statement
     */
    roles: Array<string>;
    /**
     *
     * @type {Array<V1usersuserIdtokensResources>}
     * @memberof Statement
     */
    resources: Array<V1usersuserIdtokensResources>;
}
/**
 *
 * @export
 * @interface TokenRequest
 */
export interface TokenRequest {
    /**
     * A list of statements which match roles to resources. The token will have all statements apply to it.
     * @type {Array<V1usersuserIdtokensStatements>}
     * @memberof TokenRequest
     */
    statements: Array<V1usersuserIdtokensStatements>;
    /**
     * The ISO8601 datetime when the token will expire. Default is 24 hours from now.
     * @type {Date}
     * @memberof TokenRequest
     */
    expires: Date;
}
/**
 * A collect of permissions that the user has to a resource.
 * @export
 * @interface UserResources
 */
export interface UserResources {
    /**
     *
     * @type {V1usersuserIdresourcesresourceUrimetadataAccount}
     * @memberof UserResources
     */
    account?: V1usersuserIdresourcesresourceUrimetadataAccount;
    /**
     *
     * @type {string}
     * @memberof UserResources
     */
    userId: string;
    /**
     * A list of the resources the user has some permission to.
     * @type {Array<UserResourcesResources>}
     * @memberof UserResources
     */
    resources?: Array<UserResourcesResources>;
    /**
     *
     * @type {ResourcePermissionCollectionLinks}
     * @memberof UserResources
     */
    links: ResourcePermissionCollectionLinks;
}
/**
 *
 * @export
 * @interface UserResourcesResources
 */
export interface UserResourcesResources {
    /**
     * The resourceUri that matches the requested resourceUri that the user has access to.
     * @type {string}
     * @memberof UserResourcesResources
     */
    resourceUri?: string;
}
/**
 * A JWT token with represents the user.
 * @export
 * @interface UserToken
 */
export interface UserToken {
    /**
     *
     * @type {V1usersuserIdresourcesresourceUrimetadataAccount}
     * @memberof UserToken
     */
    account?: V1usersuserIdresourcesresourceUrimetadataAccount;
    /**
     *
     * @type {string}
     * @memberof UserToken
     */
    userId: string;
    /**
     * The unique identifier for the token
     * @type {string}
     * @memberof UserToken
     */
    tokenId: string;
    /**
     * The access token
     * @type {string}
     * @memberof UserToken
     */
    token: string;
    /**
     *
     * @type {UserTokenLinks}
     * @memberof UserToken
     */
    links?: UserTokenLinks;
}
/**
 *
 * @export
 * @interface UserTokenLinks
 */
export interface UserTokenLinks {
    /**
     *
     * @type {UserTokenLinksSelf}
     * @memberof UserTokenLinks
     */
    self: UserTokenLinksSelf;
}
/**
 * A self link pointing to this token to be able to disable it or get its current configuration.
 * @export
 * @interface UserTokenLinksSelf
 */
export interface UserTokenLinksSelf {
    /**
     * The absolute url pointing to the reference resource.
     * @type {string}
     * @memberof UserTokenLinksSelf
     */
    href: string;
    /**
     * Optional property indicating the type of link if it is not a default IANA approved global link relation.
     * @type {string}
     * @memberof UserTokenLinksSelf
     */
    rel?: string;
}
/**
 * A map of client specific options
 * @export
 * @interface V1clientsOptions
 */
export interface V1clientsOptions {
    /**
     * Grant the client access to verify authorization on behalf of any user.
     * @type {boolean}
     * @memberof V1clientsOptions
     */
    grantUserPermissionsAccess?: boolean;
    /**
     * Grant the client access to read and write user data on behalf of any user
     * @type {boolean}
     * @memberof V1clientsOptions
     */
    grantMetadataAccess?: boolean;
}
/**
 *
 * @export
 * @interface V1recordsAccount
 */
export interface V1recordsAccount {
    /**
     *
     * @type {string}
     * @memberof V1recordsAccount
     */
    accountId: string;
}
/**
 *
 * @export
 * @interface V1recordsLinks
 */
export interface V1recordsLinks {
    /**
     *
     * @type {V1recordsLinksSelf}
     * @memberof V1recordsLinks
     */
    self: V1recordsLinksSelf;
}
/**
 * A self link pointing to this request url
 * @export
 * @interface V1recordsLinksSelf
 */
export interface V1recordsLinksSelf {
    /**
     * The absolute url pointing to the reference resource.
     * @type {string}
     * @memberof V1recordsLinksSelf
     */
    href: string;
    /**
     * Optional property indicating the type of link if it is not a default IANA approved global link relation.
     * @type {string}
     * @memberof V1recordsLinksSelf
     */
    rel?: string;
}
/**
 *
 * @export
 * @interface V1recordsUsers
 */
export interface V1recordsUsers {
    /**
     *
     * @type {string}
     * @memberof V1recordsUsers
     */
    userId: string;
}
/**
 *
 * @export
 * @interface V1resourcesresourceUriPermissions
 */
export interface V1resourcesresourceUriPermissions {
    /**
     *
     * @type {string}
     * @memberof V1resourcesresourceUriPermissions
     */
    action: V1resourcesresourceUriPermissions.ActionEnum;
    /**
     *
     * @type {boolean}
     * @memberof V1resourcesresourceUriPermissions
     */
    allow: boolean;
}

/**
 * @export
 * @namespace V1resourcesresourceUriPermissions
 */
export namespace V1resourcesresourceUriPermissions {
    /**
     * @export
     * @enum {string}
     */
    export enum ActionEnum {
        CLAIM = <any> 'CLAIM',
        PUBLIC = <any> 'PUBLIC'
    }
}
/**
 * The collective action and associate grants on a permission
 * @export
 * @interface V1rolesroleIdPermissions
 */
export interface V1rolesroleIdPermissions {
    /**
     * The action the permission grants, can be scoped using `:` and parent actions imply child permissions, action:* or action implies action:sub-action. This property is case-insensitive, it will always be cast to lowercase before comparing actions to user permissions.
     * @type {string}
     * @memberof V1rolesroleIdPermissions
     */
    action: string;
    /**
     * Does this permission grant the user the ability to execute the action?
     * @type {boolean}
     * @memberof V1rolesroleIdPermissions
     */
    allow: boolean;
    /**
     * Allows the user to give the permission to others without being able to execute the action.
     * @type {boolean}
     * @memberof V1rolesroleIdPermissions
     */
    grant: boolean;
    /**
     * Allows delegating or granting the permission to others without being able to execute tha action.
     * @type {boolean}
     * @memberof V1rolesroleIdPermissions
     */
    delegate: boolean;
}
/**
 *
 * @export
 * @interface V1usersuserIdresourcesresourceUrimetadataAccount
 */
export interface V1usersuserIdresourcesresourceUrimetadataAccount {
    /**
     *
     * @type {string}
     * @memberof V1usersuserIdresourcesresourceUrimetadataAccount
     */
    accountId?: string;
}
/**
 *
 * @export
 * @interface V1usersuserIdtokensResources
 */
export interface V1usersuserIdtokensResources {
    /**
     * A resource path which can be top level, fully qualified, or end with a *. Parent resources imply permissions to sub resources.
     * @type {string}
     * @memberof V1usersuserIdtokensResources
     */
    resourceUri: string;
}
/**
 *
 * @export
 * @interface V1usersuserIdtokensStatements
 */
export interface V1usersuserIdtokensStatements {
    /**
     *
     * @type {Array<string>}
     * @memberof V1usersuserIdtokensStatements
     */
    roles: Array<string>;
    /**
     *
     * @type {Array<V1usersuserIdtokensResources>}
     * @memberof V1usersuserIdtokensStatements
     */
    resources: Array<V1usersuserIdtokensResources>;
}

/**
 * AccessRecordsApi
 * @export
 */
export interface AccessRecordsApi {
    /**
     * Claim a resource by allowing a user to pick an identifier and receive admin access to that resource if it hasn't already been claimed. This only works for resources specifically marked as <strong>CLAIM</strong>. The result will be a new access record listing that user as the admin for this resource. The resourceUri will be appended to the collection resource uri using a '/' (forward slash) automatically.
     * @summary Claim a resource by an allowed user
     * @param {ClaimRequest} body
     * @throws {ArgumentRequiredError}
     */
    createClaim(body: ClaimRequest): Promise<Response<void>>;
    /**
     * Specify user roles for specific resources.
     * @summary Create a new access record
     * @param {AccessRecord} body
     * @throws {ArgumentRequiredError}
     */
    createRecord(body: AccessRecord): Promise<Response<AccessRecord>>;
    /**
     * Remove an access record, removing associated permissions from all users in record. If a user has a permission from another record, that permission will not be removed. (Note: This disables the record by changing the status to <strong>DELETED</strong> but not completely remove the record for tracking purposes.
     * @summary Deletes an access record.
     * @param {string} recordId The identifier of the access record.
     * @throws {ArgumentRequiredError}
     */
    deleteRecord(recordId: string): Promise<Response<void>>;
    /**
     * Access records contain information assigning permissions to users for resources.
     * @summary Get an access record for the account.
     * @param {string} recordId The identifier of the access record.
     * @throws {ArgumentRequiredError}
     */
    getRecord(recordId: string): Promise<Response<AccessRecord>>;
    /**
     * <i class=\"far fa-money-bill-alt text-primary\"></i> <span class=\"text-primary\">Billable</span> Returns a paginated records list for the account. Only records the user has access to are returned.
     * @summary Get all account records.
     * @param {number} [limit] Max number of results to return
     * @param {string} [cursor] Continuation cursor for paging (will automatically be set)
     * @param {string} [filter] Filter to search records by. This is a case insensitive search through every text field.
     * @param {string} [status] Filter records by their current status.
     * @throws {ArgumentRequiredError}
     */
    getRecords(limit?: number, cursor?: string, filter?: string, status?: string): Promise<Response<AccessRecordCollection>>;
    /**
     * Updates an access record adding or removing user permissions to resources.
     * @summary Update an access record.
     * @param {AccessRecord} body
     * @param {string} recordId The identifier of the access record.
     * @throws {ArgumentRequiredError}
     */
    updateRecord(body: AccessRecord, recordId: string): Promise<Response<AccessRecord>>;
};

/**
 * AccountsApi
 * @export
 */
export interface AccountsApi {
    /**
     * Includes the original configuration information.
     * @summary Get account information.
     * @param {string} accountId The unique identifier for the account
     * @throws {ArgumentRequiredError}
     */
    getAccount(accountId: string): Promise<Response<Account>>;
    /**
     * Returns a list of identities linked for this account.
     * @summary Get all linked identities for this account.
     * @throws {ArgumentRequiredError}
     */
    getAccountIdentities(options?: any): (fetch?: FetchAPI, basePath?: string): Promise<Response<IdentityCollection>>;
    /**
     * Returns a list of accounts that the user has access to.
     * @summary Get all accounts user has access to
     * @throws {ArgumentRequiredError}
     */
    getAccounts(options?: any): (fetch?: FetchAPI, basePath?: string): Promise<Response<AccountCollection>>;
    /**
     * An identity is a JWT subscriber *sub* and issuer *iss*. Only one account my be linked to a particular JWT combination. Allows calling the API with a federated token directly instead of using a client access key.
     * @summary Link a new account identity.
     * @param {IdentityRequest} body
     * @throws {ArgumentRequiredError}
     */
    linkIdentity(body: IdentityRequest): Promise<Response<void>>;
};

/**
 * MetadataApi
 * @export
 */
export interface MetadataApi {
    /**
     * <i class=\"far fa-money-bill-alt text-primary\"></i> <span class=\"text-primary\">Billable</span> Metadata is partitioned by the resource owner, and each can store independent data for a resource. This data is only accessible by identity provider tokens which specify the <strong>sub</strong> property and by service clients which have the <strong>grantMetadataAccess</strong> property.
     * @summary Get the metadata for a resource.
     * @param {string} userId The owner of the data.
     * @param {string} resourceUri The resource the data is attached to.
     * @throws {ArgumentRequiredError}
     */
    getUserMetadata(userId: string, resourceUri: string): Promise<Response<MetadataObject>>;
    /**
     * <i class=\"far fa-money-bill-alt text-primary\"></i> <span class=\"text-primary\">Billable</span> Each owner can store independent data for a resource. This data is only accessible by identity provider tokens which specify the <strong>sub</strong> property and by service clients which have the <strong>grantMetadataAccess</strong> property. The underlying resource does not need to actually exist in Authress to manage and update the data.
     * @summary Update the metadata for a resource.
     * @param {MetadataObject} body &lt;strong&gt;Important&lt;/strong&gt;: Data request object which contains properties identifying the data as well as the metadata itself. While there is limited access, the data saved here should be considered encrypted with best practices (Encrypted in Transit and Encrypted at Rest only). However, while Authress will to store and access in the data in a safe way, usage of this endpoint affirms this data must be application data and not user data. If there are explicit regulations or compliances regarding the data and how it should be saved here, this endpoint must not be used. That includes, but is not limited to--user personal data, data that is protected by GDPR and similar data protection regulations.
     * @param {string} userId The owner of the data.
     * @param {string} resourceUri The resource the data is attached to.
     * @throws {ArgumentRequiredError}
     */
    updateUserMetadata(body: MetadataObject, userId: string, resourceUri: string): Promise<Response<MetadataObject>>;
};

/**
 * ResourcePermissionsApi
 * @export
 */
export interface ResourcePermissionsApi {
  /**
   * Permissions can be set globally at a resource level. This will apply to all users in an account.
   * @summary Get a resource permissions object.
   * @param {string} resourceUri The uri path of a resource to validate, must be URL encoded, uri segments are allowed.
   * @throws {ArgumentRequiredError}
   */
  getResourcePermissions(resourceUri: string): Promise<Response<ResourcePermissions>>;
  /**
   * Permissions can be set globally at a resource level. Lists any resources with a globally set resource policy
   * @summary List resource configurations
   * @throws {ArgumentRequiredError}
   */
  getResources(options?: any): (fetch?: FetchAPI, basePath?: string): Promise<Response<ResourcePermissionCollection>>;
  /**
   * Updates the global permissions on a resource. This applies to all users in an account.
   * @summary Update a resource permissions object.
   * @param {ResourcePermissions} body The contents of the permission to set on the resource. Overwrites existing data.
   * @param {string} resourceUri The uri path of a resource to validate, must be URL encoded, uri segments are allowed.
   * @throws {ArgumentRequiredError}
   */
  updateResourcePermissions(body: ResourcePermissions, resourceUri: string): Promise<Response<void>>;
};

/**
 * RolesApi
 * @export
 */
export interface RolesApi {
  /**
   * Remove a role. If a record references the role, that record will not be modified.
   * @summary Deletes a role.
   * @param {string} roleId The identifier of the role.
   * @throws {ArgumentRequiredError}
   */
  deleteRole(roleId: string): Promise<Response<void>>;
  /**
   * Roles contain a list of permissions that will be applied to any user or resource
   * @summary Get a role.
   * @param {string} roleId The identifier of the role.
   * @throws {ArgumentRequiredError}
   */
  getRole(roleId: string): Promise<Response<Role>>;
  /**
   * Updates an role adding or removing permissions.
   * @summary Update a role.
   * @param {Role} body
   * @param {string} roleId The identifier of the role.
   * @throws {ArgumentRequiredError}
   */
  updateRole(body: Role, roleId: string): Promise<Response<Role>>;
};

/**
 * ServiceClientsApi
 * @export
 */
export interface ServiceClientsApi {
  /**
   * Creates a service client to interact with Authress or any other service on behalf of users. Each client has secret private keys used to authenticate with Authress. To use service clients created through other mechanisms, skip creating a client and create access records with the client identifier.
   * @summary Create a new client.
   * @param {ServiceClient} body
   * @throws {ArgumentRequiredError}
   */
  createClient(body: ServiceClient): Promise<Response<ServiceClient>>;
  /**
   * Deletes an access key for a client prevent it from being used to authenticate with Authress.
   * @summary Remove an access key for a client
   * @param {string} clientId The unique identifier of the client.
   * @param {string} keyId The id of the access key to remove from the client.
   * @throws {ArgumentRequiredError}
   */
  deleteAccessKey(clientId: string, keyId: string): Promise<Response<void>>;
  /**
   * This deletes the service client.
   * @summary Delete a client
   * @param {string} clientId The unique identifier for the client.
   * @throws {ArgumentRequiredError}
   */
  deleteClient(clientId: string): Promise<Response<void>>;
  /**
   * Returns all information related to client except for the private access keys.
   * @summary Get a client.
   * @param {string} clientId The unique identifier for the client.
   * @throws {ArgumentRequiredError}
   */
  getClient(clientId: string): Promise<Response<ServiceClient>>;
  /**
   * Returns all clients that the user has access to in the account.
   * @summary Get clients collection
   * @throws {ArgumentRequiredError}
   */
  getClients(options?: any): (fetch?: FetchAPI, basePath?: string): Promise<Response<ServiceClientCollection>>;
  /**
   * Create a new access key for the client so that a service can authenticate with Authress as that client. Using the client will allow delegation of permission checking of users.
   * @summary Request a new access key
   * @param {string} clientId The unique identifier of the client.
   * @throws {ArgumentRequiredError}
   */
  requestAccessKey(clientId: string): Promise<Response<AccessKeyResponse>>;
  /**
   * Updates a client information.
   * @summary Update a client
   * @param {ServiceClient} body
   * @param {string} clientId The unique identifier for the client.
   * @throws {ArgumentRequiredError}
   */
  updateClient(body: ServiceClient, clientId: string): Promise<Response<ServiceClient>>;
};

/**
 * UserPermissionsApi
 * @export
 */
export interface UserPermissionsApi {
  /**
   * <i class=\"far fa-money-bill-alt text-primary\"></i> <span class=\"text-primary\">Billable</span> Does the user have the specified permissions to the resource?
   * @summary Check to see if a user has permissions to a resource.
   * @param {string} userId The user to check permissions on
   * @param {string} resourceUri The uri path of a resource to validate, must be URL encoded, uri segments are allowed, the resource must be a full path, and permissions are not inherited by sub resources.
   * @param {string} permission Permission to check, &#x27;*&#x27; and scoped permissions can also be checked here.
   * @throws {ArgumentRequiredError}
   */
  authorizeUser(userId: string, resourceUri: string, permission: string): Promise<Response<void>>;
  /**
   * <i class=\"far fa-money-bill-alt text-primary\"></i> <span class=\"text-primary\">Billable</span> Permanently disable a token. To be used after the token has completed its use. Should be called on all tokens to ensure they are not active indefinitely.
   * @summary Disable a token
   * @param {string} userId The user to create an impersonation token for.
   * @param {string} tokenId The relevant token identifier
   * @throws {ArgumentRequiredError}
   */
  disableUserToken(userId: string, tokenId: string): Promise<Response<void>>;
  /**
   * <i class=\"far fa-money-bill-alt text-primary\"></i> <span class=\"text-primary\">Billable</span> Get a summary of the permissions a user has to a particular resource.
   * @summary Get the permissions a user has to a resource.
   * @param {string} userId The user to check permissions on
   * @param {string} resourceUri The uri path of a resource to validate, must be URL encoded, uri segments are allowed.
   * @throws {ArgumentRequiredError}
   */
  getUserPermissionsForResource(userId: string, resourceUri: string): Promise<Response<UserPermissions>>;
  /**
   * <i class=\"far fa-money-bill-alt text-primary\"></i> <span class=\"text-primary\">Billable</span> Get the users resources. This result is a list of resource uris that are either--A single element which matches the resource query uri or a list of direct collection resource uris. Since resource uris are cascading, a user with * access will always return a list with a single result. In the case that the user only has access to a subset of resources in a collection, the list will be paginated.
   * @summary Get the resources a user has to permission to.
   * @param {string} userId The user to check permissions on
   * @param {string} [resourceUri] The top level uri path of a resource to query for. Will only match explicit or collection resource children. Will not partial match resource names.
   * @param {number} [limit] Max number of results to return
   * @param {string} [cursor] Continuation cursor for paging (will automatically be set)
   * @throws {ArgumentRequiredError}
   */
  getUserResources(userId: string, resourceUri?: string, limit?: number, cursor?: string): Promise<Response<UserResources>>;
  /**
   * <i class=\"far fa-money-bill-alt text-primary\"></i> <span class=\"text-primary\">Billable</span> Get an Authress signed JWT access token using with userId as the sub. Additionally, can be configured to limit the permissions for this particular token and the length of time the token is valid. Token validation is real-time, so deleted tokens are restricted from being used as soon as they are deleted. This gives full control to the user and client creating the token. Client must have access to impersonating the user in order to generate tokens on their behalf.
   * @summary Request a user token with additional configuration
   * @param {TokenRequest} body The contents of the permission to set on the token. Will be used instead of the users or clients full permissions. Cannot include permissions that the user or client do not have.
   * @param {string} userId The user to create an impersonation token for.
   * @throws {ArgumentRequiredError}
   */
  requestUserToken(body: TokenRequest, userId: string): Promise<Response<UserToken>>;
};

declare class AuthressClient {
  constructor(settings: AuthressSettings, tokenProvider: Function);

  accessRecords: AccessRecordsApi;
  serviceClients: ServiceClientsApi;
  userPermissions: UserPermissionsApi;
  resources: ResourcesApi;
  accounts: AccountsApiResourcesApi;
  roles: RolesApiResourcesApi;

  setToken(accessKey: string): void;
}

export = AuthressClient;