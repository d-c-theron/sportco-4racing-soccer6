const azure = require("azure-storage");
const { queryEntities } = require("../services/table-services");

module.exports = async function (context, req) {
  try {
    var query = new azure.TableQuery().select("PartitionKey", "RowKey", "title", "author", "strap_line");
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
