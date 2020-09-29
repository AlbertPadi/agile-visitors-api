import Substation from '../models/Substation';

class SubstationService {

  static async getAll(params) {
    const { criterions } = params;

    try {
      const { rows } = await Substation.findAndCountAll({ ...criterions });
      return { rows, count: rows.length };
    } catch (error) {
      throw error;
    }
  }

}

export default SubstationService;