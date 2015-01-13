var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',

  initialize: function(){
    this.on('creating', function(model, attrs, options){
      console.log('model in user model: ', model.get('password'));
      var password = model.get('password');
      bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(password, salt, function(err, hash){
        }, function(err, encrypt){
          model.set('password', encrypt);
          model.set('salt', salt);
          var username = model.get('username');
          model.set('username', username);
          // console.log("Encrypted!!!!!!!!!!!!!!!!!!!!!!!!")
          // console.log(username);
          console.log('encrypt: ', encrypt);
          console.log('encrypted password: ', model.get('password'));
        })
      })
      //model.get('password')
      //model.set('hashed password')
    })
  }

});

module.exports = User;
