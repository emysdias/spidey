const { app } = require("./app");
const routes = require("../src/routes/enemy");
const mongoose = require("mongoose");

const serverPort = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Connected");
});

mongoose.connection.on("error", (err) => {
  console.log(`Error to connect = ${err}`);
});

app.use("/", routes);
app.listen(serverPort, () => {
  console.log("server running on port %d", serverPort);
});
