const { app } = require("./app");
const routes = require("../src/routes/enemy");

const serverPort = process.env.PORT || 4000;

app.use("/", routes);
app.listen(serverPort, () => {
  console.log("server running on port %d", serverPort);
});
