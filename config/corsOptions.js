const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  origin: (origin, callback) => {
    // !origin condition is for dev env when origin is undefined
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true); // null represents no error thrown
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
