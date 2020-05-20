const config = {
  app:{
    port : process.env.PORT || 8000
  },
//Replace With Your Config 
  db: {
    host:'localhost',
    port:27017,
    name: 'shoppyslack'
  },
};

module.exports = config;
