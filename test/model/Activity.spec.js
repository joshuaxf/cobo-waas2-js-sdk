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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CoboWaas2);
  }
}(this, function(expect, CoboWaas2) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CoboWaas2.Activity();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Activity', function() {
    it('should create an instance of Activity', function() {
      // uncomment below and update the code to test Activity
      //var instance = new CoboWaas2.Activity();
      //expect(instance).to.be.a(CoboWaas2.Activity);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CoboWaas2.Activity();
      //expect(instance).to.be();
    });

    it('should have the property initiator (base name: "initiator")', function() {
      // uncomment below and update the code to test the property initiator
      //var instance = new CoboWaas2.Activity();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new CoboWaas2.Activity();
      //expect(instance).to.be();
    });

    it('should have the property wallet_id (base name: "wallet_id")', function() {
      // uncomment below and update the code to test the property wallet_id
      //var instance = new CoboWaas2.Activity();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new CoboWaas2.Activity();
      //expect(instance).to.be();
    });

    it('should have the property pool_id (base name: "pool_id")', function() {
      // uncomment below and update the code to test the property pool_id
      //var instance = new CoboWaas2.Activity();
      //expect(instance).to.be();
    });

    it('should have the property token_id (base name: "token_id")', function() {
      // uncomment below and update the code to test the property token_id
      //var instance = new CoboWaas2.Activity();
      //expect(instance).to.be();
    });

    it('should have the property staking_id (base name: "staking_id")', function() {
      // uncomment below and update the code to test the property staking_id
      //var instance = new CoboWaas2.Activity();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new CoboWaas2.Activity();
      //expect(instance).to.be();
    });

    it('should have the property transaction_ids (base name: "transaction_ids")', function() {
      // uncomment below and update the code to test the property transaction_ids
      //var instance = new CoboWaas2.Activity();
      //expect(instance).to.be();
    });

    it('should have the property timeline (base name: "timeline")', function() {
      // uncomment below and update the code to test the property timeline
      //var instance = new CoboWaas2.Activity();
      //expect(instance).to.be();
    });

    it('should have the property fee (base name: "fee")', function() {
      // uncomment below and update the code to test the property fee
      //var instance = new CoboWaas2.Activity();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new CoboWaas2.Activity();
      //expect(instance).to.be();
    });

    it('should have the property created_time (base name: "created_time")', function() {
      // uncomment below and update the code to test the property created_time
      //var instance = new CoboWaas2.Activity();
      //expect(instance).to.be();
    });

    it('should have the property updated_time (base name: "updated_time")', function() {
      // uncomment below and update the code to test the property updated_time
      //var instance = new CoboWaas2.Activity();
      //expect(instance).to.be();
    });

  });

}));