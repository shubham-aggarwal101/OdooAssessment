const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./route/user");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  mongoose.connect("mongodb://localhost/mern-project", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});
