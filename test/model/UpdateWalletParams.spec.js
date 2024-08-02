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
    instance = new CoboWaas2.UpdateWalletParams();
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

  describe('UpdateWalletParams', function() {
    it('should create an instance of UpdateWalletParams', function() {
      // uncomment below and update the code to test UpdateWalletParams
      //var instance = new CoboWaas2.UpdateWalletParams();
      //expect(instance).to.be.a(CoboWaas2.UpdateWalletParams);
    });

    it('should have the property wallet_type (base name: "wallet_type")', function() {
      // uncomment below and update the code to test the property wallet_type
      //var instance = new CoboWaas2.UpdateWalletParams();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CoboWaas2.UpdateWalletParams();
      //expect(instance).to.be();
    });

    it('should have the property apikey (base name: "apikey")', function() {
      // uncomment below and update the code to test the property apikey
      //var instance = new CoboWaas2.UpdateWalletParams();
      //expect(instance).to.be();
    });

    it('should have the property secret (base name: "secret")', function() {
      // uncomment below and update the code to test the property secret
      //var instance = new CoboWaas2.UpdateWalletParams();
      //expect(instance).to.be();
    });

    it('should have the property passphrase (base name: "passphrase")', function() {
      // uncomment below and update the code to test the property passphrase
      //var instance = new CoboWaas2.UpdateWalletParams();
      //expect(instance).to.be();
    });

    it('should have the property memo (base name: "memo")', function() {
      // uncomment below and update the code to test the property memo
      //var instance = new CoboWaas2.UpdateWalletParams();
      //expect(instance).to.be();
    });

    it('should have the property account_identify (base name: "account_identify")', function() {
      // uncomment below and update the code to test the property account_identify
      //var instance = new CoboWaas2.UpdateWalletParams();
      //expect(instance).to.be();
    });

    it('should have the property ga_code (base name: "ga_code")', function() {
      // uncomment below and update the code to test the property ga_code
      //var instance = new CoboWaas2.UpdateWalletParams();
      //expect(instance).to.be();
    });

    it('should have the property main_wallet_id (base name: "main_wallet_id")', function() {
      // uncomment below and update the code to test the property main_wallet_id
      //var instance = new CoboWaas2.UpdateWalletParams();
      //expect(instance).to.be();
    });

  });

}));