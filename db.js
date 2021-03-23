mongoose = require("mongoose");
module.exports = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  mongoose.connection.on("error", (err) => {
    throw err;
  });
  mongoose.connection.once("open", () => console.log("connected to mongo"));
};
