require ("dotenv").config();

module.exports = {
PORT: process.env.PORT,
MONGODB_URL: process.env.MONGODB_URL,
BASE_URL: process.env.BASE_URL,
};