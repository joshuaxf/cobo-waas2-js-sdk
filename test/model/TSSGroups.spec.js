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
    instance = new CoboWaas2.TSSGroups();
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

  describe('TSSGroups', function() {
    it('should create an instance of TSSGroups', function() {
      // uncomment below and update the code to test TSSGroups
      //var instance = new CoboWaas2.TSSGroups();
      //expect(instance).to.be.a(CoboWaas2.TSSGroups);
    });

    it('should have the property tss_key_share_group_id (base name: "tss_key_share_group_id")', function() {
      // uncomment below and update the code to test the property tss_key_share_group_id
      //var instance = new CoboWaas2.TSSGroups();
      //expect(instance).to.be();
    });

    it('should have the property curve (base name: "curve")', function() {
      // uncomment below and update the code to test the property curve
      //var instance = new CoboWaas2.TSSGroups();
      //expect(instance).to.be();
    });

  });

}));