const dbConnections = [];

module.exports = (dbName) => {
  const db = {
    dbName: dbName,
    isConnected: false,
    connect() {
      dbConnections.push(dbName);
      console.info("подключение к БД - " + dbName);
      this.isConnected = true;
    },
    getAllConnection() {
        return dbConnections.join(' | ')
    }
  };

  return db;
};
