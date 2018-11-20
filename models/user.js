'use strict';

const moment = require('moment');

const {
  BadRequestError,
  InvalidModelArgumentsError,
  NoRecordFoundError,
} = require('../exceptions');

function User(code, name, email, password, salt, joinedOn, role) {
  this.code = code || '';
  this.name = name || '';
  this.email = email || '';
  this.password = password || '';
  this.salt = salt || '';
  this.joinedOn = joinedOn || moment.utc().format('YYYY-MM-DD HH:mm:ss');
  this.role = role || 'user';
}

function Contact(userId, number, type, areaCode, countryId) {
  this.userId = userId;
  this.number = number;
  this.type = type;
  this.areaCode = areaCode;
  this.countryId = countryId;
}

User.prototype.get = function(code, db) {
  return new Promise((resolve, reject) => {
    db.connect();
    db.query(`select * from user where code='${code}'`, (error, results) => {
      if (error || results.length == 0) {
        reject(new NoRecordFoundError('No user found.'));
      } else {
        const { code, name, email, joinedOn } = results[0];
        const user = new User(code, name, email, '', '', joinedOn);

        db.query(
          `select user_id as userId, number, type, area_code as areaCode, country_id as countryId from user_contact where user_id='${code}' and status=1`,
          (error, results) => {
            db.end();
            if (error) {
              reject(new NoRecordFoundError('No user found.'));
            } else {
              const contacts = results.map(contact => {
                const { userId, number, type, areaCode, countryId } = contact;
                return new Contact(userId, number, type, areaCode, countryId);
              });
              resolve({ user, contacts });
            }
          }
        );
      }
    });
  });
};

User.prototype.add = function(user, db) {
  return new Promise((resolve, reject) => {
    if (user instanceof User) {
      Object.keys(user).forEach(function(key, index) {
        if (!user[key]) {
          reject(
            new InvalidModelArgumentsError(
              'Not all required fields have a value.'
            )
          );
        }
      });

      db.connect();
      const { code, name, email, password, salt, joinedOn, role } = user;
      db.query(
        `insert into user(code, name, email, password, salt, joined_on, role)
         values('${code}', '${name}', '${email}', '${password}', '${salt}', '${joinedOn}', '${role}')`,
        error => {
          db.end();
          if (error) {
            reject(new BadRequestError('Invalide user data.'));
          } else {
            resolve(new User(code, name, email));
          }
        }
      );
    } else {
      reject(new BadRequestError('Invalide user data.'));
    }
  });
};

User.prototype.delete = function(code, db) {
  return new Promise((resolve, reject) => {
    db.connect();
    db.query(`update user set status=0 where code=${code}`, error => {
      if (error) {
        reject(new BadRequestError('Deleting user failed.'));
      } else {
        resolve('User deleted.');
      }
    });
  });
};

Contact.prototype.add = function(contact, db) {
  return new Promise((resolve, reject) => {
    if (contact instanceof Contact) {
      const { userId, number, type, areaCode, countryId } = contact;
      db.connect();
      db.query(
        `insert into user_contact(user_id, number, type, area_code, country_id) values(${userId}, '${number}', '${type}', '${areaCode}', ${countryId})`,
        error => {
          db.end();
          if (error) {
            reject(new BadRequestError('Invalide user contact data.'));
          } else {
            resolve(new Contact(userId, number, type, areaCode, countryId));
          }
        }
      );
    } else {
      reject(new BadRequestError('Invalide user contact data.'));
    }
  });
};

Contact.prototype.update = function(id, contact, db) {
  return new Promise((resolve, reject) => {
    if (contact instanceof Contact) {
      const { userId, number, type, areaCode, countryId } = contact;
      db.connect();
      db.query(
        `update user_contact set number='${number}', type='${type}', area_code='${areaCode}', country_id=${countryId} where id=${id}`,
        error => {
          db.end();
          if (error) {
            reject(new BadRequestError('Invalide user contact data.'));
          } else {
            resolve(new Contact(userId, number, type, areaCode, countryId));
          }
        }
      );
    } else {
      reject(new BadRequestError('Invalide user contact data.'));
    }
  });
};

Contact.prototype.delete = function(id, db) {
  return new Promise((resolve, reject) => {
    db.connect();
    db.query(`update user_contact set status=0 where id=${id}`, error => {
      if (error) {
        reject(new BadRequestError('Contact deleting failed.'));
      } else {
        resolve('Contact deleted.');
      }
    });
  });
};

module.exports = {
  User,
  Contact,
};