const azure = require("azure-storage");
const { queryEntities } = require("../services/table-services");

module.exports = async function (context, req) {
  try {
    const { pool_id } = context.bindingData;
    let result_type = "";
    let cut_off = "";
    let d = new Date();
    switch (pool_id) {
      case 6:
        result_type = "s6results";
        d.setDate(d.getDate() - 10);
        break;
      case 10:
        result_type = "s10results";
        d.setDate(d.getDate() - 10);
        break;
      case 13:
        result_type = "s13results";
        d.setDate(d.getDate() - 30);
        break;
      case 4:
        result_type = "s4results";
        d.setDate(d.getDate() - 10);
        break;
      case 16:
        result_type = "s13Xresults";
        d.setDate(d.getDate() - 40);
        break;
      case 12:
        result_type = "megastrikeresults";
        d.setDate(d.getDate() - 30);
        break;
      default:
        page_name = "Error ";
    }
    cut_off = d.toISOString().split('T')[0];
    var query = new azure.TableQuery().where("RowKey ge ?", cut_off);
    const result = await queryEntities(result_type, query);
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
