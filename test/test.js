'use strict'
var fs = require('fs');
var expect = require('expect');
var IBProto = require('../protobuf-ib.js');

// responses

describe('responses', function () {
  var responseSchema;
  var encodedData;
  var response;
  var responseData;
  
  beforeEach( function () {
  });
  it('should load', function () {
    var IBResponseSchema = IBProto.IBResponseSchema;
  });
  it('accountDownloadEnd', function () {
    responseData = fs.readFileSync('./test/fixtures/res/accountDownloadEnd.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { accountDownloadEnd: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it.skip('accountSummaryEnd', function () {
    responseData = fs.readFileSync('./test/fixtures/res/accountSummaryEnd.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { accountSummaryEnd: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it.skip('accountSummary', function () {
    responseData = fs.readFileSync('./test/fixtures/res/accountSummary.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { accountSummary: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it.skip('bondContractDetails', function () {
    responseData = fs.readFileSync('./test/fixtures/res/bondContractDetails.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { bondContractDetails: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it('commissionReport', function () {
    responseData = fs.readFileSync('./test/fixtures/res/commissionReport.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { commissionReport: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it('contractDetailsEnd', function () {
    responseData = fs.readFileSync('./test/fixtures/res/contractDetailsEnd.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { contractDetailsEnd: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it('contractDetails', function () {
    responseData = fs.readFileSync('./test/fixtures/res/contractDetails.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { contractDetails: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it('deltaNeutralValidation', function () {
    responseData = fs.readFileSync('./test/fixtures/res/deltaNeutralValidation.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { deltaNeutralValidation: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it.skip('displayGroupList', function () {
    responseData = fs.readFileSync('./test/fixtures/res/displayGroupList.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { displayGroupList: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it.skip('displayGroupUpdated', function () {
    responseData = fs.readFileSync('./test/fixtures/res/displayGroupUpdated.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { displayGroupUpdated: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it('execDetailsEnd', function () {
    responseData = fs.readFileSync('./test/fixtures/res/execDetailsEnd.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { execDetailsEnd: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it('execDetails', function () {
    responseData = fs.readFileSync('./test/fixtures/res/execDetails.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { execDetails: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it.skip('fundamentalData', function () {
    responseData = fs.readFileSync('./test/fixtures/res/fundamentalData.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { fundamentalData: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it('historicalData', function () {
    responseData = fs.readFileSync('./test/fixtures/res/historicalData.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { historicalData: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it.skip('isConnected', function () {
    responseData = fs.readFileSync('./test/fixtures/res/isConnected.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { isConnected: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it('marketDataType', function () {
    responseData = fs.readFileSync('./test/fixtures/res/marketDataType.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { marketDataType: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it('nextValidId', function () {
    responseData = fs.readFileSync('./test/fixtures/res/nextValidId.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { nextValidId: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it('openOrder', function () {
    responseData = fs.readFileSync('./test/fixtures/res/openOrder.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { openOrder: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it('orderStatus', function () {
    responseData = fs.readFileSync('./test/fixtures/res/orderStatus.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { orderStatus: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it('positionEnd', function () {
    responseData = fs.readFileSync('./test/fixtures/res/positionEnd.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { positionEnd: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it('position', function () {
    responseData = fs.readFileSync('./test/fixtures/res/position.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { position: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it.skip('realtimeBar', function () {
    responseData = fs.readFileSync('./test/fixtures/res/realtimeBar.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { realtimeBar: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it('scannerDataEnd', function () {
    responseData = fs.readFileSync('./test/fixtures/res/scannerDataEnd.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { scannerDataEnd: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it('scannerData', function () {
    responseData = fs.readFileSync('./test/fixtures/res/scannerData.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { scannerData: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it('scannerParameters', function () {
    responseData = fs.readFileSync('./test/fixtures/res/scannerParameters.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { scannerParameters: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it('error', function () {
    responseData = fs.readFileSync('./test/fixtures/res/svrError.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { error: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it.skip('tickEFP', function () {
    responseData = fs.readFileSync('./test/fixtures/res/tickEFP.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { tickEFP: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it.skip('tickGeneric', function () {
    responseData = fs.readFileSync('./test/fixtures/res/tickGeneric.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { tickGeneric: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it('tickOptionComputation', function () {
    responseData = fs.readFileSync('./test/fixtures/res/tickOptionComputation.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { tickOptionComputation: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it('tickPrice', function () {
    responseData = fs.readFileSync('./test/fixtures/res/tickPrice.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { tickPrice: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it('tickSize', function () {
    responseData = fs.readFileSync('./test/fixtures/res/tickSize.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { tickSize: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it('tickSnapshotEnd', function () {
    responseData = fs.readFileSync('./test/fixtures/res/tickSnapshotEnd.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { tickSnapshotEnd: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it('tickString', function () {
    responseData = fs.readFileSync('./test/fixtures/res/tickString.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { tickString: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it('updateAccountTime', function () {
    responseData = fs.readFileSync('./test/fixtures/res/updateAccountTime.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { updateAccountTime: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it('updateAccountValue', function () {
    responseData = fs.readFileSync('./test/fixtures/res/updateAccountValue.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { updateAccountValue: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it.skip('updateMktDepth', function () {
    responseData = fs.readFileSync('./test/fixtures/res/updateMktDepth.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { updateMktDepth: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it.skip('updateMktDepthL2', function () {
    responseData = fs.readFileSync('./test/fixtures/res/updateMktDepthL2.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { updateMktDepthL2: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it.skip('updateNewsBulletin', function () {
    responseData = fs.readFileSync('./test/fixtures/res/updateNewsBulletin.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { updateNewsBulletin: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it('updatePortfolio', function () {
    responseData = fs.readFileSync('./test/fixtures/res/updatePortfolio.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { updatePortfolio: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });

  it('clientError', function () {
    responseData = fs.readFileSync('./test/fixtures/res/winError.json','utf8');
    responseData = JSON.parse( responseData );
    responseData = { clientError: responseData };
    responseSchema = IBProto.IBResponseSchema;
    encodedData = responseSchema.IBResponse.encode( responseData );
    var decodedData = responseSchema.IBResponse.decode( encodedData );
    expect( decodedData ).toEqual( responseData );
  });
});


// requests
describe('requests', function () {
  var requestSchema;
  var encodedData;
  var request;
  var requestData;
  var validData; // used for partial input cases
  beforeEach( function () {
  });
  it('should load', function () {
    var IBRequestSchema = IBProto.IBRequestSchema;
  });

  it('calculateImpliedVolatility', function () {
    requestData = fs.readFileSync('./test/fixtures/req/calculateImpliedVolatility.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('calculateOptionPrice', function () {
    requestData = fs.readFileSync('./test/fixtures/req/calculateOptionPrice.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('calculateOptionPrice should take partial input', function () {
    requestData = fs.readFileSync('./test/fixtures/req/calculateOptionPricePartial.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    validData = fs.readFileSync('./test/fixtures/req/calculateOptionPriceValid.json', 'utf8');
    validData = JSON.parse( validData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( validData );
  });
  it('cancelCalculateImpliedVolatility', function () {
    requestData = fs.readFileSync('./test/fixtures/req/cancelCalculateImpliedVolatility.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('cancelCalculateOptionPrice', function () {
    requestData = fs.readFileSync('./test/fixtures/req/cancelCalculateOptionPrice.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('cancelHistoricalData', function () {
    requestData = fs.readFileSync('./test/fixtures/req/cancelHistoricalData.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('cancelMktData', function () {
    requestData = fs.readFileSync('./test/fixtures/req/cancelMktData.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('cancelMktDepth', function () {
    requestData = fs.readFileSync('./test/fixtures/req/cancelMktDepth.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('cancelNewsBulletins', function () {
    requestData = fs.readFileSync('./test/fixtures/req/cancelNewsBulletins.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('cancelOrder', function () {
    requestData = fs.readFileSync('./test/fixtures/req/cancelOrder.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('cancelPositions', function () {
    requestData = fs.readFileSync('./test/fixtures/req/cancelPositions.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('cancelRealTimeBars', function () {
    requestData = fs.readFileSync('./test/fixtures/req/cancelRealTimeBars.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('cancelScannerSubscription', function () {
    requestData = fs.readFileSync('./test/fixtures/req/cancelScannerSubscription.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('eConnect', function () {
    requestData = fs.readFileSync('./test/fixtures/req/eConnect.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('eDisconnect', function () {
    requestData = fs.readFileSync('./test/fixtures/req/eDisconnect.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('exerciseOptions', function () {
    requestData = fs.readFileSync('./test/fixtures/req/exerciseOptions.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('isConnected', function () {
    requestData = fs.readFileSync('./test/fixtures/req/isConnected.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('placeOrder', function () {
    requestData = fs.readFileSync('./test/fixtures/req/placeOrder.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('placeOrder should take partial requests', function () {
    requestData = fs.readFileSync('./test/fixtures/req/placeOrderPartial.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    validData = fs.readFileSync('./test/fixtures/req/placeOrderValid.json', 'utf8');
    validData = JSON.parse( validData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( validData );
  });
  it('reqAccountUpdates', function () {
    requestData = fs.readFileSync('./test/fixtures/req/reqAccountUpdates.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('reqAllOpenOrders', function () {
    requestData = fs.readFileSync('./test/fixtures/req/reqAllOpenOrders.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('reqAutoOpenOrders', function () {
    requestData = fs.readFileSync('./test/fixtures/req/reqAutoOpenOrders.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('reqContractDetails', function () {
    requestData = fs.readFileSync('./test/fixtures/req/reqContractDetails.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('reqContractDetails should accept partial request', function () {
    requestData = fs.readFileSync('./test/fixtures/req/reqContractDetailsPartial.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    validData = fs.readFileSync('./test/fixtures/req/reqContractDetailsValid.json', 'utf8');
    validData = JSON.parse( validData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( validData );
  });
  it('reqCurrentTime', function () {
    requestData = fs.readFileSync('./test/fixtures/req/reqCurrentTime.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('reqExecutions', function () {
    requestData = fs.readFileSync('./test/fixtures/req/reqExecutions.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('reqGlobalCancel', function () {
    requestData = fs.readFileSync('./test/fixtures/req/reqGlobalCancel.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('reqHistoricalData', function () {
    requestData = fs.readFileSync('./test/fixtures/req/reqHistoricalData.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('reqIds', function () {
    requestData = fs.readFileSync('./test/fixtures/req/reqIds.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('reqMarketDataType', function () {
    requestData = fs.readFileSync('./test/fixtures/req/reqMarketDataType.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('reqMktData', function () {
    requestData = fs.readFileSync('./test/fixtures/req/reqMktData.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('reqMktData should accept partial request', function () {
    requestData = fs.readFileSync('./test/fixtures/req/reqMktDataConId.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    validData = fs.readFileSync('./test/fixtures/req/reqMktDataValid.json', 'utf8');
    validData = JSON.parse( validData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( validData );
  });
  it('reqMktDepth', function () {
    requestData = fs.readFileSync('./test/fixtures/req/reqMktDepth.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('reqMktDepth should accept partial request', function () {
    requestData = fs.readFileSync('./test/fixtures/req/reqMktDepthPartial.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    validData = fs.readFileSync('./test/fixtures/req/reqMktDepthValid.json', 'utf8');
    validData = JSON.parse( validData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( validData );
  });
  it('reqNewsBulletins', function () {
    requestData = fs.readFileSync('./test/fixtures/req/reqNewsBulletins.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('reqOpenOrders', function () {
    requestData = fs.readFileSync('./test/fixtures/req/reqOpenOrders.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('reqPositions', function () {
    requestData = fs.readFileSync('./test/fixtures/req/reqPositions.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('reqRealTimeBars', function () {
    requestData = fs.readFileSync('./test/fixtures/req/reqRealTimeBars.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('reqScannerParameters', function () {
    requestData = fs.readFileSync('./test/fixtures/req/reqScannerParameters.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('reqScannerSubscription', function () {
    requestData = fs.readFileSync('./test/fixtures/req/reqScannerSubscription.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('serverVersion', function () {
    requestData = fs.readFileSync('./test/fixtures/req/serverVersion.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
  it('setLogLevel', function () {
    requestData = fs.readFileSync('./test/fixtures/req/setLogLevel.json', 'utf8');
    requestData = JSON.parse( requestData );
    requestSchema = IBProto.IBRequestSchema;
    encodedData = requestSchema.IBRequest.encode( requestData );
    var decodedData = requestSchema.IBRequest.decode( encodedData );
    expect( decodedData ).toEqual( requestData );
  });
});
