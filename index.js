const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");

const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");
const bookRoutes = require("./routes/book.routes");
const { notFound, errorHandler } = require("./middleware/error.middleware");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Book Catalog API Running" });
});

app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));