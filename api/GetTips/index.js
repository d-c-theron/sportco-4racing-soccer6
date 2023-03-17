const azure = require("azure-storage");
const { queryEntities } = require("../services/table-services");

module.exports = async function (context, req) {
  try {
    const { pool_id } = context.bindingData;
    let tip_type = "";
    switch (pool_id) {
      case 6:
        tip_type = "s6tips";
        break;
      case 10:
        tip_type = "s10tips";
        break;
      case 13:
        tip_type = "s13tips";
        break;
      case 4:
        tip_type = "s4tips";
        break;
      case 16:
        tip_type = "s13Xtips";
        break;
      default:
        page_name = "Error ";
    }
    var query = new azure.TableQuery();
    const result = await queryEntities(tip_type, query);
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
