// import mongoose from 'mongoose';

import { createConnection } from 'typeorm';
// import mongoConfig from '../config/mongo';

// import User from '../app/models/Users';
// import File from '../app/models/File';
// import Appointment from '../app/models/Appointment';

// const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
    // this.mongo();
  }

  init(): void {
    createConnection();
    // this.connection = new Sequelize(databaseConfig);
    // models
    //   .map(model => model.init(this.connection))
    //   .map(model => model.associate && model.associate(this.connection.models));
  }

  // mongo(): void {
  // mongoose.connect(mongoConfig.url, mongoConfig.options);
  // }
}

export default new Database();