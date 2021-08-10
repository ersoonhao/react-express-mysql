//https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor
// max: maximum number of connection in pool
// min: minimum number of connection in pool
// idle: maximum time, in milliseconds, that a connection can be idle before being released
// acquire: maximum time, in milliseconds, that pool will try to get connection before throwing error

// module.exports = {
//     HOST: "localhost",
//     USER: "root",
//     PASSWORD: "",
//     DB: "fyp",
//     dialect: "mysql",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000, 
//       idle: 10000
//     }
//   };



  module.exports = {
    HOST: "oio.cyxsqv5x99m7.us-east-2.rds.amazonaws.com",
    USER: "admin",
    PASSWORD: "regopq==22858",
    DB: "fyp",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000, 
      idle: 10000
    }
  };

