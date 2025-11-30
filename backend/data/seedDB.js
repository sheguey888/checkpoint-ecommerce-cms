import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/Product.js";
import products from "./seedData.js";
import connectDB from "../config/db.js";

dotenv.config();

const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Product.deleteMany();
    console.log("Products cleared");

    // Insert sample data
    await Product.insertMany(products);
    console.log("Sample products added");

    console.log("Database seeded successfully!");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedDatabase();
