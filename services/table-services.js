var azure = require('azure-storage');
// var tableSvc = azure.createTableService('sportco4racingsocc4423de', process.env.AZURE_STORAGE_ACCESS_KEY);
var tableSvc = azure.createTableService('sportco4racingsocc4423de', "BgiQF3psnu3JvhFQr0hQEAd84CqetQQbojnp7Gqit4PYs1HexlZ4+8fLV81xzgTdEITrh4tN0+f3+AStkQdzdg==");

const queryEntities = (tableName, query) => {
    return new Promise((resolve, reject) => {
      tableSvc.queryEntities(
        tableName,
        query,
        null,
        { payloadFormat: "application/json;odata=nometadata" },
        function (error, result, response) {
          if (error) {
            reject(error);
          }
  
          resolve(response.body);
        }
      );
    });
  };
  
  exports.queryEntities = queryEntities;