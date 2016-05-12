var fs = require('fs');
var protobuf = require('protocol-buffers');
var resolve  = require('resolve-protobuf-schema');

// responses
var accountDownloadEndSchema =
  protobuf(resolve.sync(__dirname + '/schema/res/accountDownloadEnd.proto' ));

var accountSummaryEndSchema =
  protobuf(resolve.sync(__dirname + '/schema/res/accountSummaryEnd.proto' ));

var commissionReportSchema =
  protobuf(resolve.sync(__dirname + '/schema/res/commissionReport.proto' ));

var contractDetailsEndSchema =
  protobuf(resolve.sync(__dirname + '/schema/res/contractDetailsEnd.proto' ));

var contractDetailsSchema =
  protobuf(resolve.sync(__dirname + '/schema/res/contractDetails.proto' ));

var contractSchema =
  protobuf(resolve.sync(__dirname + '/schema/res/contract.proto' ));

var deltaNeutralValidationSchema =
  protobuf(resolve.sync(__dirname + '/schema/res/deltaNeutralValidation.proto' ));

var execDetailsEndSchema =
  protobuf(resolve.sync(__dirname + '/schema/res/execDetailsEnd.proto' ));

var execDetailsSchema =
  protobuf(resolve.sync(__dirname + '/schema/res/execDetails.proto' ));

var executionSchema =
  protobuf(resolve.sync(__dirname + '/schema/res/execution.proto' ));

var historicalDataSchema =
  protobuf(resolve.sync(__dirname + '/schema/res/historicalData.proto' ));

var marketDataTypeSchema =
  protobuf(resolve.sync(__dirname + '/schema/res/marketDataType.proto' ));

var nextValidIdSchema =
  protobuf(resolve.sync(__dirname + '/schema/res/nextValidId.proto' ));

var openOrderSchema =
  protobuf(resolve.sync(__dirname + '/schema/res/openOrder.proto' ));

var orderSchema =
  protobuf(resolve.sync(__dirname + '/schema/res/order.proto' ));

var IBResponseSchema =
  protobuf(resolve.sync(__dirname + '/schema/res/IBResponse.proto' ));

// requests

var calculateImpliedVolatilitySchema =
  protobuf(resolve.sync(__dirname + '/schema/req/calculateImpliedVolatility.proto' ));
var calculateOptionPriceSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/calculateOptionPrice.proto' ));
var cancelCalculateImpliedVolatilitySchema =
  protobuf(resolve.sync(__dirname + '/schema/req/cancelCalculateImpliedVolatility.proto' ));
var cancelCalculateOptionPriceSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/cancelCalculateOptionPrice.proto' ));
var cancelHistoricalDataSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/cancelHistoricalData.proto' ));
var cancelMktDataSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/cancelMktData.proto' ));
var cancelMktDepthSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/cancelMktDepth.proto' ));
var cancelNewsBulletinsSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/cancelNewsBulletins.proto' ));
var cancelOrderSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/cancelOrder.proto' ));
var cancelPositionsSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/cancelPositions.proto' ));
var cancelRealTimeBarsSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/cancelRealTimeBars.proto' ));
var cancelScannerSubscriptionSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/cancelScannerSubscription.proto' ));
var eConnectSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/eConnect.proto' ));
var eDisconnectSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/eDisconnect.proto' ));
var exerciseOptionsSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/exerciseOptions.proto' ));
var isConnectedSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/isConnected.proto' ));
var placeOrderSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/placeOrder.proto' ));
var reqAccountUpdatesSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/reqAccountUpdates.proto' ));
var reqAllOpenOrdersSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/reqAllOpenOrders.proto' ));
var reqAutoOpenOrdersSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/reqAutoOpenOrders.proto' ));
var reqContractDetailsSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/reqContractDetails.proto' ));
var reqCurrentTimeSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/reqCurrentTime.proto' ));
var reqExecutionsSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/reqExecutions.proto' ));
var reqGlobalCancelSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/reqGlobalCancel.proto' ));
var reqHistoricalDataSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/reqHistoricalData.proto' ));
var reqIdsSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/reqIds.proto' ));
var reqMarketDataTypeSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/reqMarketDataType.proto' ));
var reqMktDataSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/reqMktData.proto' ));
var reqMktDepthSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/reqMktDepth.proto' ));
var reqNewsBulletinsSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/reqNewsBulletins.proto' ));
var reqOpenOrdersSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/reqOpenOrders.proto' ));
var reqPositionsSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/reqPositions.proto' ));
var reqRealTimeBarsSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/reqRealTimeBars.proto' ));
var reqScannerParametersSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/reqScannerParameters.proto' ));
var reqScannerSubscriptionSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/reqScannerSubscription.proto' ));
var serverVersionSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/serverVersion.proto' ));
var setLogLevelSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/setLogLevel.proto' ));

var IBRequestSchema =
  protobuf(resolve.sync(__dirname + '/schema/req/IBRequest.proto' ));

module = module.exports = {
  accountDownloadEndSchema: accountDownloadEndSchema,
  accountSummaryEndSchema: accountSummaryEndSchema,
  commissionReportSchema: commissionReportSchema,
  contractDetailsEndSchema: contractDetailsEndSchema,
  contractDetailsSchema: contractDetailsSchema,
  contractSchema: contractSchema,
  deltaNeutralValidationSchema: deltaNeutralValidationSchema,
  execDetailsEndSchema: execDetailsEndSchema,
  execDetailsSchema: execDetailsSchema,
  executionSchema: executionSchema,
  historicalDataSchema: historicalDataSchema,
  marketDataTypeSchema: marketDataTypeSchema,
  nextValidIdSchema: nextValidIdSchema,
  openOrderSchema: openOrderSchema,
  orderSchema: orderSchema,
  IBResponseSchema: IBResponseSchema,

  calculateImpliedVolatilitySchema: calculateImpliedVolatilitySchema,
  calculateOptionPriceSchema: calculateOptionPriceSchema,
  cancelCalculateImpliedVolatilitySchema: cancelCalculateImpliedVolatilitySchema,
  cancelCalculateOptionPriceSchema: cancelCalculateOptionPriceSchema,
  cancelHistoricalDataSchema: cancelHistoricalDataSchema,
  cancelMktDataSchema: cancelMktDataSchema,
  cancelMktDepthSchema: cancelMktDepthSchema,
  cancelNewsBulletinsSchema: cancelNewsBulletinsSchema,
  cancelOrderSchema: cancelOrderSchema,
  cancelPositionsSchema: cancelPositionsSchema,
  cancelRealTimeBarsSchema: cancelRealTimeBarsSchema,
  cancelScannerSubscriptionSchema: cancelScannerSubscriptionSchema,
  eConnectSchema: eConnectSchema,
  eDisconnectSchema: eDisconnectSchema,
  exerciseOptionsSchema: exerciseOptionsSchema,
  isConnectedSchema: isConnectedSchema,
  placeOrderSchema: placeOrderSchema,
  reqAccountUpdatesSchema: reqAccountUpdatesSchema,
  reqAllOpenOrdersSchema: reqAllOpenOrdersSchema,
  reqAutoOpenOrdersSchema: reqAutoOpenOrdersSchema,
  reqContractDetailsSchema: reqContractDetailsSchema,
  reqCurrentTimeSchema: reqCurrentTimeSchema,
  reqExecutionsSchema: reqExecutionsSchema,
  reqGlobalCancelSchema: reqGlobalCancelSchema,
  reqHistoricalDataSchema: reqHistoricalDataSchema,
  reqIdsSchema: reqIdsSchema,
  reqMarketDataTypeSchema: reqMarketDataTypeSchema,
  reqMktDataSchema: reqMktDataSchema,
  reqMktDepthSchema: reqMktDepthSchema,
  reqNewsBulletinsSchema: reqNewsBulletinsSchema,
  reqOpenOrdersSchema: reqOpenOrdersSchema,
  reqPositionsSchema: reqPositionsSchema,
  reqRealTimeBarsSchema: reqRealTimeBarsSchema,
  reqScannerParametersSchema: reqScannerParametersSchema,
  reqScannerSubscriptionSchema: reqScannerSubscriptionSchema,
  serverVersionSchema: serverVersionSchema,
  setLogLevelSchema: setLogLevelSchema,
  IBRequestSchema: IBRequestSchema
};
