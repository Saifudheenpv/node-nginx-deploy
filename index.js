const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("🚀 Hello from Node.js with Nginx Reverse Proxy + CI/CD + SSL!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
