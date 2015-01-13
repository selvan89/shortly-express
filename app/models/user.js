var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',

  initialize: function(){
    // this.on('creating', function(model, attrs, options){
    //   model.get('username', )
    //   //model.get('password')
    //   //model.set('hashed password')
    // })
  }

});

module.exports = User;
