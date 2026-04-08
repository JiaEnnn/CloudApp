const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

// 1. Load Environment Variables
dotenv.config();

<<<<<<< HEAD
const db = require('./config/db'); 
=======
require("./config/firebase");
const sequelize = require("./config/db");

>>>>>>> 201809c4c06e9d8a65c8cec40e80c06ecd077008
const authRoutes = require("./routes/authRoutes");
const habitRoutes = require("./routes/habitRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const app = express();
const PORT = process.env.PORT || 8080;
const admin = require('./config/firebase');

// 4. Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

<<<<<<< HEAD
// Points to your 'public' folder for CSS/JS/Images
//app.use(express.static(path.join(__dirname, "public"))); 
app.use(express.static(path.join(__dirname, '..', 'public')));

// 5. HTML Page Routes
=======
>>>>>>> 201809c4c06e9d8a65c8cec40e80c06ecd077008
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '..', "public", "pages", "index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, '..', "public", "pages", "login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, '..', "public", "pages", "register.html"));
});

<<<<<<< HEAD
app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, '..', "public", "pages", "dashboard.html"));
});

// 6. API Routes
=======
>>>>>>> 201809c4c06e9d8a65c8cec40e80c06ecd077008
app.use("/api/auth", authRoutes);
app.use("/api/habits", habitRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Health Check
app.get("/health", (req, res) => {
  res.status(200).send("Database and Server are healthy");
});

<<<<<<< HEAD
// 7. Start Server
app.listen(PORT, () => {
  console.log(`LifeTrack running at http://localhost:${PORT}`);
});

// const express = require("express");
// const path = require("path");
// const { exec } = require("child_process"); // 1. Added this for auto-opening
// const dotenv = require("dotenv");
// const morgan = require("morgan");
// const cookieParser = require("cookie-parser");

// dotenv.config();

// const authRoutes = require("./routes/authRoutes");
// const habitRoutes = require("./routes/habitRoutes");
// const dashboardRoutes = require("./routes/dashboardRoutes");

// const app = express();
// const PORT = process.env.PORT || 8080;

// app.use(morgan("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "..", "public")));

// // Routes
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "public", "pages", "index.html"));
// });

// app.get("/login", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "public", "pages", "login.html"));
// });

// app.get("/register", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "public", "pages", "register.html"));
// });

// app.get("/dashboard", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "public", "pages", "dashboard.html"));
// });

// app.use("/api/auth", authRoutes);
// app.use("/api/habits", habitRoutes);
// app.use("/api/dashboard", dashboardRoutes);

// app.get("/health", (req, res) => {
//   res.status(200).send("OK");
// });

// // 2. Updated listen function
// app.listen(PORT, () => {
//   console.log(`LifeTrack running on port ${PORT}`);
// });

=======
app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`LifeTrack running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database sync failed:", error);
  });
>>>>>>> 201809c4c06e9d8a65c8cec40e80c06ecd077008
