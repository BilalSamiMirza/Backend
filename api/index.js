// // 1️⃣ Import packages
// const express = require("express");
// const mongoose = require("mongoose");
// require("dotenv").config(); // For environment variables

// // 2️⃣ Create app
// const app = express();

// // 3️⃣ Middleware
// app.use(express.json()); // To parse JSON requests

// // 4️⃣ Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.log("❌ DB Error:", err));

// // 5️⃣ Import Model
// const Inquiry = require("./models/Inquiry");

// // 6️⃣ Create POST Route
// app.post("/api/inquiry", async (req, res) => {
//   try {
//     const newInquiry = new Inquiry(req.body);
//     await newInquiry.save();

//     res.status(201).json({
//       message: "✅ Thank you! We received your information and will reply soon."
//     });

//   } catch (error) {
//     res.status(500).json({ message: "❌ Something went wrong." });
//   }
// });

// // 7️⃣ Start Server
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });












// // 1️⃣ Import packages
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");            // ✅ Add CORS
// require("dotenv").config();              // Load .env variables
// const path = require("path");

// // 2️⃣ Create app
// const app = express();

// // 3️⃣ Middleware
// app.use(cors({ origin: "http://localhost:5173" })); // ✅ Allow React dev server
// app.use(express.json()); // Parse JSON requests

// // 4️⃣ Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.log("❌ DB Error:", err));

// // 5️⃣ Import Model
// const Inquiry = require("./models/Inquiry");

// app.post("/api/inquiry", async (req, res) => {
//   console.log("Received form data:", req.body);
//   try {
//     const newInquiry = new Inquiry(req.body);
//     await newInquiry.save();
//     res.status(201).json({
//       message: "✅ Thank you! We received your information and will reply soon."
//     });
//   } catch (error) {
//     console.log("Error saving inquiry:", error); // <-- check exact Mongoose error
//     res.status(500).json({ message: error.message }); // <-- show real error
//   }
// });

// // Optional: Serve React build in production (no CORS needed)
// app.use(express.static(path.join(__dirname, "build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

// // 7️⃣ Start Server
// const PORT = process.env.PORT || 5002;

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });





















// // server.js
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();
// const path = require("path");

// const app = express();

// // Middleware
// app.use(cors({ origin: "http://localhost:5173" })); // allow your React dev server
// app.use(express.json()); // parse JSON

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.log("❌ DB Error:", err));

// // Model
// const Inquiry = require("./models/Inquiry");

// // POST route
// app.post("/api/inquiry", async (req, res) => {
//   console.log("Received form data:", req.body);

//   try {
//     const newInquiry = new Inquiry(req.body);
//     const saved = await newInquiry.save();
//     console.log("Saved inquiry:", saved);

//     res.status(201).json({
//       message: "✅ Thank you! We received your information and will reply soon."
//     });
//   } catch (error) {
//     console.log("Error saving inquiry:", error);
//     res.status(500).json({ message: error.message });
//   }
// });

// // Optional: serve React build in production
// // app.use(express.static(path.join(__dirname, "build")));
// app.get("*", (req, res) => {
//   // res.sendFile(path.join(__dirname, "build", "index.html"));
// });

// // Start server
// const PORT = process.env.PORT || 5004;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// app.get("/", (req, res) => {
//   res.send("Portfolio backend is running 🚀");
// });










// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.log("❌ DB Error:", err));

// // Model
// const Inquiry = require("./models/Inquiry");

// // Test route
// app.get("/", (req, res) => {
//   res.send("Portfolio backend is running 🚀");
// });

// // POST route
// app.post("/api/inquiry", async (req, res) => {
//   console.log("Received form data:", req.body);

//   try {
//     const newInquiry = new Inquiry(req.body);
//     const saved = await newInquiry.save();

//     res.status(201).json({
//       message: "✅ Thank you! We received your information and will reply soon."
//     });
//   } catch (error) {
//     console.log("Error saving inquiry:", error);
//     res.status(500).json({ message: error.message });
//   }
// });

// // Start server
// const PORT = process.env.PORT || 5004;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));










const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const Inquiry = require("../models/Inquiry");

app.get("/", (req,res)=>{
  res.send("Portfolio backend is running 🚀");
});

app.post("/api/inquiry", async(req,res)=>{
  try{
    const newInquiry = new Inquiry(req.body);
    await newInquiry.save();

    res.status(201).json({
      message:"Thank you! We received your information."
    });

  }catch(error){
    res.status(500).json({message:error.message});
  }
});

module.exports = app;



