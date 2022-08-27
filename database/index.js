const { client } = require('./client');

exports.db = (query, values = []) =>
  new Promise(async (response, reject) => {
    client
      .query(query, values)
      .then((res) => {
        // client.end();
        response(res.rows);
      })
      .catch((err) => {
        // client.end();
        console.log(error);
        reject(err);
      });
  });

exports.connectDB = async () => {
  try {
    await client
      .connect()
      .then((res) => {
        console.log('DB is connected');
      })
      .catch((err) => {
        process.exit(1);
      });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
