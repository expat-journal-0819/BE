const server = require("./api/server");

const port = process.env.PORT || 5555;

server.listen(port, () => {
  console.log(`sever up and running on port ${port}`);
});
