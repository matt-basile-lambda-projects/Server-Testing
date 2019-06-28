// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/testing_server_db.sqlite3'
    },
    useNullAsDefault: true
  }

};
