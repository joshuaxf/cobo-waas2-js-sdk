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
import BaseStakeExtra from './BaseStakeExtra';
import StakingPoolType from './StakingPoolType';

/**
 * The EigenLayerLstStakeExtra model module.
 * @module model/EigenLayerLstStakeExtra
 * @version 1.0.0
 */
class EigenLayerLstStakeExtra {
    /**
     * Constructs a new <code>EigenLayerLstStakeExtra</code>.
     * @alias module:model/EigenLayerLstStakeExtra
     * @implements module:model/BaseStakeExtra
     * @param pool_type {module:model/StakingPoolType} 
     */
    constructor(pool_type) { 
        BaseStakeExtra.initialize(this, pool_type);
        EigenLayerLstStakeExtra.initialize(this, pool_type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pool_type) { 
        obj['pool_type'] = pool_type;
    }

    /**
     * Constructs a <code>EigenLayerLstStakeExtra</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EigenLayerLstStakeExtra} obj Optional instance to populate.
     * @return {module:model/EigenLayerLstStakeExtra} The populated <code>EigenLayerLstStakeExtra</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EigenLayerLstStakeExtra();
            BaseStakeExtra.constructFromObject(data, obj);

            if (data.hasOwnProperty('pool_type')) {
                obj['pool_type'] = StakingPoolType.constructFromObject(data['pool_type']);
            }
            if (data.hasOwnProperty('operator')) {
                obj['operator'] = ApiClient.convertToType(data['operator'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EigenLayerLstStakeExtra</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EigenLayerLstStakeExtra</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EigenLayerLstStakeExtra.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['operator'] && !(typeof data['operator'] === 'string' || data['operator'] instanceof String)) {
            throw new Error("Expected the field `operator` to be a primitive type in the JSON string but got " + data['operator']);
        }

        return true;
    }


}

EigenLayerLstStakeExtra.RequiredProperties = ["pool_type"];

/**
 * @member {module:model/StakingPoolType} pool_type
 */
EigenLayerLstStakeExtra.prototype['pool_type'] = undefined;

/**
 * The operator address.
 * @member {String} operator
 */
EigenLayerLstStakeExtra.prototype['operator'] = undefined;


// Implement BaseStakeExtra interface:
/**
 * @member {module:model/StakingPoolType} pool_type
 */
BaseStakeExtra.prototype['pool_type'] = undefined;




export default EigenLayerLstStakeExtra;
