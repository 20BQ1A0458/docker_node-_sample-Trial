// import { createClient } from "redis";

// // Create a new Redis client instance with the specified URL
// const redisClient = createClient({
//   url: process.env.REDIS_URL || "redis://redis:6379",
// });

// // Event listener for Redis client errors
// redisClient.on("error", (err) => console.error("Redis Client Error", err));

// // Immediately Invoked Function Expression (IIFE) to connect the Redis client
// (async () => {
//   await redisClient.connect();
// })();

// // Export the Redis client instance to be used in other parts of the application
// export default redisClient;
