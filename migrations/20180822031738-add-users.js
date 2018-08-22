'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  db.createTable('users', {
    id: { 
      type: 'int',
      unsigned: true,
      primaryKey: true,
      autoIncrement: true,
      length: 11
    },
    name: { 
      type: 'string',
      notNull: true,
      length: 60
    },
    password: { 
      type: 'string',
      notNull: true,
      length: 32
    },
    salt: { 
      type: 'string',
      notNull: true,
      length: 16
    },
    email: { 
      type: 'string',
      notNull: true,
      length: 100
    },
    joined_on: { 
      notNull: true,
      type: 'datetime'
    },
    role: { 
      notNull: true,
      type: 'string',
      length: 2
    },
    status: { 
      notNull: true,
      type: 'boolean',
      defaultValue: true
    },
  }, ()=>{
    console.log('Migration done');
  });
  db.addIndex('users', 'email', ['email'], true, ()=>{
    console.log('Index added');
  });
  db.addIndex('users', 'name', ['name'], false, ()=>{
    console.log('Index added');
  });
};

exports.down = function(db) {
  db.dropTable('users', callback);
};

exports._meta = {
  "version": 1
};
