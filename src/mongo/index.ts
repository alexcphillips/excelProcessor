import * as Mongoose from "mongoose";

let database: Mongoose.Connection;

export const connect = () => {
  if (database) return;

  const defaultOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

  Mongoose.connect(
    process.env.MONGO_URI,
    defaultOptions as Mongoose.ConnectOptions
  );

  database = Mongoose.connection;

  database.once("open", async () => {
    console.log("Connected to database");
  });

  database.on("error", () => {
    console.log("Error connecting to database");
  });
};

export const disconnect = () => {
  if (!database) return;
  Mongoose.disconnect();
};
