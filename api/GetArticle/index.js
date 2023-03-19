const azure = require("azure-storage");
const { queryEntities } = require("../services/table-services");

module.exports = async function (context, req) {
  try {
    const { article } = context.bindingData;
    var query = new azure.TableQuery().where("PartitionKey eq ?", article);
    const result = await queryEntities("articles", query);
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
