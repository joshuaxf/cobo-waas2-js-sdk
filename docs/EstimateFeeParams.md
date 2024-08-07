# CoboWaas2.EstimateFeeParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **String** | The request ID that is used to track a transaction request. The request ID is provided by you and must be unique within your organization. | 
**request_type** | [**EstimateFeeRequestType**](EstimateFeeRequestType.md) |  | 
**source** | [**ContractCallSource**](ContractCallSource.md) |  | 
**token_id** | **String** | The token ID of the transferred token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens). | 
**destination** | [**ContractCallDestination**](ContractCallDestination.md) |  | 
**fee_type** | [**FeeType**](FeeType.md) |  | [optional] 
**chain_id** | **String** | The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains). | 


