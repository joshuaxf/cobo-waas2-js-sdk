/**
 * Cobo Wallet as a Service 2.0
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@cobo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CreateWebhookEndpointRequest from '../model/CreateWebhookEndpointRequest';
import ErrorResponse from '../model/ErrorResponse';
import ListWebhookEndpoints200Response from '../model/ListWebhookEndpoints200Response';
import ListWebhookEventDefinitions200ResponseInner from '../model/ListWebhookEventDefinitions200ResponseInner';
import ListWebhookEventLogs200Response from '../model/ListWebhookEventLogs200Response';
import ListWebhookEvents200Response from '../model/ListWebhookEvents200Response';
import RetryWebhookEventById201Response from '../model/RetryWebhookEventById201Response';
import UpdateWebhookEndpointByIdRequest from '../model/UpdateWebhookEndpointByIdRequest';
import WebhookEndpoint from '../model/WebhookEndpoint';
import WebhookEndpointStatus from '../model/WebhookEndpointStatus';
import WebhookEvent from '../model/WebhookEvent';
import WebhookEventStatus from '../model/WebhookEventStatus';
import WebhookEventType from '../model/WebhookEventType';

/**
* DevelopersWebhooks service.
* @module api/DevelopersWebhooksApi
* @version 1.0.0
*/
export default class DevelopersWebhooksApi {

    /**
    * Constructs a new DevelopersWebhooksApi. 
    * @alias module:api/DevelopersWebhooksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Register webhook endpoint
     * This operation registers a new webhook endpoint for your organization.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateWebhookEndpointRequest} [CreateWebhookEndpointRequest] The request body to register a webhook endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WebhookEndpoint} and HTTP response
     */
    createWebhookEndpointWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['CreateWebhookEndpointRequest'];
      if (postBody.toJSON) {
          postBody = postBody.toJSON()
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2', 'CoboAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = WebhookEndpoint;
      return this.apiClient.callApi(
        '/webhooks/endpoints', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Register webhook endpoint
     * This operation registers a new webhook endpoint for your organization.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateWebhookEndpointRequest} opts.CreateWebhookEndpointRequest The request body to register a webhook endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WebhookEndpoint}
     */
    createWebhookEndpoint(opts) {
      return this.createWebhookEndpointWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get webhook endpoint information
     * This operation retrieves the information of a specified webhook endpoint.
     * @param {String} endpoint_id The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WebhookEndpoint} and HTTP response
     */
    getWebhookEndpointByIdWithHttpInfo(endpoint_id) {
      let postBody = null;
      if (postBody.toJSON) {
          postBody = postBody.toJSON()
      }
      // verify the required parameter 'endpoint_id' is set
      if (endpoint_id === undefined || endpoint_id === null) {
        throw new Error("Missing the required parameter 'endpoint_id' when calling getWebhookEndpointById");
      }

      let pathParams = {
        'endpoint_id': endpoint_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = WebhookEndpoint;
      return this.apiClient.callApi(
        '/webhooks/endpoints/{endpoint_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get webhook endpoint information
     * This operation retrieves the information of a specified webhook endpoint.
     * @param {String} endpoint_id The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WebhookEndpoint}
     */
    getWebhookEndpointById(endpoint_id) {
      return this.getWebhookEndpointByIdWithHttpInfo(endpoint_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve event information
     * This operation retrieves the information of a webhook event by the event ID. 
     * @param {String} event_id The event ID. You can obtain a list of event IDs by calling [List all events](/v2/api-references/developers--webhooks/list-all-events).
     * @param {String} endpoint_id The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WebhookEvent} and HTTP response
     */
    getWebhookEventByIdWithHttpInfo(event_id, endpoint_id) {
      let postBody = null;
      if (postBody.toJSON) {
          postBody = postBody.toJSON()
      }
      // verify the required parameter 'event_id' is set
      if (event_id === undefined || event_id === null) {
        throw new Error("Missing the required parameter 'event_id' when calling getWebhookEventById");
      }
      // verify the required parameter 'endpoint_id' is set
      if (endpoint_id === undefined || endpoint_id === null) {
        throw new Error("Missing the required parameter 'endpoint_id' when calling getWebhookEventById");
      }

      let pathParams = {
        'event_id': event_id,
        'endpoint_id': endpoint_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = WebhookEvent;
      return this.apiClient.callApi(
        '/webhooks/endpoints/{endpoint_id}/events/{event_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve event information
     * This operation retrieves the information of a webhook event by the event ID. 
     * @param {String} event_id The event ID. You can obtain a list of event IDs by calling [List all events](/v2/api-references/developers--webhooks/list-all-events).
     * @param {String} endpoint_id The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WebhookEvent}
     */
    getWebhookEventById(event_id, endpoint_id) {
      return this.getWebhookEventByIdWithHttpInfo(event_id, endpoint_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List webhook endpoints
     * This operation retrieves the information of all webhook endpoints registered under your organization. You can filter the result by endpoint status and the subscribed event type.
     * @param {Object} opts Optional parameters
     * @param {module:model/WebhookEndpointStatus} [status] 
     * @param {module:model/WebhookEventType} [event_type] 
     * @param {Number} [limit = 10)] The maximum number of objects to return. For most operations, the value range is [1, 50].
     * @param {String} [before] An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
     * @param {String} [after] An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListWebhookEndpoints200Response} and HTTP response
     */
    listWebhookEndpointsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;
      if (postBody.toJSON) {
          postBody = postBody.toJSON()
      }

      let pathParams = {
      };
      let queryParams = {
        'status': opts['status'],
        'event_type': opts['event_type'],
        'limit': opts['limit'],
        'before': opts['before'],
        'after': opts['after']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListWebhookEndpoints200Response;
      return this.apiClient.callApi(
        '/webhooks/endpoints', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List webhook endpoints
     * This operation retrieves the information of all webhook endpoints registered under your organization. You can filter the result by endpoint status and the subscribed event type.
     * @param {Object} opts Optional parameters
     * @param {module:model/WebhookEndpointStatus} opts.status 
     * @param {module:model/WebhookEventType} opts.event_type 
     * @param {Number} opts.limit The maximum number of objects to return. For most operations, the value range is [1, 50]. (default to 10)
     * @param {String} opts.before An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
     * @param {String} opts.after An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListWebhookEndpoints200Response}
     */
    listWebhookEndpoints(opts) {
      return this.listWebhookEndpointsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get webhook event types
     * This operation retrieves all supported webhook event types.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ListWebhookEventDefinitions200ResponseInner>} and HTTP response
     */
    listWebhookEventDefinitionsWithHttpInfo() {
      let postBody = null;
      if (postBody.toJSON) {
          postBody = postBody.toJSON()
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ListWebhookEventDefinitions200ResponseInner];
      return this.apiClient.callApi(
        '/webhooks/events/definitions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get webhook event types
     * This operation retrieves all supported webhook event types.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ListWebhookEventDefinitions200ResponseInner>}
     */
    listWebhookEventDefinitions() {
      return this.listWebhookEventDefinitionsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List webhook event logs
     * This operation retrieves a list of webhook event logs by event ID. Each retry will generate a separate event log. 
     * @param {String} event_id The event ID. You can obtain a list of event IDs by calling [List all events](/v2/api-references/developers--webhooks/list-all-events).
     * @param {String} endpoint_id The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints).
     * @param {Object} opts Optional parameters
     * @param {Number} [limit = 10)] The maximum number of objects to return. For most operations, the value range is [1, 50].
     * @param {String} [before] An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
     * @param {String} [after] An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListWebhookEventLogs200Response} and HTTP response
     */
    listWebhookEventLogsWithHttpInfo(event_id, endpoint_id, opts) {
      opts = opts || {};
      let postBody = null;
      if (postBody.toJSON) {
          postBody = postBody.toJSON()
      }
      // verify the required parameter 'event_id' is set
      if (event_id === undefined || event_id === null) {
        throw new Error("Missing the required parameter 'event_id' when calling listWebhookEventLogs");
      }
      // verify the required parameter 'endpoint_id' is set
      if (endpoint_id === undefined || endpoint_id === null) {
        throw new Error("Missing the required parameter 'endpoint_id' when calling listWebhookEventLogs");
      }

      let pathParams = {
        'event_id': event_id,
        'endpoint_id': endpoint_id
      };
      let queryParams = {
        'limit': opts['limit'],
        'before': opts['before'],
        'after': opts['after']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListWebhookEventLogs200Response;
      return this.apiClient.callApi(
        '/webhooks/endpoints/{endpoint_id}/events/{event_id}/logs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List webhook event logs
     * This operation retrieves a list of webhook event logs by event ID. Each retry will generate a separate event log. 
     * @param {String} event_id The event ID. You can obtain a list of event IDs by calling [List all events](/v2/api-references/developers--webhooks/list-all-events).
     * @param {String} endpoint_id The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints).
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The maximum number of objects to return. For most operations, the value range is [1, 50]. (default to 10)
     * @param {String} opts.before An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
     * @param {String} opts.after An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListWebhookEventLogs200Response}
     */
    listWebhookEventLogs(event_id, endpoint_id, opts) {
      return this.listWebhookEventLogsWithHttpInfo(event_id, endpoint_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all webhook events
     * This operation retrieves a list of webhook events that have occurred within the last 30 days.  <Note>The request will only return webhook events that have occurred to the wallets associated with your current API key. For example, if the current API key is only associated with Custodial Wallets, any webhook events that have occurred to an MPC Wallet will not be retrieved with the current API key.</Note> 
     * @param {String} endpoint_id The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints).
     * @param {Object} opts Optional parameters
     * @param {module:model/WebhookEventStatus} [status] 
     * @param {module:model/WebhookEventType} [type] 
     * @param {Number} [limit = 10)] The maximum number of objects to return. For most operations, the value range is [1, 50].
     * @param {String} [before] An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
     * @param {String} [after] An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListWebhookEvents200Response} and HTTP response
     */
    listWebhookEventsWithHttpInfo(endpoint_id, opts) {
      opts = opts || {};
      let postBody = null;
      if (postBody.toJSON) {
          postBody = postBody.toJSON()
      }
      // verify the required parameter 'endpoint_id' is set
      if (endpoint_id === undefined || endpoint_id === null) {
        throw new Error("Missing the required parameter 'endpoint_id' when calling listWebhookEvents");
      }

      let pathParams = {
        'endpoint_id': endpoint_id
      };
      let queryParams = {
        'status': opts['status'],
        'type': opts['type'],
        'limit': opts['limit'],
        'before': opts['before'],
        'after': opts['after']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListWebhookEvents200Response;
      return this.apiClient.callApi(
        '/webhooks/endpoints/{endpoint_id}/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all webhook events
     * This operation retrieves a list of webhook events that have occurred within the last 30 days.  <Note>The request will only return webhook events that have occurred to the wallets associated with your current API key. For example, if the current API key is only associated with Custodial Wallets, any webhook events that have occurred to an MPC Wallet will not be retrieved with the current API key.</Note> 
     * @param {String} endpoint_id The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints).
     * @param {Object} opts Optional parameters
     * @param {module:model/WebhookEventStatus} opts.status 
     * @param {module:model/WebhookEventType} opts.type 
     * @param {Number} opts.limit The maximum number of objects to return. For most operations, the value range is [1, 50]. (default to 10)
     * @param {String} opts.before An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
     * @param {String} opts.after An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListWebhookEvents200Response}
     */
    listWebhookEvents(endpoint_id, opts) {
      return this.listWebhookEventsWithHttpInfo(endpoint_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retry event
     * This operation retries delivering a webhook event with the specified event ID. You can only retry delivering a webhook event in the `Retrying` or `Failed` status. 
     * @param {String} event_id The event ID. You can obtain a list of event IDs by calling [List all events](/v2/api-references/developers--webhooks/list-all-events).
     * @param {String} endpoint_id The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RetryWebhookEventById201Response} and HTTP response
     */
    retryWebhookEventByIdWithHttpInfo(event_id, endpoint_id) {
      let postBody = null;
      if (postBody.toJSON) {
          postBody = postBody.toJSON()
      }
      // verify the required parameter 'event_id' is set
      if (event_id === undefined || event_id === null) {
        throw new Error("Missing the required parameter 'event_id' when calling retryWebhookEventById");
      }
      // verify the required parameter 'endpoint_id' is set
      if (endpoint_id === undefined || endpoint_id === null) {
        throw new Error("Missing the required parameter 'endpoint_id' when calling retryWebhookEventById");
      }

      let pathParams = {
        'event_id': event_id,
        'endpoint_id': endpoint_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2', 'CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RetryWebhookEventById201Response;
      return this.apiClient.callApi(
        '/webhooks/endpoints/{endpoint_id}/events/{event_id}/retry', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retry event
     * This operation retries delivering a webhook event with the specified event ID. You can only retry delivering a webhook event in the `Retrying` or `Failed` status. 
     * @param {String} event_id The event ID. You can obtain a list of event IDs by calling [List all events](/v2/api-references/developers--webhooks/list-all-events).
     * @param {String} endpoint_id The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RetryWebhookEventById201Response}
     */
    retryWebhookEventById(event_id, endpoint_id) {
      return this.retryWebhookEventByIdWithHttpInfo(event_id, endpoint_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update webhook endpoint
     * This operation updates the information of a specified webhook endpoint.
     * @param {String} endpoint_id The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints).
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateWebhookEndpointByIdRequest} [UpdateWebhookEndpointByIdRequest] The request body to update a webhook endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WebhookEndpoint} and HTTP response
     */
    updateWebhookEndpointByIdWithHttpInfo(endpoint_id, opts) {
      opts = opts || {};
      let postBody = opts['UpdateWebhookEndpointByIdRequest'];
      if (postBody.toJSON) {
          postBody = postBody.toJSON()
      }
      // verify the required parameter 'endpoint_id' is set
      if (endpoint_id === undefined || endpoint_id === null) {
        throw new Error("Missing the required parameter 'endpoint_id' when calling updateWebhookEndpointById");
      }

      let pathParams = {
        'endpoint_id': endpoint_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2', 'CoboAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = WebhookEndpoint;
      return this.apiClient.callApi(
        '/webhooks/endpoints/{endpoint_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update webhook endpoint
     * This operation updates the information of a specified webhook endpoint.
     * @param {String} endpoint_id The webhook endpoint ID. You can retrieve a list of webhook endpoint IDs by calling [List webhook endpoints](/v2/api-references/developers--webhooks/list-webhook-endpoints).
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateWebhookEndpointByIdRequest} opts.UpdateWebhookEndpointByIdRequest The request body to update a webhook endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WebhookEndpoint}
     */
    updateWebhookEndpointById(endpoint_id, opts) {
      return this.updateWebhookEndpointByIdWithHttpInfo(endpoint_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}