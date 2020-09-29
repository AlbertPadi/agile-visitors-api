import SubstationService from '../services/Substation.service';
import Response from '../utils/response';
import querystringConverterHelper from '../utils/querystringConverterHelper';

class SubstationController {

  static async getAll(req, res) {
    const { query } = req;

    let { where, limit, offset, order } = querystringConverterHelper.parseQuery(query);

    try {
      const { rows, count, total } = await SubstationService.getAll({
        criterions: {
          where,
          limit,
          offset,
          order,
        }
      })

      return res.json(Response.get('Substation list', rows, 200, { count, total, offset }));
    } catch (error) {
      return res.status(500).json(Response.get('Something goes wrong', error, 500));
    }
  }
}

export default SubstationController;