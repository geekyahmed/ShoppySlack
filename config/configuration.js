const config = {
  app:{
    port : process.env.PORT || 8000
  },

  db: {
    host:'localhost',
    port:27017,
    name: 'shoppyslack'
  },

  globalVariables: (req, res, next)=>{

  }
};

module.exports = config;
