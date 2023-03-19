const azure = require("azure-storage");
const { queryEntities } = require("../services/table-services");

module.exports = async function (context, req) {
  try {
    var query = new azure.TableQuery().where("RowKey eq ?", "form-guide");;
    const result = await queryEntities("blobs", query);
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