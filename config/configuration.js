const config = {
  app:{
    port : process.env.PORT || 300
  },

  db: {
    host:'localhost',
    port:27017,
    name: 'db'
  }
};

module.exports = config;
