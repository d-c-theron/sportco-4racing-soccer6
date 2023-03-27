const azure = require("azure-storage");
const { queryEntities } = require("../services/table-services");

module.exports = async function (context, req) {
  try {
    const { id } = context.bindingData;
    var query = new azure.TableQuery().where("PartitionKey eq ?", id.toString()).select("base64");
    const result = await queryEntities("logos", query);
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
