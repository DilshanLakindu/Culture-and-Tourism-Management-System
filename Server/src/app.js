const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
import fileUpload from "express-fileupload";

const authRoute = require("./api/routes/authRoutes");
import imageUploadRoute from "../../Server/src/api/routes/imageUploadRoute";
import categoryImageRoute from "../../Server/src/api/routes/categoryImageRoute";
import productRoute from "./api/routes/product";
//import categoryRoute from "../../Server/src/api/routes/categoryRoute";
// import productRoute from "../../Server/src/api/routes/productRoute";

const app = express();
app.use(
	cors({
	  credentials: true,
	  origin: true,
	})
  );
  app.use(express.urlencoded({ extended: true }));
  app.set("trust proxy", 1);
  app.use(
	fileUpload({
	  useTempFiles: true,
	})
  );
dotenv.config();

app.use(cors());

// creating the connection with database
mongoose
	.connect(process.env.URL)
	.then(() => {
		console.log("Database Connection Succeeded 🔥");
	})
	.catch((err) => {
		console.log("Database Connection Failed ❌ - Error: " + err);
	});

// middleware
app.use(express.json());
app.use("/api/auth", authRoute);
// app.use(categoryRoute); 
app.use(productRoute);
app.use("/api", imageUploadRoute); 
app.use("/api", categoryImageRoute); 

//upload image to cloudinary
// app.use( "/api/categoryImageUpload",router); 
// app.use( categoryImageRoute); 


// creating the port connection with the backend server
const port = process.env.PORT || 5000;

app.listen(process.env.PORT || 5000, () => {
	console.log(
		"Server listening on port " + process.env.PORT || 5000,
		"🔥",
	);
});
