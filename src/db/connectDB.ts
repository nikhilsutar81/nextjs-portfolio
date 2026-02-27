import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Reuse existing connection if available
        if (mongoose.connection.readyState >= 1) {
            return;
        }

        await mongoose.connect(process.env.MONGO_URI!, {
            dbName: "nextjs-portfolio",
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 45000,
            retryWrites: true,
            w: "majority",
            tls: true,
            tlsAllowInvalidCertificates: true,
        });

        const connection = mongoose.connection;

        // Add listeners only once
        if (connection.listenerCount("connected") === 0) {
            connection.on("connected", () => {
                console.log("connected to database successfully");
            });
        }

        if (connection.listenerCount("error") === 0) {
            connection.on("error", (error) => {
                console.log("error connecting database");
                console.log(error);
                process.exit(1);
            });
        }
    } catch (error) {
        console.log("Error connecting to DB");
        console.log(error);
    }
};

export default connectDB;