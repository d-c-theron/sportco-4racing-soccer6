const azure = require("azure-storage");
const { queryEntities } = require("../../services/table-services");

module.exports = async function (context, req) {
  try {
    var query = new azure.TableQuery().where("PartitionKey eq ?", "PoolOfTheDay");
    console.log("query", query);
    const result = await queryEntities("articles", query);
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
