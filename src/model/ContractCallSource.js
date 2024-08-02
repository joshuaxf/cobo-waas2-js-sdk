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
import CoboSafeDelegate from './CoboSafeDelegate';
import ContractCallSourceType from './ContractCallSourceType';
import MpcContractCallSource from './MpcContractCallSource';
import SafeContractCallSource from './SafeContractCallSource';

/**
 * The ContractCallSource model module.
 * @module model/ContractCallSource
 * @version 1.0.0
 */
class ContractCallSource {
    /**
     * Constructs a new <code>ContractCallSource</code>.
     * @alias module:model/ContractCallSource
     * @param {(module:model/MpcContractCallSource|module:model/SafeContractCallSource)} instance The actual instance to initialize ContractCallSource.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (instance instanceof MpcContractCallSource) {
                this.actualInstance = instance;
            } else if(MpcContractCallSource.validateJSON(instance)){
                // plain JS object
                // create MpcContractCallSource from JS object
                this.actualInstance = MpcContractCallSource.constructFromObject(instance);
            } else {
                return;
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into MpcContractCallSource
            errorMessages.push("Failed to construct MpcContractCallSource: " + err)
        }

        try {
            if (instance instanceof SafeContractCallSource) {
                this.actualInstance = instance;
            } else if(SafeContractCallSource.validateJSON(instance)){
                // plain JS object
                // create SafeContractCallSource from JS object
                this.actualInstance = SafeContractCallSource.constructFromObject(instance);
            } else {
                return;
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into SafeContractCallSource
            errorMessages.push("Failed to construct SafeContractCallSource: " + err)
        }

        // if (match > 1) {
        //    throw new Error("Multiple matches found constructing `ContractCallSource` with oneOf schemas MpcContractCallSource, SafeContractCallSource. Input: " + JSON.stringify(instance));
        // } else
        if (match === 0) {
        //    this.actualInstance = null; // clear the actual instance in case there are multiple matches
        //    throw new Error("No match found constructing `ContractCallSource` with oneOf schemas MpcContractCallSource, SafeContractCallSource. Details: " +
        //                    errorMessages.join(", "));
        return;
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>ContractCallSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContractCallSource} obj Optional instance to populate.
     * @return {module:model/ContractCallSource} The populated <code>ContractCallSource</code> instance.
     */
    static constructFromObject(data, obj) {
        return new ContractCallSource(data);
    }

    /**
     * Gets the actual instance, which can be <code>MpcContractCallSource</code>, <code>SafeContractCallSource</code>.
     * @return {(module:model/MpcContractCallSource|module:model/SafeContractCallSource)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>MpcContractCallSource</code>, <code>SafeContractCallSource</code>.
     * @param {(module:model/MpcContractCallSource|module:model/SafeContractCallSource)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = ContractCallSource.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of ContractCallSource from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/ContractCallSource} An instance of ContractCallSource.
     */
    static fromJSON = function(json_string){
        return ContractCallSource.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:model/ContractCallSourceType} source_type
 */
ContractCallSource.prototype['source_type'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
ContractCallSource.prototype['wallet_id'] = undefined;

/**
 * The wallet address.
 * @member {String} address
 */
ContractCallSource.prototype['address'] = undefined;

/**
 * The transaction nonce.
 * @member {Number} nonce
 */
ContractCallSource.prototype['nonce'] = undefined;

/**
 * @member {module:model/CoboSafeDelegate} delegate
 */
ContractCallSource.prototype['delegate'] = undefined;


ContractCallSource.OneOf = ["MpcContractCallSource", "SafeContractCallSource"];

export default ContractCallSource;
