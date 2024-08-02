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


import {ApiClient, Env} from "../../src/index.js";

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
    var apiClient = new ApiClient()
    apiClient.setEnv(new Env("https://api[.xxx].cobo.com/v2"));
    apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
    instance = new CoboWaas2.DevelopersWebhooksApi(apiClient);
  });

  describe('DevelopersWebhooksApi', function() {
    describe('createWebhookEndpoint', function() {
      it('should call createWebhookEndpoint successfully', function() {
        //uncomment below and update the code to test createWebhookEndpoint
        //instance.createWebhookEndpoint().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('getWebhookEndpointById', function() {
      it('should call getWebhookEndpointById successfully', function() {
        //uncomment below and update the code to test getWebhookEndpointById
        //instance.getWebhookEndpointById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('getWebhookEventById', function() {
      it('should call getWebhookEventById successfully', function() {
        //uncomment below and update the code to test getWebhookEventById
        //instance.getWebhookEventById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('listWebhookEndpoints', function() {
      it('should call listWebhookEndpoints successfully', function() {
        //uncomment below and update the code to test listWebhookEndpoints
        //instance.listWebhookEndpoints().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('listWebhookEventDefinitions', function() {
      it('should call listWebhookEventDefinitions successfully', function() {
        //uncomment below and update the code to test listWebhookEventDefinitions
        //instance.listWebhookEventDefinitions().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('listWebhookEventLogs', function() {
      it('should call listWebhookEventLogs successfully', function() {
        //uncomment below and update the code to test listWebhookEventLogs
        //instance.listWebhookEventLogs().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('listWebhookEvents', function() {
      it('should call listWebhookEvents successfully', function() {
        //uncomment below and update the code to test listWebhookEvents
        //instance.listWebhookEvents().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('retryWebhookEventById', function() {
      it('should call retryWebhookEventById successfully', function() {
        //uncomment below and update the code to test retryWebhookEventById
        //instance.retryWebhookEventById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('updateWebhookEndpointById', function() {
      it('should call updateWebhookEndpointById successfully', function() {
        //uncomment below and update the code to test updateWebhookEndpointById
        //instance.updateWebhookEndpointById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
  });

}));