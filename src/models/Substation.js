import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Substation = sequelize.define('substation', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.TEXT
  }
}, {});

export default Substation;