const express = require("express");
const app = express();

const cors = require("cors");
const sequelize = require("./config/db");

// connect to db:
sequelize
  .authenticate()
  .then(() => {
    console.log("Database up and running...");
  })
  .catch((error) => console.error(error.message));

app.use(cors());
app.use(express.json({ extended: false }));

// ROUTES
app.use("/notes", require("./routes/notes"));

// sync database:
sequelize
  .sync()
  .then((result) => console.log("Database synced..."))
  .catch((error) => console.error(error.message));

const PORT = process.env.PORT | 5000;
app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
