const path = require("path");
const fs = require("fs");

module.exports = (entity) => {
  const dataFilePath = path.join(__dirname, `${entity}.json`);

  const db = {
    readData() {
      return new Promise((resolve, reject) => {
        fs.readFile(dataFilePath, (err, data) => {
          if (err) {
            if (err.errno === -4058) {
              return resolve([])
            }
            reject(err);
          }
          let result = [];
          if (data) {
            const temp = JSON.parse(data);
            if (Array.isArray(temp)) {
              result = temp;
            } else {
              result = [temp];
            }
          }
          resolve(result);
        });
      });
    },
    writeData: (data) => {
      return new Promise((resolve, reject) => {
        fs.writeFile(dataFilePath, JSON.stringify(data), (err) => {
          if (err) {
            reject(err);
          }
          resolve(true);
        });
      });
    },
    addData: async (data) => {
      const entitiesData = await db.readData();
      return await db.writeData([...entitiesData, data]);
    },
  };

  return db;
};
