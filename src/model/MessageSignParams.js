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

import ApiClient from '../ApiClient';
import MessageSignDestination from './MessageSignDestination';
import MessageSignSource from './MessageSignSource';

/**
 * The MessageSignParams model module.
 * @module model/MessageSignParams
 * @version 1.0.0
 */
class MessageSignParams {
    /**
     * Constructs a new <code>MessageSignParams</code>.
     * The information about a transaction that signs a message. You can provide the message either as raw data or as structured data.
     * @alias module:model/MessageSignParams
     * @param request_id {String} The request ID that is used to track a transaction request. The request ID is provided by you and must be unique within your organization.
     * @param chain_id {String} The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains).
     * @param source {module:model/MessageSignSource} 
     * @param destination {module:model/MessageSignDestination} 
     */
    constructor(request_id, chain_id, source, destination) { 
        
        MessageSignParams.initialize(this, request_id, chain_id, source, destination);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, request_id, chain_id, source, destination) { 
        obj['request_id'] = request_id;
        obj['chain_id'] = chain_id;
        obj['source'] = source;
        obj['destination'] = destination;
    }

    /**
     * Constructs a <code>MessageSignParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MessageSignParams} obj Optional instance to populate.
     * @return {module:model/MessageSignParams} The populated <code>MessageSignParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessageSignParams();

            if (data.hasOwnProperty('request_id')) {
                obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
            }
            if (data.hasOwnProperty('chain_id')) {
                obj['chain_id'] = ApiClient.convertToType(data['chain_id'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = MessageSignSource.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('destination')) {
                obj['destination'] = MessageSignDestination.constructFromObject(data['destination']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('category_names')) {
                obj['category_names'] = ApiClient.convertToType(data['category_names'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MessageSignParams</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MessageSignParams</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of MessageSignParams.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['request_id'] && !(typeof data['request_id'] === 'string' || data['request_id'] instanceof String)) {
            throw new Error("Expected the field `request_id` to be a primitive type in the JSON string but got " + data['request_id']);
        }
        // ensure the json data is a string
        if (data['chain_id'] && !(typeof data['chain_id'] === 'string' || data['chain_id'] instanceof String)) {
            throw new Error("Expected the field `chain_id` to be a primitive type in the JSON string but got " + data['chain_id']);
        }
        // validate the optional field `source`
        if (data['source']) { // data not null
          MessageSignSource.validateJSON(data['source']);
        }
        // validate the optional field `destination`
        if (data['destination']) { // data not null
          MessageSignDestination.validateJSON(data['destination']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['category_names'])) {
            throw new Error("Expected the field `category_names` to be an array in the JSON data but got " + data['category_names']);
        }

        return true;
    }


}

MessageSignParams.RequiredProperties = ["request_id", "chain_id", "source", "destination"];

/**
 * The request ID that is used to track a transaction request. The request ID is provided by you and must be unique within your organization.
 * @member {String} request_id
 */
MessageSignParams.prototype['request_id'] = undefined;

/**
 * The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains).
 * @member {String} chain_id
 */
MessageSignParams.prototype['chain_id'] = undefined;

/**
 * @member {module:model/MessageSignSource} source
 */
MessageSignParams.prototype['source'] = undefined;

/**
 * @member {module:model/MessageSignDestination} destination
 */
MessageSignParams.prototype['destination'] = undefined;

/**
 * The description of the message sign transaction.
 * @member {String} description
 */
MessageSignParams.prototype['description'] = undefined;

/**
 * The custom category for you to identify your transactions.
 * @member {Array.<String>} category_names
 */
MessageSignParams.prototype['category_names'] = undefined;






export default MessageSignParams;
