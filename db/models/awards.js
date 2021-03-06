const db = require('../');
const Promise = require('bluebird');

const Awards = db.Model.extend({
  tableName: 'awards',
  awards: function() {
    return this.belongsTo('Awards');
  },
});

module.exports = db.model('Awards', Awards);
