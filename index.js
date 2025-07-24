const app = require("./app");
const config = require("dotenv").config;

config();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
