const express = require("express");
const dotenv = require("dotenv").config();
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");

const PORT = process.env.PORT || 5000;

// expressapp
const app = express();

// middleware
app.use(errorHandler);
app.use(express.json());

// routes
app.use("/api/contacts", contactRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
