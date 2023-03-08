const azure = require("azure-storage");
const { queryEntities } = require("../services/table-services");

module.exports = async function (context, req) {
  try {
    const { startsWith, endsWith } = context.bindingData;
    // eg S6 and S7
    var query = new azure.TableQuery().where("PartitionKey ge ?", startsWith).and("PartitionKey lt ?", endsWith);
    const result = await queryEntities("pools", query);
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
