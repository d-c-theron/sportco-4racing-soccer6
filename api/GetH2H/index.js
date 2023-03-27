const azure = require("azure-storage");
const { queryEntities } = require("../services/table-services");

module.exports = async function (context, req) {
  try {
    const { id } = context.bindingData;
    var query = new azure.TableQuery().where("PartitionKey eq ?", id.toString()).select("data");
    const result = await queryEntities("h2hs", query);
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
