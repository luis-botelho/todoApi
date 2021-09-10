const mongoose = require("mongoose");

function Connection(url, user, password, db) {
  mongoose
    .connect(`${url}/${db}`, {
      user: user,
      pass: password,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connection established");
    })
    .catch((error) => {
      console.error("Connection not established", error.message);
    });
}
module.exports = Connection;
