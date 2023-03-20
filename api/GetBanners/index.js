const azure = require("azure-storage");
const { queryEntities } = require("../services/table-services");

module.exports = async function (context, req) {
  try {
    var query = new azure.TableQuery().select("PartitionKey", "url", "pointer")
    console.log("query", query);
    const result = await queryEntities("banners", query);
    console.log("result", result);
    context.res = {
      body: result,
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: error.message,
    };
  }
};