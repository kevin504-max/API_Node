const mongoose = require("mongoose");

async function main() {
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(
            "mongodb+srv://kevin:8tlLsQfUtvUqIsRu@cluster0.5hmtw79.mongodb.net/?retryWrites=true&w=majority"
        );

        console.log("Database connected!"); 
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

module.exports = main;