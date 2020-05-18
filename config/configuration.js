const config = {
  app:{
    port : process.env.PORT || 8000
  },

  db: {
    host:'localhost',
    port:27017,
    name: 'shoppyslack'
  },
};

module.exports = config;
